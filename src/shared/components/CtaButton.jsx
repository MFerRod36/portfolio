const baseClasses = [
  'inline-flex items-center justify-center gap-2',
  'px-8 py-3.5 rounded-full',
  'font-display text-sm md:text-base font-semibold tracking-wide',
  'text-forest',
  'border border-accent',
  'bg-accent',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.06)]',
  'transition-[filter] duration-200',
  'hover:brightness-95',
  'active:brightness-90',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest',
  'cursor-pointer',
].join(' ')

export function CtaButton({
  href,
  children,
  className = '',
  type = 'button',
  disabled = false,
}) {
  const classes = [
    baseClasses,
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
