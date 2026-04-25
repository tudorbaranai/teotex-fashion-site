import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';
import type { Product } from '../types/product';
import styles from './CartPage.module.css';

const formatPrice = (n: number) => `${n.toFixed(2)} RON`;

// TODO: replace 40000000000 with the real WhatsApp number
const WHATSAPP_NUMBER = '40000000000';
// TODO: confirm the real phone number (mirrors ContactPage)
const PHONE_NUMBER = '074086771';
const PHONE_DISPLAY = '0740 86 771';

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

  const whatsAppMessage = [
    'Buna! As dori sa comand urmatoarele produse de pe TeoTex:',
    '',
    ...resolvedItems.map(
      ({ product, quantity }) =>
        `• ${quantity}x ${product.name} — ${formatPrice(product.price * quantity)}`
    ),
    '',
    `Subtotal estimativ: ${formatPrice(subtotal)}`,
    '',
    'Multumesc!',
  ].join('\n');

  const whatsAppHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsAppMessage)}`;
  const phoneHref = `tel:${PHONE_NUMBER}`;

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Cosul Tau</h1>
          <hr className={styles.accentLine} />
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {resolvedItems.length === 0 ? (
          <div className={styles.emptyState}>
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
              <hr className={styles.summaryDivider} />
              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className={styles.orderNote}>
                Comenzile se finalizeaza prin WhatsApp sau telefon — fara plata online si fara livrare automata.
              </p>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <svg
                  className={styles.actionIcon}
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M16.001 3.2C8.928 3.2 3.2 8.928 3.2 16.001c0 2.255.59 4.461 1.71 6.402L3.2 28.8l6.555-1.71a12.78 12.78 0 0 0 6.246 1.61c7.073 0 12.801-5.728 12.801-12.799S23.072 3.2 16.001 3.2zm5.798 16.245c-.317-.158-1.875-.925-2.166-1.031-.291-.106-.503-.158-.715.158-.211.317-.82 1.031-1.005 1.243-.184.211-.371.238-.687.079-.317-.158-1.336-.492-2.546-1.57-.94-.838-1.575-1.872-1.76-2.189-.184-.317-.02-.488.139-.646.143-.142.317-.371.476-.557.158-.184.211-.317.317-.529.106-.211.053-.396-.026-.555-.079-.158-.715-1.722-.98-2.36-.258-.62-.52-.535-.715-.546l-.609-.011a1.171 1.171 0 0 0-.847.396c-.291.317-1.111 1.085-1.111 2.643 0 1.557 1.137 3.064 1.296 3.275.158.211 2.238 3.418 5.422 4.793.758.328 1.349.523 1.81.669.76.241 1.453.207 2 .126.611-.091 1.875-.766 2.139-1.506.264-.74.264-1.374.184-1.506-.079-.132-.291-.211-.608-.37z"
                  />
                </svg>
                Trimite cererea pe WhatsApp
              </a>
              <a href={phoneHref} className={styles.phoneButton}>
                <svg
                  className={styles.actionIcon}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 5C3 3.89543 3.89543 3 5 3H6.5C7.05 3 7.54 3.33 7.71 3.85L8.65 6.61C8.8 7.07 8.67 7.58 8.3 7.91L7.09 9.09C7.95 10.99 9.01 12.05 10.91 12.91L12.09 11.7C12.42 11.33 12.93 11.2 13.39 11.35L16.15 12.29C16.67 12.46 17 12.95 17 13.5V15C17 16.1046 16.1046 17 15 17C8.37 17 3 11.63 3 5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                Suna la {PHONE_DISPLAY}
              </a>
              <Link to="/produse" className={styles.continueLink}>
                Continua cumparaturile
              </Link>
            </aside>
          </div>
        )}
      </Container>
    </section>
  );
}
