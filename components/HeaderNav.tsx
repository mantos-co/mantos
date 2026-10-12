'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/#topics', label: 'Research' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#team', label: 'Team' },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="mt-nav">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="mt-nav-link">
            {l.label}
          </Link>
        ))}
        <Link href="/#contact" className="mt-nav-cta">
          Get in Touch
        </Link>
        <ThemeToggle />
      </nav>
      <div className="mt-nav-mobile">
        <ThemeToggle />
        <button
          type="button"
          className="mt-theme-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mt-mobile-menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mt-mobile-menu" className="mt-mobile-menu">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="mt-mobile-menu-link" onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="mt-nav-cta" style={{ justifyContent: 'center' }} onClick={close}>
            Get in Touch
          </Link>
        </div>
      )}
    </>
  );
}
