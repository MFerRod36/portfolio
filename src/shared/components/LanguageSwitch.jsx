export function LanguageSwitch({ lang, onToggle }) {
  const isEn = lang === 'en';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label={isEn ? 'Switch to Spanish' : 'Cambiar a inglés'}
      onClick={onToggle}
      className="relative flex h-8 w-16 rounded-full cursor-pointer bg-paper border border-forest/20 hover:brightness-95 transition-[filter] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
    >
      {/* Pearl — rectangular, covers exactly half the pill */}
      <span
        aria-hidden="true"
        className={`absolute top-0.5 left-0.5 w-[calc(50%-4px)] h-[calc(100%-4px)] rounded-full bg-forest border border-forest shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_3px_rgba(0,0,0,0.2)] [transition:transform_280ms_var(--ease-spring)] ${isEn ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'}`}
      />

      {/* Labels — flex-1 centers each one in its own half */}
      <span
        className={[
          'relative z-10 flex-1 flex items-center justify-center',
          'font-display text-[10px] font-semibold tracking-widest uppercase',
          'transition-colors duration-200',
          isEn ? 'text-forest' : 'text-paper',
        ].join(' ')}
      >
        ES
      </span>
      <span
        className={[
          'relative z-10 flex-1 flex items-center justify-center',
          'font-display text-[10px] font-semibold tracking-widest uppercase',
          'transition-colors duration-200',
          isEn ? 'text-paper' : 'text-forest',
        ].join(' ')}
      >
        EN
      </span>
    </button>
  );
}
