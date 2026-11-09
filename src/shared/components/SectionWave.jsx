const positionClasses = {
  top: 'bottom-full translate-y-px',
  bottom: 'top-full -translate-y-px rotate-180',
}

/**
 * Soft wave that blends a forest section into the paper section next to it.
 * Render it inside a `relative` forest section; it overflows outward.
 */
export function SectionWave({ position = 'top' }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 z-10 block h-6 w-full text-forest md:h-10 xl:h-12 ${positionClasses[position]}`}
    >
      <path
        fill="currentColor"
        d="M0 24 C120 4 240 4 360 24 S600 44 720 24 S960 4 1080 24 S1320 44 1440 24 V48 H0 Z"
      />
    </svg>
  )
}
