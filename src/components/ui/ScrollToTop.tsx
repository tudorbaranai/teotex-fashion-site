import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window to the top whenever the route's pathname or search
 * params change. Mounted inside the Router so navigation (including footer
 * deep links that change only the search string) lands at the top of the
 * destination page.
 */
export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, search]);

  return null;
}
