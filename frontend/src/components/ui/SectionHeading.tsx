interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ label, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div data-reveal className={`relative ${className}`}>
      <div className="mb-6 flex items-center gap-4">
        <span className="label-mono label-accent">{label}</span>
        <span className="section-divider flex-1" aria-hidden />
      </div>
      <h2
        data-read-text
        data-read-tone="heading"
        className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
      >
        {title}
      </h2>
      {description && (
        <p data-read-text className="mt-4 max-w-xl text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
