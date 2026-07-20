export default function Moth({ className = "" }) {
  return (
    <svg viewBox="0 0 64 48" className={className} width="28" height="22" aria-hidden="true">
      <path
        d="M32 8c-2 6-10 8-16 6-4 10 2 20 12 20 1 4 2 7 4 9 2-2 3-5 4-9 10 0 16-10 12-20-6 2-14 0-16-6z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="32" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}
