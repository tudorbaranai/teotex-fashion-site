import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import NeedleAccent from '../components/ui/NeedleAccent';
import PageAccents from '../components/ui/PageAccents';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';
import type { Product } from '../types/product';
import styles from './CartPage.module.css';

const formatPrice = (n: number) => `${n.toFixed(2)} RON`;

interface ResolvedItem {
  product: Product;
  quantity: number;
}

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  const resolvedItems: ResolvedItem[] = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return { product, quantity: item.quantity };
    })
    .filter((item): item is ResolvedItem => item !== null);

  const itemCount = resolvedItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = resolvedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  let subtitle: string;
  if (itemCount === 0) {
    subtitle = 'Cosul tau este gol';
  } else if (itemCount === 1) {
    subtitle = '1 articol in cos';
  } else {
    subtitle = `${itemCount} articole in cos`;
  }

  const handleCheckout = () => {
    alert('Multumim! Aceasta este o demonstratie — comanda nu a fost plasata.');
  };

  return (
    <section className={styles.page}>
      <PageAccents variant="cart" />
      <div className={styles.pageContent}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Cosul Tau</h1>
          <hr className={styles.accentLine} />
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {resolvedItems.length === 0 ? (
          <div className={styles.emptyState}>
            <NeedleAccent className={styles.emptyNeedle} />
            <p className={styles.emptyText}>Cosul tau este gol</p>
            <Link to="/produse" className={styles.primaryButton}>
              Continua cumparaturile
            </Link>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.itemsList}>
              {resolvedItems.map(({ product, quantity }) => {
                const lineTotal = product.price * quantity;
                return (
                  <article key={product.id} className={styles.cartItem}>
                    <img
                      className={styles.itemImage}
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <div className={styles.itemDetails}>
                      <span className={styles.itemCategory}>{product.category}</span>
                      <h3 className={styles.itemName}>{product.name}</h3>
                      <span className={styles.itemPrice}>{formatPrice(product.price)}</span>
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => removeItem(product.id)}
                        aria-label={`Sterge ${product.name}`}
                      >
                        Sterge
                      </button>
                    </div>
                    <div className={styles.itemControls}>
                      <div className={styles.quantityControl}>
                        <button
                          type="button"
                          className={styles.qtyButton}
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          aria-label="Scade cantitatea"
                        >
                          −
                        </button>
                        <span className={styles.qtyValue}>{quantity}</span>
                        <button
                          type="button"
                          className={styles.qtyButton}
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          aria-label="Creste cantitatea"
                        >
                          +
                        </button>
                      </div>
                      <span className={styles.lineTotal}>{formatPrice(lineTotal)}</span>
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className={styles.summary}>
              <h2 className={styles.summaryTitle}>Sumar Comanda</h2>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Livrare</span>
                <span className={styles.freeShipping}>Gratuita</span>
              </div>
              <hr className={styles.summaryDivider} />
              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className={styles.checkoutButton}
                onClick={handleCheckout}
              >
                Finalizeaza Comanda
              </button>
              <Link to="/produse" className={styles.continueLink}>
                Continua cumparaturile
              </Link>
            </aside>
          </div>
        )}
      </Container>
      </div>
    </section>
  );
}
