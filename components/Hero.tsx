import MantosGraphic from './MantosGraphic';

export default function Hero() {
  return (
    <section
      className="mt-hero"
      style={{
        position: 'relative',
        backgroundImage: 'radial-gradient(var(--hero-dots) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div className="mt-hero-grid">
        <div>
          <div
            style={{
              color: 'var(--cyan)',
              fontSize: 13,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginBottom: 34,
            }}
          >
            Mantos Technology Studio · Est. 2022
          </div>
          <h1
            className="mt-heading mt-hero-title"
            style={{
              fontWeight: 800,
              lineHeight: 0.94,
              letterSpacing: '-0.02em',
              textWrap: 'balance',
            }}
          >
            We build the{' '}
            <span
              style={{
                background: 'var(--gradient-brand)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              intelligence
            </span>{' '}
            behind tomorrow.
          </h1>
          <p
            className="mt-hero-lead"
            style={{
              maxWidth: 520,
              lineHeight: 1.6,
              color: 'var(--muted)',
              fontWeight: 300,
            }}
          >
            Geophysics, inverse problems and AI solutions for teams that need to see what lies
            beneath. From data to decision — rigorously.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#projects" className="mt-btn-primary">
              See our work
            </a>
            <a href="#team" className="mt-btn-secondary">
              Meet the Team
            </a>
          </div>
        </div>
        <div className="mt-hero-graphic">
          <MantosGraphic size={300} />
        </div>
      </div>
    </section>
  );
}
