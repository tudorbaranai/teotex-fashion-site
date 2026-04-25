import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { totalItems } = useCart();
  const { wishlistIds } = useWishlist();
  const wishlistCount = wishlistIds.size;
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

        {/* Right side: wishlist + cart icon + brand */}
        <div className={styles.navRight}>
          <Link to="/favorite" className={styles.wishlistButton} aria-label="Lista de favorite">
            <svg className={styles.wishlistIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {wishlistCount > 0 && <span className={styles.wishlistBadge}>{wishlistCount}</span>}
          </Link>

          <Link to="/cos" className={styles.cartButton} aria-label="Cos de cumparaturi">
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
          </Link>

          <Link to="/" className={styles.brand}>
            <span className={styles.brandName}>Teotex</span>
            <svg className={styles.brandIcon} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34 5 Q 30 9 26 13 L 11 28 L 7 33"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse
                cx="30.5"
                cy="8.5"
                rx="1.4"
                ry="2.4"
                transform="rotate(-45 30.5 8.5)"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M7 33 L 5 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M30.5 8.5 C 36 10, 38 16, 33 21 C 28 26, 22 24, 22 19 C 22 15, 26 14, 28 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
