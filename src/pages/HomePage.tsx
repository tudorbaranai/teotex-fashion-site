import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import FeaturedProducts from '../components/home/FeaturedProducts';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Celebreaza Absolvirea cu Stil</h1>
            <p className={styles.heroSubtitle}>
              Articole de calitate pentru cel mai important moment din cariera ta academica
            </p>
            <Link to="/produse" className={styles.heroCta}>
              Descopera Colectia
            </Link>
          </div>
        </Container>
      </section>

      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
