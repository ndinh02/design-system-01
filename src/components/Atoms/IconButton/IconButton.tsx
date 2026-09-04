import './icon-button.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name — required because the button renders only an icon. */
  label: string;
  variant?: 'secondary' | 'ghost';
  size?: 'small' | 'medium';
}

/** Button that renders a single icon; the accessible name comes from `label`. */
export const IconButton = ({
  label,
  variant = 'ghost',
  size = 'medium',
  className,
  children,
  type = 'button',
  ...props
}: IconButtonProps) => (
  <button
    type={type}
    aria-label={label}
    title={label}
    className={['ds-icon-button', `ds-icon-button--${variant}`, `ds-icon-button--${size}`, className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </button>
);
