import { SOCIAL_LINKS } from '../../../shared/config/socials';

function SocialIcons() {
  return (
    <div className="absolute right-8 bottom-12 hidden md:flex flex-col items-center gap-4">
      <span aria-hidden="true" className="w-px h-12 bg-white/20" />
      <span aria-hidden="true" className="size-1 rounded-full bg-accent" />

      {SOCIAL_LINKS.map(({ name, href, path }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-white/40 hover:text-white/90 hover:-translate-y-0.5 transition-[color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path d={path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
