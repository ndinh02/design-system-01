import { useId, useState } from 'react';
import './tabs.css';

export interface TabItem {
  /** Stable key for the tab. */
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  /** Marks the tab as unavailable. */
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  /** Controlled selected key. */
  value?: string;
  defaultValue?: string;
  onChange?: (key: string) => void;
  /** Labels the tablist for assistive tech. */
  label?: string;
}

/** Tabbed switcher for sibling content views. */
export const Tabs = ({ items, value, defaultValue, onChange, label }: TabsProps) => {
  const autoId = useId();
  const baseId = `ds-tabs-${autoId}`;
  const [internalValue, setInternalValue] = useState(defaultValue ?? items[0]?.key);
  const selected = value ?? internalValue;

  const select = (key: string) => {
    if (value === undefined) setInternalValue(key);
    onChange?.(key);
  };

  const moveFocus = (index: number, direction: 1 | -1) => {
    for (let step = 1; step <= items.length; step += 1) {
      const nextIndex = (((index + direction * step) % items.length) + items.length) % items.length;
      const next = items[nextIndex];
      if (next && !next.disabled) {
        select(next.key);
        document.getElementById(`${baseId}-tab-${next.key}`)?.focus();
        return;
      }
    }
  };

  return (
    <div className="ds-tabs">
      <div className="ds-tabs__list" role="tablist" aria-label={label}>
        {items.map((item, index) => {
          const isSelected = item.key === selected;
          return (
            <button
              key={item.key}
              id={`${baseId}-tab-${item.key}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${baseId}-panel-${item.key}`}
              tabIndex={isSelected ? 0 : -1}
              disabled={item.disabled}
              className={['ds-tabs__tab', isSelected && 'ds-tabs__tab--active']
                .filter(Boolean)
                .join(' ')}
              onClick={() => select(item.key)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') moveFocus(index, 1);
                if (event.key === 'ArrowLeft') moveFocus(index, -1);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.key}
          id={`${baseId}-panel-${item.key}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${item.key}`}
          hidden={item.key !== selected}
          className="ds-tabs__panel"
        >
          {item.key === selected && item.content}
        </div>
      ))}
    </div>
  );
};
