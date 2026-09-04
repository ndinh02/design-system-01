import './empty-state.css';

export interface EmptyStateProps {
  /** Large glyph or illustration shown above the title. */
  icon?: React.ReactNode;
  title: string;
  description?: string;
  /** Call to action, typically a `Button`. */
  action?: React.ReactNode;
}

/** Placeholder shown when a surface has no content yet. */
export const EmptyState = ({ icon, title, description, action }: EmptyStateProps) => (
  <div className="ds-empty-state">
    {icon && <div className="ds-empty-state__icon" aria-hidden="true">{icon}</div>}
    <h3 className="ds-empty-state__title">{title}</h3>
    {description && <p className="ds-empty-state__description">{description}</p>}
    {action && <div className="ds-empty-state__action">{action}</div>}
  </div>
);
