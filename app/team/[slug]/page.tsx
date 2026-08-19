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
    <main style={{ maxWidth: 1360, margin: '0 auto', padding: '56px 32px 130px' }}>
      <Link href="/" className="mt-back-btn">
        ← Back to team
      </Link>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,360px) minmax(0,1fr)', gap: 64, alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: 120 }}>
          <div
            className="mt-tile-purple"
            style={{ height: 420, borderRadius: 14, border: '1px solid var(--border)', padding: 16, marginBottom: 28 }}
          >
            <span className="mt-tile-label">portrait — {person.name}</span>
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
          <h1 className="mt-heading" style={{ fontWeight: 800, fontSize: 64, lineHeight: 1.0, margin: '0 0 28px' }}>
            {person.name}
          </h1>
          <p style={{ margin: '0 0 40px', maxWidth: 720, color: 'var(--text-dim)', fontSize: 19, lineHeight: 1.65, fontWeight: 300 }}>
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
                style={{ display: 'grid', gridTemplateColumns: '72px minmax(0,1fr)', gap: 24, padding: '24px 0', borderBottom: '1px solid var(--border)' }}
              >
                <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 14, color: 'var(--muted-3)' }}>{pub.year}</span>
                <div>
                  <div style={{ fontSize: 19, lineHeight: 1.45, marginBottom: 8, color: 'var(--text)' }}>{pub.title}</div>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 20 }}>
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
