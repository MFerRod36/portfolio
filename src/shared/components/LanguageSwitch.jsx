export function LanguageSwitch({ lang, onToggle }) {
  const isEn = lang === 'en';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label={isEn ? 'Switch to Spanish' : 'Cambiar a inglés'}
      onClick={onToggle}
      className="relative flex h-7 w-14 rounded-full cursor-pointer bg-accent border border-accent hover:brightness-95 transition-[filter] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
    >
      {/* Pearl — rectangular, covers exactly half the pill */}
      <span
        aria-hidden="true"
        className={`absolute top-[3px] left-[3px] w-[calc(50%-6px)] h-[calc(100%-6px)] rounded-full bg-paper/30 border border-paper/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_3px_rgba(0,0,0,0.2)] [transition:transform_280ms_var(--ease-spring)] ${isEn ? 'translate-x-7' : 'translate-x-0'}`}
      />

      {/* Labels — flex-1 centers each one in its own half */}
      <span
        className={[
          'relative z-10 flex-1 flex items-center justify-center',
          'font-display text-[10px] font-semibold tracking-widest uppercase',
          'transition-colors duration-200',
          isEn ? 'text-paper/80' : 'text-paper',
        ].join(' ')}
      >
        ES
      </span>
      <span
        className={[
          'relative z-10 flex-1 flex items-center justify-center',
          'font-display text-[10px] font-semibold tracking-widest uppercase',
          'transition-colors duration-200',
          isEn ? 'text-paper' : 'text-paper/80',
        ].join(' ')}
      >
        EN
      </span>
    </button>
  );
}
