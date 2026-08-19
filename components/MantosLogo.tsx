export default function MantosLogo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="27" rx="15" ry="5.5" stroke="#1d3a5c" strokeWidth="1.6" />
      <ellipse cx="20" cy="22" rx="10" ry="3.6" stroke="#2b6f8f" strokeWidth="1.6" />
      <circle cx="20" cy="12" r="3" fill="#22D3D3" />
      <circle cx="6" cy="22" r="2" fill="#2b8fd0" />
      <circle cx="34" cy="22" r="2" fill="#2b8fd0" />
      <circle cx="12" cy="17" r="1.8" fill="#3f7de0" />
      <circle cx="28" cy="17" r="1.8" fill="#3f7de0" />
    </svg>
  );
}
