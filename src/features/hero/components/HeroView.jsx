import { CtaButton } from '../../../shared/components/CtaButton'
import SocialIcons from './SocialIcons'

function HeroView({ badge, headingLines, subtitle, cta: { href, label }, portrait }) {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden px-6 pt-32 pb-20 md:px-8 md:pt-36 md:pb-24"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-[11fr_9fr] md:gap-16">
        <div className="flex flex-col items-start gap-6 text-left">
          <p className="px-4 py-1.5 rounded-full bg-forest text-xs uppercase tracking-wide-display font-medium text-paper font-display">
            {badge}
          </p>

          <h1 className="leading-none tracking-tight text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-forest">
            {headingLines.map(({ text, style }) => (
              <span
                key={text}
                className={[
                  'block',
                  style === 'mencken'
                    ? '-mt-[0.15em] font-mencken italic font-bold text-accent'
                    : 'font-display font-bold',
                ].join(' ')}
              >
                {text}
              </span>
            ))}
          </h1>

          <p className="max-w-xl text-sm md:text-base text-forest/75 font-sans">
            {subtitle}
          </p>

          <div className="mt-4">
            <CtaButton href={href}>{label}</CtaButton>
          </div>
        </div>

        {/* Portrait arch and social column share a bottom edge */}
        <div className="flex items-end justify-center gap-8 md:justify-end">
          {/* Arch frame for the portrait; stays an empty forest shape until a photo is set */}
          <div className="w-full max-w-xs md:max-w-sm">
            <div className="aspect-4/5 rounded-t-full bg-forest overflow-hidden">
              {portrait.src && (
                <img
                  src={portrait.src}
                  alt={portrait.alt}
                  width="1200"
                  height="1200"
                  fetchPriority="high"
                  className="size-full object-cover"
                />
              )}
            </div>
          </div>

          <SocialIcons />
        </div>
      </div>
    </section>
  )
}

export default HeroView
