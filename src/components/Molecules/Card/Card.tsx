import './card.css';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  /** Optional eyebrow/overline rendered above the title (e.g. artifact type). */
  eyebrow?: string;
  /** Optional image or media node rendered at the top of the card. */
  media?: React.ReactNode;
  /** Metadata row (date, author, status) rendered under the title. */
  meta?: React.ReactNode;
  /** Footer content (actions) pinned to the bottom of the card. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

/** Grouping surface for related content. */
export const Card = ({ title, eyebrow, media, meta, footer, children, className, ...props }: CardProps) => (
  <article className={['ds-card', className].filter(Boolean).join(' ')} {...props}>
    {media && <div className="ds-card__media">{media}</div>}
    {(eyebrow || title || meta) && (
      <header className="ds-card__header">
        {eyebrow && <p className="ds-card__eyebrow">{eyebrow}</p>}
        {title && <h3 className="ds-card__title">{title}</h3>}
        {meta && <div className="ds-card__meta">{meta}</div>}
      </header>
    )}
    {children && <div className="ds-card__body">{children}</div>}
    {footer && <footer className="ds-card__footer">{footer}</footer>}
  </article>
);
