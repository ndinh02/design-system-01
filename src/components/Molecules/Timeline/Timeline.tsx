import './timeline.css';

export interface TimelineItem {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional right-aligned detail (timestamp, duration, agent name). */
  detail?: React.ReactNode;
  status?: 'done' | 'active' | 'pending';
}

export interface TimelineProps {
  items: TimelineItem[];
  /** Visually hides the list semantics for screen readers when redundant. */
  label?: string;
}

/** Vertical activity or process timeline. */
export const Timeline = ({ items, label }: TimelineProps) => (
  <ol className="ds-timeline" aria-label={label}>
    {items.map((item) => (
      <li
        key={item.id}
        className={['ds-timeline__item', item.status && `ds-timeline__item--${item.status}`]
          .filter(Boolean)
          .join(' ')}
      >
        <span className="ds-timeline__marker" aria-hidden="true" />
        <div className="ds-timeline__content">
          <div className="ds-timeline__row">
            <span className="ds-timeline__title">{item.title}</span>
            {item.detail && <span className="ds-timeline__detail">{item.detail}</span>}
          </div>
          {item.description && <div className="ds-timeline__description">{item.description}</div>}
        </div>
      </li>
    ))}
  </ol>
);
