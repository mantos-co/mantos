'use server';

import { topics } from './data';

export type ContactFields = Record<'name' | 'email' | 'company' | 'role' | 'phone' | 'service' | 'message', string>;

export type ContactState = {
  status: 'idle' | 'sent' | 'error';
  message?: string;
  fields?: ContactFields;
};

const TO = 'contacto@mantos.co';
const SERVICES = [...topics.map((t) => t.title), 'Other'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? '').trim();
  // Hidden field humans never see; bots that fill it get a fake success.
  if (get('website')) return { status: 'sent' };

  const fields: ContactFields = {
    name: get('name'),
    email: get('email'),
    company: get('company'),
    role: get('role'),
    phone: get('phone'),
    service: get('service'),
    message: get('message'),
  };
  const fail = (message: string): ContactState => ({ status: 'error', message, fields });

  if (!fields.name || !fields.email || !fields.service || !fields.message) {
    return fail('Please fill in your name, email, the service you need and a message.');
  }
  if (!EMAIL_RE.test(fields.email)) return fail('Please enter a valid email address.');
  if (!SERVICES.includes(fields.service)) return fail('Please choose a service from the list.');
  const { message, ...short } = fields;
  if (Object.values(short).some((v) => v.length > 200) || message.length > 5000) {
    return fail('Some fields are too long. Please shorten your message.');
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_FROM_EMAIL is not set');
    return fail(`The form is not available right now. Please write to us at ${TO}.`);
  }

  const text = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Company: ${fields.company || '-'}`,
    `Role: ${fields.role || '-'}`,
    `Phone: ${fields.phone || '-'}`,
    `Service: ${fields.service}`,
    '',
    fields.message,
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [TO],
        reply_to: fields.email,
        subject: `Website contact: ${fields.service} — ${fields.name}${fields.company ? ` (${fields.company})` : ''}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error('Contact form: Resend responded', res.status, await res.text());
      return fail(`We couldn't send your message. Please try again or write to us at ${TO}.`);
    }
  } catch (err) {
    console.error('Contact form: request to Resend failed', err);
    return fail(`We couldn't send your message. Please try again or write to us at ${TO}.`);
  }

  return { status: 'sent' };
}
