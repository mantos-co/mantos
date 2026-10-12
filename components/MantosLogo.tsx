export default function MantosLogo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="27" rx="15" ry="5.5" style={{ stroke: 'var(--logo-ring-1)' }} strokeWidth="1.6" />
      <ellipse cx="20" cy="22" rx="10" ry="3.6" style={{ stroke: 'var(--logo-ring-2)' }} strokeWidth="1.6" />
      <circle cx="20" cy="12" r="3" style={{ fill: 'var(--node-top)' }} />
      <circle cx="6" cy="22" r="2" style={{ fill: 'var(--node-outer)' }} />
      <circle cx="34" cy="22" r="2" style={{ fill: 'var(--node-outer)' }} />
      <circle cx="12" cy="17" r="1.8" style={{ fill: 'var(--node-mid)' }} />
      <circle cx="28" cy="17" r="1.8" style={{ fill: 'var(--node-mid)' }} />
    </svg>
  );
}
