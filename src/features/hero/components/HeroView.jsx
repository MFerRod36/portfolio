import HeroDecoration from './HeroDecoration'

function HeroView({ badge, headingLine, subtitle, cta: { href, label } }) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      <HeroDecoration />

      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-8 gap-6">
        <p className="text-xs uppercase tracking-display font-medium text-accent font-display">
          {badge}
        </p>

        <h1 className="font-display font-bold leading-none tracking-tight text-5xl md:text-7xl xl:text-8xl text-text">
          {headingLine}
        </h1>

        <p className="text-base md:text-lg text-text/70 font-sans">
          {subtitle}
        </p>

        <a
          href={href}
          className="mt-4 inline-flex items-center justify-center rounded-sm bg-accent px-8 py-3 font-semibold text-bg font-display transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
        >
          {label}
        </a>
      </div>
    </section>
  )
}

export default HeroView
