import './avatar.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Person's name; used for initials and alt text. */
  name: string;
  /** Optional photo URL. Falls back to initials. */
  src?: string;
  size?: 'small' | 'medium' | 'large';
}

const INITIAL_LENGTH = 2;

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, INITIAL_LENGTH)
    .map((part) => part[0]!.toUpperCase())
    .join('');
}

/** Person avatar: photo when available, otherwise initials. */
export const Avatar = ({ name, src, size = 'medium', className, ...props }: AvatarProps) => (
  <span
    className={['ds-avatar', `ds-avatar--${size}`, className].filter(Boolean).join(' ')}
    role="img"
    aria-label={name}
    {...props}
  >
    {src ? <img className="ds-avatar__img" src={src} alt="" /> : initialsOf(name)}
  </span>
);
