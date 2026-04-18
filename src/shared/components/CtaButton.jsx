const sizeClasses = {
  sm: 'px-6 py-2.5 text-xs md:text-sm',
  md: 'px-8 py-3.5 text-sm md:text-base',
  lg: 'px-10 py-4 text-base md:text-lg',
}

const baseClasses = [
  'inline-flex items-center justify-center gap-2',
  'rounded-full',
  'font-display font-semibold tracking-wide',
  'text-text',
  'border border-accent/40',
  'backdrop-blur-xl',
  'bg-linear-[135deg] from-accent/30 via-accent/50 to-accent/30',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.06)]',
  'transition-colors duration-200',
  'hover:via-accent/62 hover:border-accent/55',
  'active:via-accent/70 active:border-accent/60',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  'cursor-pointer',
].join(' ')

export function CtaButton({
  href,
  onClick,
  children,
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) {
  const classes = [
    baseClasses,
    sizeClasses[size],
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
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
