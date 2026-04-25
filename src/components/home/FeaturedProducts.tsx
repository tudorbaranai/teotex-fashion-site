import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import ProductGrid from '../product/ProductGrid';
import { products } from '../../data/products';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  const featured = products.filter(p => p.badge === 'BEST SELLER').slice(0, 4);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Produse Populare</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Cele mai apreciate articole din colectia noastra
          </p>
        </div>
        <ProductGrid products={featured} />
        <div className={styles.cta}>
          <Link to="/produse" className={styles.ctaLink}>
            Vezi Toate Produsele
          </Link>
        </div>
      </Container>
    </section>
  );
}
