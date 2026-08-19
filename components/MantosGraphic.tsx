export default function MantosGraphic({ size = 300 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="28" rx="15" ry="5" stroke="#16304d" strokeWidth="1" />
      <ellipse cx="20" cy="24" rx="11" ry="3.6" stroke="#1c4a68" strokeWidth="1" />
      <ellipse cx="20" cy="20.5" rx="7" ry="2.3" stroke="#22617f" strokeWidth="1" />
      <circle cx="20" cy="11" r="1.7" fill="#22D3D3" />
      <circle cx="6" cy="20" r="1.2" fill="#2b8fd0" />
      <circle cx="34" cy="20" r="1.2" fill="#2b8fd0" />
      <circle cx="12" cy="15.5" r="1" fill="#3f7de0" />
      <circle cx="28" cy="15.5" r="1" fill="#3f7de0" />
      <path d="M20 11 L6 20 M20 11 L34 20 M20 11 L12 15.5 M20 11 L28 15.5" stroke="#173b57" strokeWidth="0.6" />
    </svg>
  );
}
