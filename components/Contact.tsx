export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: '110px 32px 130px', borderTop: '1px solid var(--border-soft)', background: 'var(--bg-alt)' }}
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
            className="mt-heading"
            style={{ fontWeight: 800, fontSize: 52, lineHeight: 1.02, margin: '0 0 20px', maxWidth: 640 }}
          >
            Have a subsurface problem?
          </h2>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: 18, fontWeight: 300 }}>
            Tell us about the data you have. We will tell you what it can resolve.
          </p>
        </div>
        <a href="mailto:hello@mantos.studio" className="mt-btn-primary">
          hello@mantos.studio
        </a>
      </div>
    </section>
  );
}
