import { useId } from 'react';
import './input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label rendered above the field. */
  label: string;
  /** Helper text shown below the field. */
  hint?: string;
  /** Error message; switches the field to its error state. */
  error?: string;
}

/** Text input with label, hint, and error states. */
export const Input = ({ label, hint, error, className, id, ...props }: InputProps) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;
  return (
    <div className={['ds-input', error && 'ds-input--error', className].filter(Boolean).join(' ')}>
      <label className="ds-input__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className="ds-input__field"
        aria-invalid={error ? true : undefined}
        aria-describedby={[hint && hintId, error && errorId].filter(Boolean).join(' ') || undefined}
        {...props}
      />
      {hint && !error && (
        <p className="ds-input__hint" id={hintId}>
          {hint}
        </p>
      )}
      {error && (
        <p className="ds-input__error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
