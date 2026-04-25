import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import NeedleAccent from '../components/ui/NeedleAccent';
import PageAccents from '../components/ui/PageAccents';
import FeaturedProducts from '../components/home/FeaturedProducts';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.page}>
      <PageAccents variant="home" />
      <div className={styles.pageContent}>
      <section className={styles.hero}>
        <div className={styles.needleTopLeft}>
          <NeedleAccent className={styles.needleTopLeftSvg} />
        </div>
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

      <div className={styles.heroDivider} aria-hidden="true">
        <NeedleAccent className={styles.heroDividerSvg} />
      </div>

      <FeaturedProducts />
      </div>
    </div>
  );
}

export default HomePage;
