import './badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium';
}

/** Compact status or category label. */
export const Badge = ({ tone = 'neutral', size = 'medium', className, children, ...props }: BadgeProps) => (
  <span
    className={['ds-badge', `ds-badge--${tone}`, `ds-badge--${size}`, className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </span>
);
