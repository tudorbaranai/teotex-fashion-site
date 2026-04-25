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
            <Link to="/produse?sectiune=femei" className={styles.footerLink}>Femei</Link>
            <Link to="/produse?sectiune=barbati" className={styles.footerLink}>Barbati</Link>
            <Link to="/produse?sectiune=casa" className={styles.footerLink}>Casa</Link>
            <Link to="/produse?sectiune=absolvire" className={styles.footerLink}>Absolvire</Link>
            <Link to="/produse?sectiune=nunti" className={styles.footerLink}>Nunti</Link>
          </div>
        </div>

        {/* Column 3: Informatii */}
        <div>
          <h4 className={styles.columnTitle}>Informatii</h4>
          <div className={styles.linkList}>
            <Link to="/despre-noi" className={styles.footerLink}>Despre Noi</Link>
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
