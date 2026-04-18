import { CtaButton } from '../../../shared/components/CtaButton'
import SocialIcons from './SocialIcons'

function HeroView({ badge, headingLines, subtitle, cta: { href, label } }) {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <SocialIcons />

      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-8 gap-6">
        <p className="text-xs uppercase tracking-wide-display font-medium text-accent font-display">
          {badge}
        </p>

        <h1 className="leading-none tracking-tight text-5xl md:text-7xl xl:text-8xl text-text">
          {headingLines.map(({ text, style }) => (
            <span
              key={text}
              className={[
                'block',
                style === 'mencken'
                  ? 'font-mencken italic font-normal text-accent'
                  : 'font-display font-bold',
              ].join(' ')}
            >
              {text}
            </span>
          ))}
        </h1>

        <div className="flex flex-col items-center gap-10 mt-6">
          <p className="max-w-2xl text-sm md:text-base text-text/70 font-sans">
            {subtitle}
          </p>

          <CtaButton href={href}>{label}</CtaButton>
        </div>
      </div>
    </section>
  )
}

export default HeroView
