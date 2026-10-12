import MantosGraphic from './MantosGraphic';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '96px 32px 120px',
        backgroundImage: 'radial-gradient(var(--hero-dots) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.35fr) minmax(0,1fr)',
          gap: 48,
          alignItems: 'center',
        }}
      >
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
            className="mt-heading"
            style={{
              fontWeight: 800,
              fontSize: 104,
              lineHeight: 0.94,
              letterSpacing: '-0.02em',
              margin: '0 0 40px',
              textWrap: 'balance',
            }}
          >
            We build the{' '}
            <span
              style={{
                background: 'linear-gradient(90deg,#22D3D3 0%,#3f8ef7 45%,#8b7ff5 100%)',
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
            style={{
              maxWidth: 520,
              margin: '0 0 44px',
              fontSize: 19,
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MantosGraphic size={300} />
        </div>
      </div>
    </section>
  );
}
