export const buttonStyles = {
  base: "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap border text-sm font-semibold outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    default:
      "border-[color:var(--border)] bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-[var(--shadow-button)] hover:opacity-95 focus-visible:border-[color:var(--border)] focus-visible:ring-[3px] focus-visible:ring-[color:var(--focus)]",
    outline:
      "border-[color:var(--border)] bg-transparent text-[color:var(--primary-text)] hover:bg-[color:var(--surface-elevated)] focus-visible:border-[color:var(--border)] focus-visible:ring-[3px] focus-visible:ring-[color:var(--focus)]",
    secondary:
      "border-[color:var(--border)] bg-[color:var(--surface-elevated)] text-[color:var(--primary-text)] hover:bg-[color:var(--surface)] focus-visible:border-[color:var(--border)] focus-visible:ring-[3px] focus-visible:ring-[color:var(--focus)]",
    ghost:
      "border-transparent bg-transparent text-[color:var(--secondary-text)] hover:bg-[rgba(185,216,196,0.06)] hover:text-[color:var(--primary-text)] focus-visible:border-[color:var(--border)] focus-visible:ring-[3px] focus-visible:ring-[color:var(--focus)]",
    destructive:
      "border-[color:var(--border)] bg-[color:var(--error)] text-[color:var(--accent-foreground)] hover:opacity-95 focus-visible:border-[color:var(--border)] focus-visible:ring-[3px] focus-visible:ring-[color:var(--focus)]",
    link: "border-transparent bg-transparent px-0 text-[color:var(--secondary-text)] hover:text-[color:var(--accent)]",
  },
  sizes: {
    default: "h-12 rounded-[var(--radius-button)] px-5",
    sm: "h-10 rounded-[var(--radius-button)] px-4 text-sm",
    lg: "h-12 rounded-[var(--radius-button)] px-6 text-sm",
    icon: "size-12 rounded-full",
  },
} as const;
