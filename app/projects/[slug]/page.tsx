import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mantos`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const credits = project.credits;

  return (
    <main style={{ maxWidth: 1360, margin: '0 auto', padding: '56px 32px 130px' }}>
      <Link href="/" className="mt-back-btn">
        ← Back to projects
      </Link>
      <div
        style={{
          display: 'flex',
          gap: 20,
          fontSize: 13,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--cyan)',
          marginBottom: 24,
        }}
      >
        <span>{project.domain}</span>
        <span style={{ color: 'var(--muted-3)' }}>{project.year}</span>
      </div>
      <h1
        className="mt-heading"
        style={{
          fontWeight: 800,
          fontSize: 72,
          lineHeight: 0.98,
          letterSpacing: '-0.02em',
          margin: '0 0 32px',
          maxWidth: 1000,
        }}
      >
        {project.title}
      </h1>
      <p style={{ margin: '0 0 56px', maxWidth: 760, color: 'var(--text-dim)', fontSize: 20, lineHeight: 1.6, fontWeight: 300 }}>
        {project.summary}
      </p>

      <div
        className="mt-tile"
        style={{ height: 460, borderRadius: 16, border: '1px solid var(--border)', padding: 18, marginBottom: 64 }}
      >
        <span className="mt-tile-label">{project.image}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 24, marginBottom: 80 }}>
        {project.results.map((r) => (
          <div key={r.label} style={{ padding: '30px 28px', border: '1px solid var(--border)', borderRadius: 14, background: 'var(--card-bg)' }}>
            <div
              className="mt-heading"
              style={{
                fontWeight: 700,
                fontSize: 38,
                letterSpacing: '-0.01em',
                background: 'linear-gradient(90deg,#22D3D3,#8b7ff5)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: 10,
              }}
            >
              {r.value}
            </div>
            <div style={{ color: 'var(--muted)', fontSize: 15, fontWeight: 300 }}>{r.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,300px)', gap: 72, alignItems: 'start' }}>
        <div>
          {project.sections.map((s) => (
            <div key={s.label} style={{ marginBottom: 52 }}>
              <h2
                className="mt-heading"
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--indigo)',
                  margin: '0 0 18px',
                }}
              >
                {s.label}
              </h2>
              <p style={{ margin: 0, maxWidth: 720, color: 'var(--text-dim)', fontSize: 18, lineHeight: 1.7, fontWeight: 300 }}>
                {s.body}
              </p>
            </div>
          ))}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 20, marginTop: 24 }}>
            {project.gallery.map((g) => (
              <div key={g} className="mt-tile-purple" style={{ height: 240, borderRadius: 14, border: '1px solid var(--border)', padding: 14 }}>
                <span className="mt-tile-label">{g}</span>
              </div>
            ))}
          </div>
        </div>
        <aside style={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: 16 }}>
              Details
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                borderTop: '1px solid var(--border)',
                paddingTop: 16,
                fontSize: 15,
                fontWeight: 300,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ color: 'var(--muted-2)' }}>Client</span>
                <span style={{ color: 'var(--text)', textAlign: 'right' }}>{project.client}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ color: 'var(--muted-2)' }}>Duration</span>
                <span style={{ color: 'var(--text)', textAlign: 'right' }}>{project.duration}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ color: 'var(--muted-2)' }}>Scale</span>
                <span style={{ color: 'var(--text)', textAlign: 'right' }}>{project.scale}</span>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: 16 }}>
              Methods &amp; stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.stack.map((tag) => (
                <span key={tag} className="mt-tag-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: 16 }}>
              Team
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {credits.map((c) => (
                <Link key={c.slug} href={`/team/${c.slug}`} className="mt-credit-card">
                  <div style={{ fontSize: 16, color: 'var(--text)', marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted-2)', fontWeight: 300 }}>{c.role}</div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
