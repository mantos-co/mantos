import ContactForm from './ContactForm';

export default function Contact() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '');

  return (
    <section
      id="contact"
      className="mt-section mt-section-contact"
      style={{ borderTop: '1px solid var(--border-soft)', background: 'var(--bg-alt)' }}
    >
      <div className="mt-contact-grid">
        <div>
          <h2
            className="mt-heading mt-contact-title"
            style={{ fontWeight: 800, lineHeight: 1.02, margin: '0 0 20px', maxWidth: 640 }}
          >
            Have a subsurface problem?
          </h2>
          <p style={{ margin: '0 0 36px', color: 'var(--muted)', fontSize: 18, fontWeight: 300 }}>
            Tell us about the data you have. We will tell you what it can resolve.
          </p>
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hello Mantosfera, I would like to talk about a project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-btn-secondary"
              style={{ marginBottom: 20 }}
            >
              Chat on WhatsApp ↗
            </a>
          )}
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: 15, fontWeight: 300 }}>
            Or email us directly at <a href="mailto:contacto@mantos.co">contacto@mantos.co</a>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
