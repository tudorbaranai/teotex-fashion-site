import styles from './ProductFilter.module.css';

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories: { label: string; value: string }[] = [
  { label: 'Toate', value: 'ALL' },
  { label: 'Robe', value: 'ROBA' },
  { label: 'Toci', value: 'TOCA' },
  { label: 'Esarfe', value: 'ESARFA' },
];

export default function ProductFilter({ activeCategory, onCategoryChange }: ProductFilterProps) {
  return (
    <div className={styles.filterBar}>
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`${styles.filterButton}${activeCategory === cat.value ? ` ${styles.active}` : ''}`}
          onClick={() => onCategoryChange(cat.value)}
          type="button"
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
