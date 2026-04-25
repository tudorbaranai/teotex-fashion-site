import type { CSSProperties } from 'react';
import NeedleAccent from './NeedleAccent';
import styles from './PageAccents.module.css';

export type PageAccentsVariant =
  | 'home'
  | 'products'
  | 'about'
  | 'contact'
  | 'cart'
  | 'favorite'
  | 'notfound';

interface AccentSpec {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  opacity: number;
  rotate: number;
  mirrored?: boolean;
  mobileHidden?: boolean;
}

interface PageAccentsProps {
  variant: PageAccentsVariant;
}

// Hand-tuned scattered accent placements per page.
// Positions are in percentages so they scale with the page on mobile/desktop.
// Sizes range ~50-140px. Opacity ~0.12-0.35 keeps them background-level.
const variants: Record<PageAccentsVariant, AccentSpec[]> = {
  home: [
    { top: '6%', left: '3%', size: 90, opacity: 0.22, rotate: -18, mirrored: false },
    { top: '20%', right: '5%', size: 130, opacity: 0.18, rotate: 24, mirrored: true },
    { top: '42%', left: '10%', size: 70, opacity: 0.28, rotate: -8, mirrored: true, mobileHidden: true },
    { top: '58%', right: '12%', size: 105, opacity: 0.16, rotate: 14, mirrored: false },
    { top: '74%', left: '6%', size: 80, opacity: 0.24, rotate: -32, mirrored: false, mobileHidden: true },
    { bottom: '8%', right: '20%', size: 110, opacity: 0.20, rotate: 18, mirrored: true },
    { bottom: '28%', left: '22%', size: 60, opacity: 0.26, rotate: -12, mirrored: false },
  ],
  products: [
    { top: '4%', right: '4%', size: 95, opacity: 0.18, rotate: 22, mirrored: true },
    { top: '18%', left: '2%', size: 75, opacity: 0.22, rotate: -28, mirrored: false, mobileHidden: true },
    { top: '36%', right: '8%', size: 110, opacity: 0.14, rotate: 10, mirrored: false },
    { top: '54%', left: '4%', size: 65, opacity: 0.26, rotate: -16, mirrored: true },
    { top: '70%', right: '3%', size: 85, opacity: 0.20, rotate: 30, mirrored: false, mobileHidden: true },
    { bottom: '10%', left: '8%', size: 100, opacity: 0.18, rotate: -22, mirrored: true },
  ],
  about: [
    { top: '5%', right: '6%', size: 100, opacity: 0.22, rotate: 26, mirrored: false },
    { top: '22%', left: '3%', size: 70, opacity: 0.26, rotate: -14, mirrored: true, mobileHidden: true },
    { top: '40%', right: '4%', size: 120, opacity: 0.16, rotate: 8, mirrored: true },
    { top: '56%', left: '8%', size: 80, opacity: 0.24, rotate: -28, mirrored: false },
    { top: '74%', right: '12%', size: 60, opacity: 0.30, rotate: 18, mirrored: false, mobileHidden: true },
    { bottom: '6%', left: '5%', size: 110, opacity: 0.18, rotate: -12, mirrored: true },
    { bottom: '24%', right: '22%', size: 70, opacity: 0.22, rotate: 34, mirrored: false },
  ],
  contact: [
    { top: '4%', right: '8%', size: 90, opacity: 0.20, rotate: 20, mirrored: true },
    { top: '24%', left: '4%', size: 110, opacity: 0.16, rotate: -24, mirrored: false },
    { top: '44%', right: '4%', size: 65, opacity: 0.28, rotate: 12, mirrored: true, mobileHidden: true },
    { top: '62%', left: '7%', size: 80, opacity: 0.22, rotate: -18, mirrored: true },
    { top: '80%', right: '14%', size: 95, opacity: 0.18, rotate: 28, mirrored: false, mobileHidden: true },
    { bottom: '10%', right: '40%', size: 70, opacity: 0.24, rotate: -10, mirrored: false },
  ],
  cart: [
    { top: '6%', left: '3%', size: 85, opacity: 0.20, rotate: -22, mirrored: false },
    { top: '24%', right: '2%', size: 70, opacity: 0.22, rotate: 16, mirrored: true, mobileHidden: true },
    { top: '50%', left: '2%', size: 100, opacity: 0.14, rotate: -10, mirrored: true },
    { top: '70%', right: '3%', size: 60, opacity: 0.26, rotate: 24, mirrored: false, mobileHidden: true },
    { bottom: '8%', left: '6%', size: 90, opacity: 0.18, rotate: -30, mirrored: false },
    { bottom: '4%', right: '14%', size: 75, opacity: 0.22, rotate: 14, mirrored: true },
  ],
  favorite: [
    { top: '5%', right: '5%', size: 95, opacity: 0.20, rotate: 24, mirrored: false },
    { top: '22%', left: '4%', size: 70, opacity: 0.26, rotate: -18, mirrored: true, mobileHidden: true },
    { top: '44%', right: '8%', size: 110, opacity: 0.16, rotate: 10, mirrored: true },
    { top: '62%', left: '6%', size: 80, opacity: 0.22, rotate: -28, mirrored: false },
    { top: '80%', right: '10%', size: 65, opacity: 0.28, rotate: 18, mirrored: false, mobileHidden: true },
    { bottom: '6%', left: '12%', size: 90, opacity: 0.18, rotate: -14, mirrored: true },
  ],
  notfound: [
    { top: '8%', left: '6%', size: 90, opacity: 0.22, rotate: -22, mirrored: false },
    { top: '20%', right: '8%', size: 70, opacity: 0.26, rotate: 18, mirrored: true, mobileHidden: true },
    { top: '46%', left: '4%', size: 110, opacity: 0.16, rotate: -10, mirrored: true },
    { top: '60%', right: '5%', size: 80, opacity: 0.22, rotate: 28, mirrored: false },
    { bottom: '12%', left: '10%', size: 95, opacity: 0.20, rotate: -16, mirrored: false, mobileHidden: true },
    { bottom: '6%', right: '14%', size: 65, opacity: 0.28, rotate: 14, mirrored: true },
  ],
};

export default function PageAccents({ variant }: PageAccentsProps) {
  const specs = variants[variant];

  return (
    <div className={styles.layer} aria-hidden="true">
      {specs.map((spec, index) => {
        const transforms: string[] = [];
        if (spec.mirrored) transforms.push('scaleX(-1)');
        if (spec.rotate) transforms.push(`rotate(${spec.rotate}deg)`);

        const style: CSSProperties = {
          width: `${spec.size}px`,
          height: `${spec.size}px`,
          opacity: spec.opacity,
          transform: transforms.join(' ') || undefined,
        };
        if (spec.top !== undefined) style.top = spec.top;
        if (spec.left !== undefined) style.left = spec.left;
        if (spec.right !== undefined) style.right = spec.right;
        if (spec.bottom !== undefined) style.bottom = spec.bottom;

        const className = spec.mobileHidden
          ? `${styles.accent} ${styles.mobileHidden}`
          : styles.accent;

        return (
          <span key={index} className={className} style={style}>
            <NeedleAccent />
          </span>
        );
      })}
    </div>
  );
}
