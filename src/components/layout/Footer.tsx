import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Column 1: Brand */}
        <div className={styles.brandSection}>
          <h3 className={styles.brandName}>TeoTex</h3>
          <p className={styles.tagline}>Articole de calitate pentru absolvire</p>
        </div>

        {/* Column 2: Magazin */}
        <div>
          <h4 className={styles.columnTitle}>Magazin</h4>
          <div className={styles.linkList}>
            <Link to="/produse" className={styles.footerLink}>Robe</Link>
            <Link to="/produse" className={styles.footerLink}>Toci</Link>
            <Link to="/produse" className={styles.footerLink}>Esarfe</Link>
          </div>
        </div>

        {/* Column 3: Informatii */}
        <div>
          <h4 className={styles.columnTitle}>Informatii</h4>
          <div className={styles.linkList}>
            <Link to="/despre-noi" className={styles.footerLink}>Despre Noi</Link>
            <Link to="/livrare" className={styles.footerLink}>Livrare</Link>
            <Link to="/retururi" className={styles.footerLink}>Retururi</Link>
            <Link to="/contact" className={styles.footerLink}>Contact</Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>&copy; 2026 TeoTex. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}
