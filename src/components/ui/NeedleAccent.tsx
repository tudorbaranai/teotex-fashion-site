import styles from './NeedleAccent.module.css';

interface NeedleAccentProps {
  className?: string;
}

export default function NeedleAccent({ className }: NeedleAccentProps) {
  return (
    <svg
      className={`${styles.needleAccent}${className ? ` ${className}` : ''}`}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sewing needle */}
      <line
        x1="15"
        y1="65"
        x2="55"
        y2="10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Needle eye */}
      <ellipse
        cx="53"
        cy="13"
        rx="2.5"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-68 53 13)"
      />
      {/* Needle point */}
      <circle cx="16" cy="64" r="1" fill="currentColor" />
      {/* Thread - curved path flowing from the eye */}
      <path
        d="M57 16 C65 22, 60 35, 68 40 C76 45, 70 55, 62 58 C54 61, 50 68, 55 75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 3"
      />
    </svg>
  );
}
