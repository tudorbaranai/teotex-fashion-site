import { useState } from 'react';
import Container from '../components/ui/Container';
import ProductFilter from '../components/product/ProductFilter';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredProducts =
    activeCategory === 'ALL'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Produsele Noastre</h1>
          <hr className={styles.accentLine} />
          <p className={styles.subtitle}>
            Descopera colectia noastra de articole pentru absolvire
          </p>
        </div>
        <div className={styles.filterSection}>
          <ProductFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        <ProductGrid products={filteredProducts} />
      </Container>
    </section>
  );
}
