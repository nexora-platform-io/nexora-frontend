export const notFoundStyles = {
  root: 'relative isolate flex min-h-dvh items-center justify-center overflow-hidden px-4 py-6 bg-[radial-gradient(circle_at_top,_rgba(121,161,136,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(185,216,196,0.08),_transparent_24%),linear-gradient(180deg,_#040606_0%,_var(--background)_100%)]',
  glowOne:
    'pointer-events-none absolute left-[-8rem] top-[-9rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(138,176,152,0.15),_transparent_68%)]',
  glowTwo:
    'pointer-events-none absolute right-[-7rem] bottom-[-8rem] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(185,216,196,0.1),_transparent_70%)]',
  panel:
    'relative z-10 w-full max-w-[24rem] rounded-[var(--radius-card)] border border-[color:var(--border)] bg-[color:var(--surface-elevated)] p-6 shadow-[var(--shadow-card)] backdrop-blur-[8px] sm:p-8',
  code: 'm-0 mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-text)]',
  title:
    'm-0 text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-[-0.04em] text-[color:var(--primary-text)]',
  description:
    'mt-3 max-w-[18rem] text-[color:var(--secondary-text)] leading-6',
  actions: 'mt-8 flex justify-center',
  button:
    'inline-flex h-12 items-center justify-center rounded-[var(--radius-button)] border border-[color:var(--border)] bg-[color:var(--accent)] px-5 text-sm font-semibold text-[color:var(--accent-foreground)] shadow-[var(--shadow-button)] hover:opacity-95 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[color:var(--focus)]',
} as const;
