import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import ProductFilter, { type SortOption } from '../components/product/ProductFilter';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import type { ProductCategory, ProductSection } from '../types/product';
import styles from './ProductsPage.module.css';

const SECTION_PARAM_TO_VALUE: Record<string, ProductSection> = {
  femei: 'FEMEI',
  barbati: 'BARBATI',
  casa: 'CASA',
  absolvire: 'ABSOLVIRE',
  nunti: 'NUNTI',
};

const SECTION_VALUE_TO_PARAM: Record<ProductSection, string> = {
  FEMEI: 'femei',
  BARBATI: 'barbati',
  CASA: 'casa',
  ABSOLVIRE: 'absolvire',
  NUNTI: 'nunti',
};

const SECTION_SUBTITLES: Record<ProductSection | 'ALL', string> = {
  ALL: 'Descopera colectia noastra completa',
  FEMEI: 'Descopera colectia pentru femei',
  BARBATI: 'Descopera colectia pentru barbati',
  CASA: 'Textile rafinate pentru casa ta',
  ABSOLVIRE: 'Articole pentru ceremonia de absolvire',
  NUNTI: 'Tinute speciale pentru ziua nuntii',
};

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sectionFromUrl: ProductSection | 'ALL' = useMemo(() => {
    const param = searchParams.get('sectiune');
    if (!param) return 'ALL';
    return SECTION_PARAM_TO_VALUE[param.toLowerCase()] ?? 'ALL';
  }, [searchParams]);

  const [activeSection, setActiveSection] = useState<ProductSection | 'ALL'>(sectionFromUrl);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'ALL'>('ALL');
  const [sort, setSort] = useState<SortOption>('recommended');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  // Sync state from URL whenever the URL section changes (back/forward, footer link, etc.)
  useEffect(() => {
    setActiveSection(sectionFromUrl);
    // Reset category when section changes since categories depend on section
    setActiveCategory('ALL');
  }, [sectionFromUrl]);

  const handleSectionChange = (section: ProductSection | 'ALL') => {
    setActiveSection(section);
    setActiveCategory('ALL');
    const next = new URLSearchParams(searchParams);
    if (section === 'ALL') {
      next.delete('sectiune');
    } else {
      next.set('sectiune', SECTION_VALUE_TO_PARAM[section]);
    }
    setSearchParams(next, { replace: false });
  };

  // Categories available within the active section
  const availableCategories: ProductCategory[] = useMemo(() => {
    const source =
      activeSection === 'ALL'
        ? products
        : products.filter((p) => p.section === activeSection);
    const set = new Set<ProductCategory>();
    source.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [activeSection]);

  // Apply all filters & sort
  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeSection !== 'ALL') {
      result = result.filter((p) => p.section === activeSection);
    }
    if (activeCategory !== 'ALL') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }
    const minNum = priceMin ? Number(priceMin) : null;
    const maxNum = priceMax ? Number(priceMax) : null;
    if (minNum !== null && !Number.isNaN(minNum)) {
      result = result.filter((p) => p.price >= minNum);
    }
    if (maxNum !== null && !Number.isNaN(maxNum)) {
      result = result.filter((p) => p.price <= maxNum);
    }

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result = [...result].sort((a, b) => {
          const aNew = a.badge === 'NOU' ? 1 : 0;
          const bNew = b.badge === 'NOU' ? 1 : 0;
          return bNew - aNew;
        });
        break;
      case 'recommended':
      default:
        // Keep insertion order (curated)
        break;
    }

    return result;
  }, [activeSection, activeCategory, inStockOnly, priceMin, priceMax, sort]);

  const handleReset = () => {
    setActiveCategory('ALL');
    setSort('recommended');
    setInStockOnly(false);
    setPriceMin('');
    setPriceMax('');
    handleSectionChange('ALL');
  };

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Produsele Noastre</h1>
          <hr className={styles.accentLine} />
          <p className={styles.subtitle}>{SECTION_SUBTITLES[activeSection]}</p>
        </div>
        <div className={styles.filterSection}>
          <ProductFilter
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            availableCategories={availableCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            sort={sort}
            onSortChange={setSort}
            inStockOnly={inStockOnly}
            onInStockChange={setInStockOnly}
            priceMin={priceMin}
            priceMax={priceMax}
            onPriceMinChange={setPriceMin}
            onPriceMaxChange={setPriceMax}
            onPriceApply={() => {
              /* values already pushed by ProductFilter via onPriceMinChange/Max */
            }}
            onReset={handleReset}
          />
        </div>
        {filteredProducts.length === 0 ? (
          <p className={styles.emptyState}>
            Nu am gasit produse care sa corespunda filtrelor selectate.
          </p>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </Container>
    </section>
  );
}
