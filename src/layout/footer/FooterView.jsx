export function FooterView({ email, socialLinks, navItems }) {
  return (
    <footer className="bg-page border-t border-white/10 py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16">
          <div>
            <p className="font-display font-bold text-2xl tracking-tight text-text">
              Fernanda Rodriguez
            </p>
            <div className="flex items-center gap-2 mt-4 mb-4" aria-hidden="true">
              <span className="size-1 rounded-full bg-accent" />
              <span className="w-12 h-px bg-white/20" />
            </div>
            <a
              href={`mailto:${email}`}
              className="font-sans text-sm text-text hover:text-text/70 transition-colors duration-200"
            >
              {email}
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-text/50 hover:text-accent hover:scale-110 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-wide-display text-accent mb-4">
              Navegación
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-text/60 hover:text-text transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="font-sans text-xs text-text/40 text-center">
            © 2026 Fernanda Rodriguez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
