interface TagProps {
  children: string;
  variant?: 'default' | 'accent' | 'mono' | 'ghost';
}

export function Tag({ children, variant = 'default' }: TagProps) {
  const styles = {
    default:
      'border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-muted)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]',
    accent:
      'border-[var(--color-border-hover)] bg-[var(--color-accent-soft)] text-[var(--color-text)]',
    mono:
      'border-[var(--color-border)] bg-transparent font-mono text-[var(--color-muted-dim)]',
    ghost:
      'border-transparent bg-[rgba(161,161,170,0.06)] text-[var(--color-muted)]',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
