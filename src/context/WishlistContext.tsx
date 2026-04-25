import { createContext, useReducer, useCallback, type ReactNode } from 'react';

interface WishlistContextValue {
  wishlistIds: Set<string>;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

type WishlistAction = { type: 'TOGGLE'; productId: string };

function wishlistReducer(state: Set<string>, action: WishlistAction): Set<string> {
  switch (action.type) {
    case 'TOGGLE': {
      const next = new Set(state);
      if (next.has(action.productId)) {
        next.delete(action.productId);
      } else {
        next.add(action.productId);
      }
      return next;
    }
    default:
      return state;
  }
}

export const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistIds, dispatch] = useReducer(wishlistReducer, new Set<string>());

  const toggleWishlist = useCallback((productId: string) => {
    dispatch({ type: 'TOGGLE', productId });
  }, []);

  const isWishlisted = useCallback((productId: string) => {
    return wishlistIds.has(productId);
  }, [wishlistIds]);

  return (
    <WishlistContext.Provider value={{ wishlistIds, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}
