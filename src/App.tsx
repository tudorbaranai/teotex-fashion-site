import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <WishlistProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="produse" element={<ProductsPage />} />
              <Route path="despre-noi" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="cos" element={<CartPage />} />
              <Route path="favorite" element={<FavoritePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </HashRouter>
  );
}

export default App;
