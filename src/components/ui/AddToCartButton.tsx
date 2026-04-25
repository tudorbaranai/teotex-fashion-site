import styles from './AddToCartButton.module.css';

interface AddToCartButtonProps {
  onClick: () => void;
}

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button
      className={styles.addToCartButton}
      onClick={onClick}
      aria-label="Adauga in cos"
    >
      <svg
        className={styles.plusIcon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5v14M5 12h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
