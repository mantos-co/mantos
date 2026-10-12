export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-section mt-section-contact"
      style={{ borderTop: '1px solid var(--border-soft)', background: 'var(--bg-alt)' }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 40,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h2
            className="mt-heading mt-contact-title"
            style={{ fontWeight: 800, lineHeight: 1.02, margin: '0 0 20px', maxWidth: 640 }}
          >
            Have a subsurface problem?
          </h2>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: 18, fontWeight: 300 }}>
            Tell us about the data you have. We will tell you what it can resolve.
          </p>
        </div>
        <a href="mailto:contacto@mantos.co" className="mt-btn-primary">
          contacto@mantos.co
        </a>
      </div>
    </section>
  );
}
