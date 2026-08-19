import React from 'react';

import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Disables the button and blocks interaction */
  disabled?: boolean;
  /** Shows a spinner and puts the button in a busy state */
  loading?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        mode,
        loading && 'storybook-button--loading',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ backgroundColor }}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      <span className="storybook-button__label">{label}</span>
      {loading && <span className="storybook-button__spinner" aria-hidden="true" />}
    </button>
  );
};
