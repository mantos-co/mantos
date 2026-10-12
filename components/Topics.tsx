import { topics } from '@/lib/data';

export default function Topics() {
  return (
    <section id="topics" className="mt-section" style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div className="mt-eyebrow-row">
          <span
            style={{
              color: 'var(--cyan)',
              fontSize: 13,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            01 — What we do
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>
        <h2
          className="mt-heading mt-section-title"
          style={{ fontWeight: 700, lineHeight: 1.05, maxWidth: 820 }}
        >
          Three disciplines, one pipeline.
        </h2>
        <div className="mt-grid-3">
          {topics.map((t) => (
            <article key={t.num} className="mt-topic-card">
              <div
                className="mt-heading"
                style={{ fontSize: 13, letterSpacing: '0.2em', color: 'var(--indigo)', marginBottom: 28 }}
              >
                {t.num}
              </div>
              <h3
                className="mt-heading"
                style={{ fontWeight: 700, fontSize: 26, letterSpacing: '-0.01em', margin: '0 0 16px' }}
              >
                {t.title}
              </h3>
              <p style={{ margin: '0 0 24px', color: 'var(--muted)', fontSize: 16, lineHeight: 1.65, fontWeight: 300 }}>
                {t.body}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {t.tags.map((tag) => (
                  <span key={tag} className="mt-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
