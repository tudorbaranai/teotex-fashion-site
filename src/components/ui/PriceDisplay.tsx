import styles from './PriceDisplay.module.css';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
}

function formatPrice(value: number): string {
  return `${value.toFixed(2)} lei`;
}

export default function PriceDisplay({ price, originalPrice }: PriceDisplayProps) {
  return (
    <div className={styles.priceDisplay}>
      <span className={styles.currentPrice}>{formatPrice(price)}</span>
      {originalPrice !== undefined && (
        <span className={styles.originalPrice}>{formatPrice(originalPrice)}</span>
      )}
    </div>
  );
}
