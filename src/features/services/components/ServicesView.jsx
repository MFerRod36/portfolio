function ServicesView({ badge, headingNeutral, services, activeIndex, goTo, carouselRef, cardRefs }) {
  return (
    <section id="services" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        <div className="flex flex-col gap-4">
          <span className="font-display text-xs uppercase tracking-wide-display text-accent">
            {badge}
          </span>
          <h2 className="font-display font-bold leading-none tracking-tight text-5xl md:text-6xl xl:text-7xl text-text">
            {headingNeutral}
          </h2>
        </div>

        {/* Cards — carousel on mobile, grid on desktop */}
        <ul
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pr-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pr-0 md:pb-0"
        >
          {services.map((service, index) => (
            <li
              key={service.number}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative flex flex-col shrink-0 w-[80vw] snap-start bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 md:w-auto md:shrink"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 right-8 font-display font-bold text-5xl text-text/10 select-none pointer-events-none"
              >
                {service.number}
              </span>

              <h3 className="font-display font-bold text-xl md:text-2xl text-text pr-16">
                {service.title}
              </h3>

              <span aria-hidden="true" className="w-8 h-px bg-accent mt-4 mb-6" />

              <p className="font-sans text-sm leading-relaxed text-text/70">
                {service.description}
              </p>

              <p className="mt-8 text-xs font-sans text-text/40 tracking-wide">
                {service.tags.join(' · ')}
              </p>
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
              aria-label={`Ir a ${service.title} (${index + 1} de ${services.length})`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={[
                'rounded-full transition-all duration-300',
                activeIndex === index
                  ? 'w-4 h-1.5 bg-accent'
                  : 'w-1.5 h-1.5 bg-text/30 hover:bg-text/50',
              ].join(' ')}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesView
