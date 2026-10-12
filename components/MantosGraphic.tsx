export default function MantosGraphic({ size = 300 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="28" rx="15" ry="5" style={{ stroke: 'var(--ring-1)' }} strokeWidth="1" />
      <ellipse cx="20" cy="24" rx="11" ry="3.6" style={{ stroke: 'var(--ring-2)' }} strokeWidth="1" />
      <ellipse cx="20" cy="20.5" rx="7" ry="2.3" style={{ stroke: 'var(--ring-3)' }} strokeWidth="1" />
      <path d="M20 11 Q13 18.5 6 20 M20 11 Q27 18.5 34 20 M20 11 L12 15.5 M20 11 L28 15.5" style={{ stroke: 'var(--node-link)' }} strokeWidth="0.25" strokeLinecap="round" />
      <circle cx="20" cy="11" r="1.7" style={{ fill: 'var(--node-top)' }} />
      <circle cx="6" cy="20" r="1.2" style={{ fill: 'var(--node-outer)' }} />
      <circle cx="34" cy="20" r="1.2" style={{ fill: 'var(--node-outer)' }} />
      <circle cx="12" cy="15.5" r="1" style={{ fill: 'var(--node-mid)' }} />
      <circle cx="28" cy="15.5" r="1" style={{ fill: 'var(--node-mid)' }} />
    </svg>
  );
}
