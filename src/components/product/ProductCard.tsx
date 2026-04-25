import type { Product } from '../../types/product';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import Badge from '../ui/Badge';
import WishlistButton from '../ui/WishlistButton';
import AddToCartButton from '../ui/AddToCartButton';
import CategoryTag from '../ui/CategoryTag';
import PriceDisplay from '../ui/PriceDisplay';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const handleAddToCart = () => {
    addItem(product.id);
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product.id);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        {product.badge && (
          <div className={styles.badge}>
            <Badge text={product.badge} />
          </div>
        )}
        <div className={styles.wishlist}>
          <WishlistButton isActive={isWishlisted(product.id)} onClick={handleWishlistToggle} />
        </div>
        <img
          className={styles.productImage}
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <CategoryTag category={product.category} />
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.bottomRow}>
          <PriceDisplay price={product.price} originalPrice={product.originalPrice} />
          <AddToCartButton onClick={handleAddToCart} />
        </div>
      </div>
    </article>
  );
}
