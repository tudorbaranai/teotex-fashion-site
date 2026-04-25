import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import NeedleAccent from '../components/ui/NeedleAccent';
import FeaturedProducts from '../components/home/FeaturedProducts';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.trustBar}>
        <Container>
          <div className={styles.trustItems}>
            <span className={styles.trustItem}>Livrare Rapida</span>
            <span className={styles.trustSeparator}>|</span>
            <span className={styles.trustItem}>Retururi 30 Zile</span>
            <span className={styles.trustSeparator}>|</span>
            <span className={styles.trustItem}>Plata Securizata</span>
          </div>
        </Container>
      </section>

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
        <div className={styles.needleWrapper}>
          <NeedleAccent />
        </div>
      </section>

      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
