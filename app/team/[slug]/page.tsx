import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTeamMemberBySlug, getProjects } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = await getTeamMemberBySlug(slug);
  if (!person) return {};
  return {
    title: `${person.name} — Mantos`,
    description: person.bio,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [person, allProjects] = await Promise.all([getTeamMemberBySlug(slug), getProjects()]);
  if (!person) notFound();

  return (
    <main className="mt-detail">
      <Link href="/" className="mt-back-btn">
        ← Back to team
      </Link>
      <div className="mt-person-layout">
        <aside className="mt-detail-aside">
          <div
            className="mt-tile-purple mt-portrait-tile"
            style={{ borderRadius: 14, border: '1px solid var(--border)', padding: 16, marginBottom: 28 }}
          >
            {person.photoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="mt-tile-img" src={person.photoUrl} alt="" />
            )}
            <span className={`mt-tile-label ${person.photoUrl ? 'mt-tile-label-overlay' : ''}`}>
              portrait — {person.name}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--muted)', fontSize: 15, fontWeight: 300 }}>
            <span>{person.affiliation}</span>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            {person.scholarUrl && (
              <a href={person.scholarUrl} target="_blank" rel="noopener noreferrer">
                Google Scholar profile ↗
              </a>
            )}
          </div>
        </aside>
        <div>
          <div style={{ color: 'var(--cyan)', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
            {person.role}
          </div>
          <h1 className="mt-heading mt-detail-title" style={{ fontWeight: 800, lineHeight: 1.0, margin: '0 0 28px' }}>
            {person.name}
          </h1>
          <p className="mt-detail-lead" style={{ margin: '0 0 40px', maxWidth: 720, color: 'var(--text-dim)', lineHeight: 1.65, fontWeight: 300 }}>
            {person.bio}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 80 }}>
            {person.expertise.map((tag) => (
              <span key={tag} className="mt-tag-lg">
                {tag}
              </span>
            ))}
          </div>

          <h2
            className="mt-heading"
            style={{ fontWeight: 700, fontSize: 15, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--indigo)', margin: '0 0 28px' }}
          >
            Published papers
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border)', marginBottom: 80 }}>
            {person.papers.map((pub) => (
              <div
                key={pub.title}
                className="mt-paper-row"
                style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}
              >
                <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 14, color: 'var(--muted-3)' }}>{pub.year}</span>
                <div>
                  <div className="mt-paper-title" style={{ lineHeight: 1.45, marginBottom: 8, color: 'var(--text)' }}>{pub.title}</div>
                  <div style={{ fontSize: 14, color: 'var(--muted-4)', fontWeight: 300 }}>{pub.venue}</div>
                </div>
              </div>
            ))}
          </div>

          <h2
            className="mt-heading"
            style={{ fontWeight: 700, fontSize: 15, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--indigo)', margin: '0 0 28px' }}
          >
            Projects
          </h2>
          <div className="mt-grid-2">
            {person.projects.map((pr) => {
              const linked = allProjects.find((proj) => proj.title === pr.title);
              const content = (
                <>
                  <div style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: 12 }}>
                    {pr.role}
                  </div>
                  <h3 className="mt-heading" style={{ fontWeight: 700, fontSize: 20, margin: '0 0 10px' }}>
                    {pr.title}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, fontWeight: 300 }}>{pr.body}</p>
                </>
              );
              return linked ? (
                <Link
                  key={pr.title}
                  href={`/projects/${linked.slug}`}
                  className="mt-project-card"
                  style={{ padding: 26 }}
                >
                  {content}
                </Link>
              ) : (
                <article key={pr.title} style={{ padding: 26, border: '1px solid var(--border)', borderRadius: 14, background: 'var(--card-bg)' }}>
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
