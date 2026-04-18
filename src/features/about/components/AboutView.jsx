function AboutView({ badge, headingNeutral, headingAccent, body }) {
  return (
    <section id="about" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        <div className="flex flex-col gap-4">
          <span className="font-display text-xs uppercase tracking-wide-display text-accent">
            {badge}
          </span>
          <h2 className="font-display font-bold leading-none tracking-tight text-5xl md:text-6xl xl:text-7xl">
            <span className="text-text">{headingNeutral}</span>
            <span className="text-accent"> {headingAccent}</span>
          </h2>
        </div>

        <p className="font-sans text-sm md:text-base leading-relaxed text-text/70 max-w-4xl">
          {body}
        </p>

      </div>
    </section>
  )
}

export default AboutView
