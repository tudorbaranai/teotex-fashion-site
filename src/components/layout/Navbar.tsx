import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import styles from './Navbar.module.css';

interface SectionLink {
  label: string;
  to: string;
}

const sectionLinks: SectionLink[] = [
  { label: 'Toate produsele', to: '/produse' },
  { label: 'Femei', to: '/produse?sectiune=femei' },
  { label: 'Barbati', to: '/produse?sectiune=barbati' },
  { label: 'Casa', to: '/produse?sectiune=casa' },
  { label: 'Absolvire', to: '/produse?sectiune=absolvire' },
  { label: 'Nunti', to: '/produse?sectiune=nunti' },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { wishlistIds } = useWishlist();
  const wishlistCount = wishlistIds.size;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleProducts = () => {
    setProductsOpen((prev) => !prev);
  };

  const closeProducts = () => {
    setProductsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    if (!productsOpen) return;
    const handleMouseDown = (event: MouseEvent) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [productsOpen]);

  // Close dropdown on Escape
  useEffect(() => {
    if (!productsOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProductsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [productsOpen]);

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
          <div
            className={`${styles.dropdownWrapper}${productsOpen ? ` ${styles.dropdownOpen}` : ''}`}
            ref={productsRef}
          >
            <button
              type="button"
              className={`${styles.navLink} ${styles.dropdownTrigger}${productsOpen ? ` ${styles.active}` : ''}`}
              onClick={toggleProducts}
              aria-haspopup="true"
              aria-expanded={productsOpen}
            >
              Produse
              <svg
                className={`${styles.chevron}${productsOpen ? ` ${styles.chevronOpen}` : ''}`}
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5 L6 7.5 L9 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {productsOpen && (
              <div className={styles.dropdownMenu} role="menu">
                {sectionLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={styles.dropdownItem}
                    onClick={closeProducts}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`${styles.mobileMenu}${mobileMenuOpen ? ` ${styles.open}` : ''}`}>
        <div className={styles.mobileSubheader}>PRODUSE</div>
        {sectionLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={styles.mobileLink}
            onClick={closeMobileMenu}
          >
            {link.label}
          </Link>
        ))}
        <div className={styles.mobileDivider} />
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
