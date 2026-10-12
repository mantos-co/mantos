import Link from 'next/link';
import MantosLogo from './MantosLogo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 32px',
        background: 'var(--header-bg)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-soft)',
      }}
    >
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
      >
        <MantosLogo />
        <span
          className="mt-heading"
          style={{
            fontWeight: 800,
            fontSize: 26,
            letterSpacing: '0.02em',
            background: 'linear-gradient(90deg,#22D3D3,#4f8ef7,#8b7ff5)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          MANTOS
        </span>
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        <Link href="/#topics" className="mt-nav-link">
          Research
        </Link>
        <Link href="/#projects" className="mt-nav-link">
          Projects
        </Link>
        <Link href="/#team" className="mt-nav-link">
          Team
        </Link>
        <Link href="/#contact" className="mt-nav-cta">
          Get in Touch
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
