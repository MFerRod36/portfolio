function ServicesView({ badge, headingNeutral, slideLabel, services, activeIndex, goTo, carouselRef, cardRefs }) {
  return (
    <section id="services" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        <div className="flex flex-col gap-4">
          <span className="font-display text-xs uppercase tracking-wide-display text-accent-strong">
            {badge}
          </span>
          <h2 className="font-display font-bold leading-none tracking-tight text-5xl md:text-6xl xl:text-7xl text-forest">
            {headingNeutral}
          </h2>
        </div>

        {/* Cards — carousel on mobile, grid on desktop */}
        <ul
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0"
        >
          {services.map((service, index) => (
            <li
              key={service.number}
              ref={(el) => { cardRefs.current[index] = el }}
              className="relative flex flex-col shrink-0 w-[80vw] snap-start bg-forest/5 border border-forest/15 rounded-2xl p-8 hover:bg-forest/10 hover:border-forest/25 transition-all duration-300 md:w-auto md:shrink"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 right-8 font-display font-bold text-5xl text-accent/40 select-none pointer-events-none"
              >
                {service.number}
              </span>

              <h3 className="font-display font-bold text-xl md:text-2xl text-forest pr-16">
                {service.title}
              </h3>

              <span aria-hidden="true" className="w-8 h-px bg-accent mt-4 mb-6" />

              <p className="font-sans text-sm leading-relaxed text-forest/75">
                {service.description}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 rounded-full bg-paper border border-forest/20 text-xs font-sans text-forest tracking-wide"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Dots — mobile/tablet only */}
        <div className="flex items-center justify-center gap-2 md:hidden">
          {services.map((service, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={slideLabel(service.title, index + 1, services.length)}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={[
                'rounded-full transition-all duration-300',
                activeIndex === index
                  ? 'w-4 h-1.5 bg-accent-strong'
                  : 'w-1.5 h-1.5 bg-forest/60 hover:bg-forest/80',
              ].join(' ')}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesView
