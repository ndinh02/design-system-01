import { useId } from 'react';
import './textarea.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: string;
}

/** Multi-line text input with label, hint, and error states. */
export const Textarea = ({ label, hint, error, className, id, rows = 4, ...props }: TextareaProps) => {
  const autoId = useId();
  const textareaId = id ?? autoId;
  const hintId = `${textareaId}-hint`;
  const errorId = `${textareaId}-error`;
  return (
    <div
      className={['ds-textarea', error && 'ds-textarea--error', className].filter(Boolean).join(' ')}
    >
      <label className="ds-textarea__label" htmlFor={textareaId}>
        {label}
      </label>
      <textarea
        id={textareaId}
        className="ds-textarea__field"
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={[hint && hintId, error && errorId].filter(Boolean).join(' ') || undefined}
        {...props}
      />
      {hint && !error && (
        <p className="ds-textarea__hint" id={hintId}>
          {hint}
        </p>
      )}
      {error && (
        <p className="ds-textarea__error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
