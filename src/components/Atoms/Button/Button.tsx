import './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight of the button. */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  /** Shows a spinner and blocks interaction while busy. */
  loading?: boolean;
  /** @deprecated Use `variant="primary"`. Kept for 0.x compatibility. */
  primary?: boolean;
}

/** Primary UI component for user interaction. */
export const Button = ({
  variant = 'secondary',
  size = 'medium',
  loading = false,
  primary,
  disabled,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) => {
  const resolvedVariant = primary ? 'primary' : variant;
  return (
    <button
      type={type}
      className={[
        'ds-button',
        `ds-button--${resolvedVariant}`,
        `ds-button--${size}`,
        loading && 'ds-button--loading',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {children}
    </button>
  );
};
