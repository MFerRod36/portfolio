import { SOCIAL_LINKS } from '../../../shared/config/socials';

function SocialIcons() {
  return (
    <div className="flex items-center gap-5">
      {SOCIAL_LINKS.map(({ name, href, path }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-forest/75 hover:text-forest hover:-translate-y-0.5 transition-[color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
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
