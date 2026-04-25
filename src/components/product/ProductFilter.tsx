import { useEffect, useState } from 'react';
import type { ProductCategory, ProductSection } from '../../types/product';
import styles from './ProductFilter.module.css';

export type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'newest';

interface SectionPill {
  label: string;
  value: ProductSection | 'ALL';
}

const sectionPills: SectionPill[] = [
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

  return (
    <div className={styles.filterWrapper}>
      {/* Section pills */}
      <div className={styles.sectionPills} role="tablist" aria-label="Sectiuni">
        {sectionPills.map((pill) => (
          <button
            key={pill.value}
            type="button"
            className={`${styles.pillButton}${activeSection === pill.value ? ` ${styles.active}` : ''}`}
            onClick={() => onSectionChange(pill.value)}
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Sub-filters row */}
      <div className={styles.controlsRow}>
        {availableCategories.length > 0 && (
          <div className={styles.controlGroup}>
            <label className={styles.controlLabel}>Categorie</label>
            <div className={styles.categoryPills}>
              <button
                type="button"
                className={`${styles.subPill}${activeCategory === 'ALL' ? ` ${styles.active}` : ''}`}
                onClick={() => onCategoryChange('ALL')}
              >
                Toate
              </button>
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.subPill}${activeCategory === cat ? ` ${styles.active}` : ''}`}
                  onClick={() => onCategoryChange(cat)}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={styles.controlGroup}>
          <label className={styles.controlLabel} htmlFor="sortSelect">Sorteaza</label>
          <select
            id="sortSelect"
            className={styles.select}
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
          >
            <option value="recommended">Recomandate</option>
            <option value="price-asc">Pret crescator</option>
            <option value="price-desc">Pret descrescator</option>
            <option value="newest">Cele mai noi</option>
          </select>
        </div>

        <div className={styles.controlGroup}>
          <label className={styles.controlLabel}>Pret (RON)</label>
          <div className={styles.priceInputs}>
            <input
              type="number"
              className={styles.priceInput}
              placeholder="Min"
              value={localMin}
              min={0}
              onChange={(e) => setLocalMin(e.target.value)}
              onBlur={handleApply}
              aria-label="Pret minim"
            />
            <span className={styles.priceDash}>-</span>
            <input
              type="number"
              className={styles.priceInput}
              placeholder="Max"
              value={localMax}
              min={0}
              onChange={(e) => setLocalMax(e.target.value)}
              onBlur={handleApply}
              aria-label="Pret maxim"
            />
            <button
              type="button"
              className={styles.applyButton}
              onClick={handleApply}
            >
              Aplica
            </button>
          </div>
        </div>

        <div className={styles.controlGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onInStockChange(e.target.checked)}
            />
            <span>In stoc</span>
          </label>
        </div>

        <button
          type="button"
          className={styles.resetButton}
          onClick={onReset}
        >
          Sterge filtrele
        </button>
      </div>
    </div>
  );
}
