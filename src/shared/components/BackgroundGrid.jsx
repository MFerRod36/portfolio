import { useId } from 'react'

const toneClasses = {
  light: 'text-forest',
  dark: 'text-paper',
}

// tone="light" for paper backgrounds, tone="dark" for forest backgrounds.
// Each instance needs its own pattern id so different tones don't collide.
export function BackgroundGrid({ tone = 'light' }) {
  const patternId = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${toneClasses[tone]}`}
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
