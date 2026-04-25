import styles from './CategoryTag.module.css';

interface CategoryTagProps {
  category: string;
}

export default function CategoryTag({ category }: CategoryTagProps) {
  return <span className={styles.categoryTag}>{category}</span>;
}
