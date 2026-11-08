const baseClasses = [
  'inline-flex items-center justify-center gap-2',
  'px-8 py-3.5 rounded-full',
  'font-display text-sm md:text-base font-semibold tracking-wide',
  'text-paper',
  'bg-forest',
  'border',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.06)]',
  'transition-[filter] duration-200',
  'hover:brightness-125',
  'active:brightness-110',
  'focus-visible:outline-2 focus-visible:outline-offset-4',
  'cursor-pointer',
].join(' ')

// On forest sections the button needs a paper border to stand out,
// and the focus ring must contrast with the section behind it
const surfaceClasses = {
  light: 'border-forest focus-visible:outline-forest',
  dark: 'border-paper/60 focus-visible:outline-accent',
}

export function CtaButton({
  href,
  children,
  surface = 'light',
  className = '',
  type = 'button',
  disabled = false,
}) {
  const classes = [
    baseClasses,
    surfaceClasses[surface],
    disabled ? 'opacity-60 pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
