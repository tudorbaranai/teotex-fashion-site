import { useEffect, useState } from 'react';
import type { ProductCategory, ProductSection } from '../../types/product';
import styles from './ProductFilter.module.css';

export type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'newest';

interface SectionRow {
  label: string;
  value: ProductSection | 'ALL';
}

const sectionRows: SectionRow[] = [
  { label: 'Toate', value: 'ALL' },
  { label: 'Femei', value: 'FEMEI' },
  { label: 'Barbati', value: 'BARBATI' },
  { label: 'Casa', value: 'CASA' },
  { label: 'Absolvire', value: 'ABSOLVIRE' },
  { label: 'Nunti', value: 'NUNTI' },
];

const categoryLabels: Record<ProductCategory, string> = {
  ROBA: 'Robe',
  TOCA: 'Toci',
  ESARFA: 'Esarfe',
  ROCHIE: 'Rochii',
  BLUZA: 'Bluze',
  FUSTA: 'Fuste',
  CAMASA: 'Camasi',
  COSTUM: 'Costume',
  PIJAMA: 'Pijamale',
  PERDEA: 'Perdele',
  LENJERIE: 'Lenjerie',
  FATA_MASA: 'Fete de masa',
  ROCHIE_MIREASA: 'Rochii de mireasa',
  COSTUM_MIRE: 'Costume de mire',
};

interface ProductFilterProps {
  activeSection: ProductSection | 'ALL';
  onSectionChange: (section: ProductSection | 'ALL') => void;
  availableCategories: ProductCategory[];
  activeCategory: ProductCategory | 'ALL';
  onCategoryChange: (category: ProductCategory | 'ALL') => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  inStockOnly: boolean;
  onInStockChange: (value: boolean) => void;
  priceMin: string;
  priceMax: string;
  onPriceMinChange: (value: string) => void;
  onPriceMaxChange: (value: string) => void;
  onPriceApply: () => void;
  onReset: () => void;
}

export default function ProductFilter({
  activeSection,
  onSectionChange,
  availableCategories,
  activeCategory,
  onCategoryChange,
  sort,
  onSortChange,
  inStockOnly,
  onInStockChange,
  priceMin,
  priceMax,
  onPriceMinChange,
  onPriceMaxChange,
  onPriceApply,
  onReset,
}: ProductFilterProps) {
  // Local price input state so we don't dispatch on every keystroke
  const [localMin, setLocalMin] = useState(priceMin);
  const [localMax, setLocalMax] = useState(priceMax);

  useEffect(() => setLocalMin(priceMin), [priceMin]);
  useEffect(() => setLocalMax(priceMax), [priceMax]);

  const handleApply = () => {
    onPriceMinChange(localMin);
    onPriceMaxChange(localMax);
    onPriceApply();
  };

  const handlePriceKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleApply();
    }
  };

  return (
    <aside className={styles.sidebar} aria-label="Filtre produse">
      {/* Section card */}
      <section className={styles.card}>
        <h3 className={styles.cardTitle}>Sectiune</h3>
        <div className={styles.cardDivider} />
        <ul className={styles.rowList} role="list">
          {sectionRows.map((row) => {
            const isActive = activeSection === row.value;
            return (
              <li key={row.value}>
                <button
                  type="button"
                  className={`${styles.row}${isActive ? ` ${styles.rowActive}` : ''}`}
                  onClick={() => onSectionChange(row.value)}
                  aria-pressed={isActive}
                >
                  {row.label}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Category card */}
      {availableCategories.length > 0 && (
        <section className={styles.card}>
          <h3 className={styles.cardTitle}>Categorie</h3>
          <div className={styles.cardDivider} />
          <ul className={styles.rowList} role="list">
            <li>
              <button
                type="button"
                className={`${styles.row}${activeCategory === 'ALL' ? ` ${styles.rowActive}` : ''}`}
                onClick={() => onCategoryChange('ALL')}
                aria-pressed={activeCategory === 'ALL'}
              >
                Toate
              </button>
            </li>
            {availableCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <li key={cat}>
                  <button
                    type="button"
                    className={`${styles.row}${isActive ? ` ${styles.rowActive}` : ''}`}
                    onClick={() => onCategoryChange(cat)}
                    aria-pressed={isActive}
                  >
                    {categoryLabels[cat]}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Price card */}
      <section className={styles.card}>
        <h3 className={styles.cardTitle}>Pret</h3>
        <div className={styles.cardDivider} />
        <div className={styles.priceRow}>
          <div className={styles.priceField}>
            <input
              type="number"
              className={styles.priceInput}
              placeholder="Min"
              value={localMin}
              min={0}
              onChange={(e) => setLocalMin(e.target.value)}
              onKeyDown={handlePriceKeyDown}
              aria-label="Pret minim"
            />
            <span className={styles.priceSuffix}>RON</span>
          </div>
          <div className={styles.priceField}>
            <input
              type="number"
              className={styles.priceInput}
              placeholder="Max"
              value={localMax}
              min={0}
              onChange={(e) => setLocalMax(e.target.value)}
              onKeyDown={handlePriceKeyDown}
              aria-label="Pret maxim"
            />
            <span className={styles.priceSuffix}>RON</span>
          </div>
        </div>
        <button
          type="button"
          className={styles.applyButton}
          onClick={handleApply}
        >
          Aplica
        </button>
      </section>

      {/* Sort card */}
      <section className={styles.card}>
        <h3 className={styles.cardTitle}>Sortare</h3>
        <div className={styles.cardDivider} />
        <select
          className={styles.select}
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          aria-label="Sorteaza produsele"
        >
          <option value="recommended">Recomandate</option>
          <option value="price-asc">Pret crescator</option>
          <option value="price-desc">Pret descrescator</option>
          <option value="newest">Cele mai noi</option>
        </select>
      </section>

      {/* Availability card */}
      <section className={styles.card}>
        <h3 className={styles.cardTitle}>Disponibilitate</h3>
        <div className={styles.cardDivider} />
        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
          />
          <span>Doar produse in stoc</span>
        </label>
      </section>

      <button
        type="button"
        className={styles.resetButton}
        onClick={onReset}
      >
        Sterge toate filtrele
      </button>
    </aside>
  );
}
