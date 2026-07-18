import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';

const LINES_EN = [
  'COD Available ✓ Free Shipping over ₹699',
  '7-Day Easy Replacement ✓',
  'GST-Registered Indian Brand',
];
const LINES_HI = [
  'COD Available ✓ ₹699 se upar Free Shipping',
  '7-Din Aasan Replacement ✓',
  'GST-Registered Indian Brand',
];

export default function Header() {
  const { lang, toggleLang, cartCount, openCart } = useStore();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 2800);
    return () => clearInterval(timer);
  }, []);

  const lines = lang === 'hi' ? LINES_HI : LINES_EN;
  const langLabel = lang === 'hi' ? 'EN' : 'हिं / EN';

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 40, width: '100%' }}>
      <div
        style={{
          background: '#0B1F4B',
          color: '#EAF1FF',
          fontFamily: 'Inter,sans-serif',
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.01em',
          padding: '7px 12px',
          textAlign: 'center',
        }}
      >
        {lines[tick % lines.length]}
      </div>
      <div
        style={{
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          padding: '10px 14px',
          boxShadow: '0 1px 0 rgba(11,31,75,0.06)',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundImage: "url('/assets/nexora-logo.png')",
              backgroundSize: '420% 420%',
              backgroundPosition: '50% 14%',
              flexShrink: 0,
            }}
          />
          <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 17, color: '#0B1F4B', letterSpacing: '-0.01em' }}>
            Nexora
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={toggleLang}
            style={{
              fontFamily: 'Inter,sans-serif',
              fontWeight: 600,
              fontSize: 12,
              color: '#1E6FE0',
              background: '#EAF2FF',
              border: 'none',
              borderRadius: 20,
              padding: '6px 11px',
              cursor: 'pointer',
            }}
          >
            {langLabel}
          </button>
          <button
            onClick={openCart}
            aria-label="Cart"
            style={{
              position: 'relative',
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid #E3E8F2',
              background: '#F7F9FC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B1F4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -3,
                  right: -3,
                  minWidth: 16,
                  height: 16,
                  padding: '0 3px',
                  borderRadius: 9,
                  background: '#1E6FE0',
                  color: '#fff',
                  fontFamily: 'Inter,sans-serif',
                  fontSize: 10,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
