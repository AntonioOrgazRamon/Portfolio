import type { ProjectStatus } from '../../data/i18n';

const STATUS_CLASS: Record<ProjectStatus, string> = {
  production: 'status-badge--production',
  private: 'status-badge--private',
  development: 'status-badge--development',
  demo: 'status-badge--demo',
};

interface StatusBadgeProps {
  status: ProjectStatus;
  label: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <span className={`status-badge ${STATUS_CLASS[status]}`}>
      {label}
    </span>
  );
}
