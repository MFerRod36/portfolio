export function LanguageSwitch({ lang, onToggle }) {
  const isEn = lang === 'en';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label={isEn ? 'Switch to Spanish' : 'Cambiar a inglés'}
      onClick={onToggle}
      className="relative flex h-7 w-14 rounded-full cursor-pointer bg-white/8 border border-white/12 backdrop-blur-sm hover:border-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/* Pearl — rectangular, covers exactly half the pill */}
      <span
        aria-hidden="true"
        className={`absolute top-[3px] left-[3px] w-[calc(50%-6px)] h-[calc(100%-6px)] rounded-full bg-white/18 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_3px_rgba(0,0,0,0.2)] [transition:transform_280ms_var(--ease-spring)] ${isEn ? 'translate-x-7' : 'translate-x-0'}`}
      />

      {/* Labels — flex-1 centers each one in its own half */}
      <span
        className={[
          'relative z-10 flex-1 flex items-center justify-center',
          'font-display text-[10px] font-medium tracking-widest uppercase',
          'transition-colors duration-200',
          isEn ? 'text-white/40' : 'text-white/90',
        ].join(' ')}
      >
        ES
      </span>
      <span
        className={[
          'relative z-10 flex-1 flex items-center justify-center',
          'font-display text-[10px] font-medium tracking-widest uppercase',
          'transition-colors duration-200',
          isEn ? 'text-white/90' : 'text-white/40',
        ].join(' ')}
      >
        EN
      </span>
    </button>
  );
}
