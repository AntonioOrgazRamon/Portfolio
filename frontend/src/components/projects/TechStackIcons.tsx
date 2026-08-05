import { useTheme } from '../../contexts/ThemeContext';
import { TechIcon } from '../ui/TechIcon';

interface TechStackIconsProps {
  slugs: string[];
  className?: string;
}

export function TechStackIcons({ slugs, className = 'mt-8' }: TechStackIconsProps) {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-wrap items-center gap-3 md:gap-3.5 ${className}`} data-reveal-group>
      {slugs.map((slug) => (
        <span key={slug} data-reveal-item className="inline-flex">
          <TechIcon slug={slug} theme={theme} />
        </span>
      ))}
    </div>
  );
}
