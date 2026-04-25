import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        {/* Left side: hamburger (mobile) + nav links (desktop) */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Inchide meniul' : 'Deschide meniul'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className={styles.hamburgerIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>

        <div className={styles.navLinks}>
          <NavLink
            to="/produse"
            className={({ isActive }) => `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`}
          >
            Produse
          </NavLink>
          <NavLink
            to="/despre-noi"
            className={({ isActive }) => `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`}
          >
            Despre Noi
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`}
          >
            Contact
          </NavLink>
        </div>

        {/* Right side: cart icon + brand */}
        <div className={styles.navRight}>
          <button className={styles.cartButton} aria-label="Cos de cumparaturi">
            <svg className={styles.cartIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M16 10a4 4 0 01-8 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </button>

          <Link to="/" className={styles.brand}>
            <span className={styles.brandName}>Teotex</span>
            <svg className={styles.brandIcon} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="30" width="32" height="4" rx="1" fill="currentColor" />
              <path
                d="M8 30V20a3 3 0 0 1 3-3h17a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2h-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="27" y="24" width="3" height="5" rx="0.6" fill="currentColor" />
              <line x1="28.5" y1="29" x2="28.5" y2="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <rect x="16" y="9" width="3" height="8" rx="0.6" fill="currentColor" />
              <rect x="14.5" y="8.5" width="6" height="1.6" rx="0.4" fill="currentColor" />
              <rect x="14.5" y="16" width="6" height="1.6" rx="0.4" fill="currentColor" />
              <circle cx="11" cy="22" r="4" fill="none" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="11" cy="22" r="1.2" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`${styles.mobileMenu}${mobileMenuOpen ? ` ${styles.open}` : ''}`}>
        <NavLink
          to="/produse"
          className={({ isActive }) => `${styles.mobileLink}${isActive ? ` ${styles.active}` : ''}`}
          onClick={closeMobileMenu}
        >
          Produse
        </NavLink>
        <NavLink
          to="/despre-noi"
          className={({ isActive }) => `${styles.mobileLink}${isActive ? ` ${styles.active}` : ''}`}
          onClick={closeMobileMenu}
        >
          Despre Noi
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `${styles.mobileLink}${isActive ? ` ${styles.active}` : ''}`}
          onClick={closeMobileMenu}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
