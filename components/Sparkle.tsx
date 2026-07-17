/*
 * Brand sparkle — the star motif from the Biolume logo, used as a
 * separate design element. Per brand guidelines it is always drawn
 * in stroke (outline) format, never filled; keep strokeWidth
 * consistent when several sparkles share a composition.
 */
export function Sparkle({
  size = 24,
  strokeWidth = 1,
  className,
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 1 C 12.55 7.6, 16.4 11.45, 23 12 C 16.4 12.55, 12.55 16.4, 12 23 C 11.45 16.4, 7.6 12.55, 1 12 C 7.6 11.45, 11.45 7.6, 12 1 Z" />
    </svg>
  );
}

/* Slim eight-point variant for fine decorative accents. */
export function SparkleBurst({
  size = 24,
  strokeWidth = 1,
  className,
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M12 2v20M2 12h20M5.2 5.2l13.6 13.6M18.8 5.2 5.2 18.8" />
    </svg>
  );
}
