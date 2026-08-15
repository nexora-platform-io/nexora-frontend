export const userMenuStyles = {
  root: "relative",
  trigger:
    "inline-flex size-11 items-center justify-center rounded-[var(--radius-button)] border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--primary-text)] hover:bg-[color:var(--surface-elevated)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[color:var(--focus)]",
  avatar:
    "size-9 rounded-[var(--radius-button)] border border-[color:var(--border)] bg-[color:var(--background-soft)]",
  avatarFallback:
    "flex size-full items-center justify-center text-sm font-semibold tracking-[0.08em] text-[color:var(--primary-text)]",
  content:
    "min-w-[16rem] overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--border)] bg-[color:var(--surface-elevated)] p-[var(--space-2)] outline-none",
  label:
    "flex items-start gap-[var(--space-3)] rounded-[var(--radius-input)] px-[var(--space-3)] py-[var(--space-2)]",
  userInfo: "grid min-w-0 gap-[var(--space-1)]",
  username:
    "truncate text-sm font-semibold tracking-[-0.02em] text-[color:var(--primary-text)]",
  email: "truncate text-sm leading-5 text-[color:var(--secondary-text)]",
  separator: "my-[var(--space-2)] h-px bg-[color:var(--border)]",
  item: "flex cursor-pointer items-center gap-[var(--space-2)] rounded-[var(--radius-input)] px-[var(--space-3)] py-[var(--space-2)] text-sm leading-5 text-[color:var(--secondary-text)] outline-none data-highlighted:bg-[rgba(185,216,196,0.06)] data-highlighted:text-[color:var(--primary-text)]",
  logout: "font-medium text-[color:var(--secondary-text)]",
} as const;
