export default function Footer() {
  return (
    <footer
      className="mt-footer"
      style={{
        borderTop: '1px solid var(--border-soft)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
        color: 'var(--muted-3)',
        fontSize: 14,
        fontWeight: 300,
      }}
    >
      <span>© {new Date().getFullYear()} Mantos S.A.S</span>
      <span>Geophysics · Inverse problems · AI</span>
    </footer>
  );
}
