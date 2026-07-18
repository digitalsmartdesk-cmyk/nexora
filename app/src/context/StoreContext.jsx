import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PRODUCTS, getProduct } from '../data/products.js';

const StoreContext = createContext(null);

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('nexora_cart') || '{}');
  } catch {
    return {};
  }
}

export function StoreProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [cart, setCart] = useState(loadCart);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('nexora_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const toggleLang = useCallback(() => {
    setLang((l) => (l === 'hi' ? 'en' : 'hi'));
  }, []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const setQty = useCallback((id, qty) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const addToCart = useCallback((id, qty = 1) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + qty }));
    setCartOpen(true);
  }, []);

  const addBundle = useCallback((items) => {
    setCart((prev) => {
      const next = { ...prev };
      items.forEach((id) => {
        next[id] = (next[id] || 0) + 1;
      });
      return next;
    });
    setCartOpen(true);
  }, []);

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const p = getProduct(id);
        return p ? { id, name: p.name, price: p.price, qty } : null;
      })
      .filter(Boolean);
  }, [cart]);

  const cartCount = useMemo(() => cartItems.reduce((s, i) => s + i.qty, 0), [cartItems]);

  const value = {
    lang,
    toggleLang,
    cart,
    cartItems,
    cartCount,
    cartOpen,
    openCart,
    closeCart,
    setQty,
    addToCart,
    addBundle,
    PRODUCTS,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within a StoreProvider');
  return ctx;
}
