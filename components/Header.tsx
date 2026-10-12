import Link from 'next/link';
import MantosLogo from './MantosLogo';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header
      className="mt-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
          className="mt-heading mt-wordmark"
          style={{
            fontWeight: 800,
            letterSpacing: '0.02em',
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          MANTOS
        </span>
      </Link>
      <HeaderNav />
    </header>
  );
}
