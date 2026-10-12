'use client';

import { useRef } from 'react';
import Link from 'next/link';
import type { Project } from '@/lib/types';

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (dir: number) => {
    const el = railRef.current;
    if (el) el.scrollBy({ left: dir * ((el.querySelector<HTMLElement>('.mt-rail-card')?.offsetWidth ?? 420) + 24), behavior: 'smooth' });
  };

  return (
    <section
      id="projects"
      className="mt-section-flush"
      style={{ borderTop: '1px solid var(--border-soft)', background: 'var(--bg-alt)' }}
    >
      <div className="mt-container-padded">
        <div className="mt-eyebrow-row">
          <span
            style={{ color: 'var(--cyan)', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            02 — Portfolio
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
            marginBottom: 44,
          }}
        >
          <h2
            className="mt-heading mt-section-title"
            style={{ fontWeight: 700, lineHeight: 1.05, margin: 0, maxWidth: 700 }}
          >
            Selected projects.
          </h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={() => scrollRail(-1)}
              aria-label="Previous project"
              className="mt-icon-btn"
            >
              ←
            </button>
            <button onClick={() => scrollRail(1)} aria-label="Next project" className="mt-icon-btn">
              →
            </button>
          </div>
        </div>
      </div>
      <div
        ref={railRef}
        className="mt-scroll mt-rail"
      >
        <div style={{ flex: '0 0 calc((100vw - 1360px) / 2)', minWidth: 0 }} />
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="mt-project-card mt-rail-card">
            <div className="mt-tile" style={{ height: 230, padding: 16 }}>
              {p.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="mt-tile-img" src={p.imageUrl} alt="" />
              )}
              <span className={`mt-tile-label ${p.imageUrl ? 'mt-tile-label-overlay' : ''}`}>{p.image}</span>
            </div>
            <div className="mt-card-body">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 16,
                  fontSize: 12,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--indigo)',
                  marginBottom: 14,
                }}
              >
                <span>{p.domain}</span>
                <span style={{ color: 'var(--muted-3)' }}>{p.year}</span>
              </div>
              <h3 className="mt-heading" style={{ fontWeight: 700, fontSize: 23, margin: '0 0 12px', lineHeight: 1.2 }}>
                {p.title}
              </h3>
              <p style={{ margin: '0 0 20px', color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, fontWeight: 300 }}>
                {p.body}
              </p>
              <span style={{ fontSize: 14, color: 'var(--purple)' }}>View project →</span>
            </div>
          </Link>
        ))}
        <div className="mt-rail-end" />
      </div>
    </section>
  );
}
