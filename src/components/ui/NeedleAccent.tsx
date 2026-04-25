import styles from './NeedleAccent.module.css';

interface NeedleAccentProps {
  className?: string;
}

export default function NeedleAccent({ className }: NeedleAccentProps) {
  return (
    <svg
      className={`${styles.needleAccent}${className ? ` ${className}` : ''}`}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Slim tapered needle: eye near top-right, point at bottom-left */}
      <path
        d="M92 18 L 30 88"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Sharp tip extension */}
      <path
        d="M30 88 L 26 92"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Needle eye - elongated oval aligned with shaft */}
      <ellipse
        cx="89"
        cy="21"
        rx="2.4"
        ry="4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(-48 89 21)"
      />
      {/* Thread emerging from the eye, looping in a soft heart-shaped curl, then trailing off */}
      <path
        d="M93 16
           C 102 10, 112 16, 110 28
           C 108 38, 96 40, 94 30
           C 93 24, 100 22, 104 28
           C 108 34, 102 44, 92 46"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
