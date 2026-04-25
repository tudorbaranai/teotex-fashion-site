import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import PageAccents from '../components/ui/PageAccents';
import ProductGrid from '../components/product/ProductGrid';
import { useWishlist } from '../hooks/useWishlist';
import { products } from '../data/products';
import styles from './FavoritePage.module.css';

export default function FavoritePage() {
  const { wishlistIds } = useWishlist();

  const favoriteProducts = products.filter((product) => wishlistIds.has(product.id));
  const count = favoriteProducts.length;

  let subtitle: string;
  if (count === 0) {
    subtitle = 'Lista ta de favorite este goala';
  } else if (count === 1) {
    subtitle = '1 produs in lista de favorite';
  } else {
    subtitle = `${count} produse in lista de favorite`;
  }

  return (
    <section className={styles.page}>
      <PageAccents variant="favorite" />
      <div className={styles.pageContent}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Favoritele Tale</h1>
          <hr className={styles.accentLine} />
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>Nu ai inca produse favorite</p>
            <Link to="/produse" className={styles.primaryButton}>
              Descopera produsele
            </Link>
          </div>
        ) : (
          <ProductGrid products={favoriteProducts} />
        )}
      </Container>
      </div>
    </section>
  );
}
