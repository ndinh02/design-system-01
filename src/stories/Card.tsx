import React, { useEffect, useRef, useState } from 'react';

import { radiusLg } from '../tokens';

import './card.css';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card body content */
  children?: React.ReactNode;
  /** Corner radius applied to all four corners */
  radius?: number;
}

/** Card surface with rounded corners and a hover-tracing highlight */
export const Card = ({ title, children, radius = radiusLg }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      // use the border-box size (not contentRect, which excludes padding)
      // so the traced path lines up with the card's actual rendered edge
      const box = entry.borderBoxSize?.[0];
      if (box) {
        setSize({ width: box.inlineSize, height: box.blockSize });
      } else {
        const rect = el.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    });
    observer.observe(el, { box: 'border-box' });
    return () => observer.disconnect();
  }, []);

  const { width: w, height: h } = size;
  // inset the tracing line half a stroke-width inside the card edge, and
  // shrink the corner radius to match so the line rides exactly on the
  // card's own rounded corners.
  const inset = 1.25;
  const r = Math.max(radius - inset, 0);
  const path =
    w > 0 && h > 0
      ? `M ${r + inset},${inset}
         L ${w - r - inset},${inset}
         A ${r},${r} 0 0 1 ${w - inset},${r + inset}
         L ${w - inset},${h - r - inset}
         A ${r},${r} 0 0 1 ${w - r - inset},${h - inset}
         L ${r + inset},${h - inset}
         A ${r},${r} 0 0 1 ${inset},${h - r - inset}
         L ${inset},${r + inset}
         A ${r},${r} 0 0 1 ${r + inset},${inset}
         Z`
      : '';

  return (
    <div ref={ref} className="storybook-card" style={{ borderRadius: `${radius}px` }}>
      <svg className="storybook-card__highlight" width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <path d={path} pathLength={100} />
      </svg>
      <div className="storybook-card__content">
        {title && <h3 className="storybook-card__title">{title}</h3>}
        {children && <div className="storybook-card__body">{children}</div>}
      </div>
    </div>
  );
};
