'use client';

import { useActionState } from 'react';
import { sendContact, type ContactState } from '@/lib/contact';
import { topics } from '@/lib/data';

const services = [...topics.map((t) => t.title), 'Other'];

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(sendContact, { status: 'idle' });
  const f = state.fields;

  if (state.status === 'sent') {
    return (
      <div className="mt-form-card" role="status">
        <h3 className="mt-heading" style={{ fontWeight: 700, fontSize: 24, margin: '0 0 12px' }}>
          Thanks, your message is on its way.
        </h3>
        <p style={{ margin: 0, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>
          We&apos;ll reply to the email you gave us, usually within two business days.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-form-card mt-form">
      <label className="mt-field">
        <span>Name *</span>
        <input name="name" required maxLength={200} autoComplete="name" defaultValue={f?.name} />
      </label>
      <label className="mt-field">
        <span>Email *</span>
        <input name="email" type="email" required maxLength={200} autoComplete="email" defaultValue={f?.email} />
      </label>
      <label className="mt-field">
        <span>Company or institution</span>
        <input name="company" maxLength={200} autoComplete="organization" defaultValue={f?.company} />
      </label>
      <label className="mt-field">
        <span>Your role</span>
        <input name="role" maxLength={200} autoComplete="organization-title" defaultValue={f?.role} />
      </label>
      <label className="mt-field">
        <span>Phone</span>
        <input name="phone" type="tel" maxLength={200} autoComplete="tel" defaultValue={f?.phone} />
      </label>
      <label className="mt-field">
        <span>Service you need *</span>
        <select key={f?.service} name="service" required defaultValue={f?.service ?? ''}>
          <option value="" disabled>
            Choose one
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-field mt-field-wide">
        <span>Tell us about your project and data *</span>
        <textarea name="message" required maxLength={5000} rows={5} defaultValue={f?.message} />
      </label>
      {/* Honeypot: hidden from people and screen readers, bots fill it in. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mt-honeypot" />
      {state.status === 'error' && (
        <p role="alert" className="mt-field-wide" style={{ margin: 0, color: 'var(--purple)', fontSize: 15 }}>
          {state.message}
        </p>
      )}
      <div className="mt-field-wide">
        <button type="submit" className="mt-btn-primary" disabled={pending}>
          {pending ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
