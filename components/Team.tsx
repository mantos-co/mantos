import Link from 'next/link';
import type { TeamMember } from '@/lib/types';

export default function Team({ team }: { team: TeamMember[] }) {
  return (
    <section id="team" style={{ padding: '110px 32px', borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 56 }}>
          <span
            style={{ color: 'var(--cyan)', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            03 — Team
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>
        <h2
          className="mt-heading"
          style={{ fontWeight: 700, fontSize: 46, lineHeight: 1.05, margin: '0 0 20px', maxWidth: 820 }}
        >
          The people behind the models.
        </h2>
        <p style={{ margin: '0 0 60px', color: 'var(--muted)', fontSize: 17, fontWeight: 300 }}>
          Select a card to see publications and project history.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 24 }}>
          {team.map((m) => (
            <Link key={m.slug} href={`/team/${m.slug}`} className="mt-team-card">
              <div className="mt-tile-purple" style={{ height: 300, padding: 16 }}>
                <span className="mt-tile-label">portrait — {m.name}</span>
              </div>
              <div style={{ padding: 28 }}>
                <h3 className="mt-heading" style={{ fontWeight: 700, fontSize: 24, margin: '0 0 8px' }}>
                  {m.name}
                </h3>
                <div
                  style={{
                    color: 'var(--cyan)',
                    fontSize: 14,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 18,
                  }}
                >
                  {m.role}
                </div>
                <p style={{ margin: '0 0 24px', color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, fontWeight: 300 }}>
                  {m.blurb}
                </p>
                <span style={{ fontSize: 14, color: 'var(--purple)' }}>View profile →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
