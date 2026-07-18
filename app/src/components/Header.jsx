import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';
import useIsDesktop from '../hooks/useIsDesktop.js';
import logo from '../assets/nexora-logo.png';

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

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Chore Killers', href: '/shop/chore-killers' },
  { label: 'Health', href: '/shop/health' },
  { label: 'Smart Home', href: '/shop/smart-home' },
  { label: 'Bundles', href: '/bundles' },
  { label: 'Track Order', href: '/track' },
];

export default function Header() {
  const { lang, toggleLang, cartCount, openCart } = useStore();
  const isDesktop = useIsDesktop();

  const lines = lang === 'hi' ? LINES_HI : LINES_EN;
  const langLabel = lang === 'hi' ? 'EN' : 'हिं / EN';
  const barPadding = isDesktop ? '14px 32px' : '10px 14px';

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
          overflow: 'hidden',
          position: 'relative',
          height: 18,
        }}
      >
        {lines.map((text, i) => (
          <div
            key={text}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              animationName: 'nexora-announce-fade',
              animationDuration: '7.5s',
              animationIterationCount: 'infinite',
              animationFillMode: 'backwards',
              animationDelay: `${i * 2.5}s`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <div style={{ background: '#FFFFFF', boxShadow: '0 1px 0 rgba(11,31,75,0.06)' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: barPadding,
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundImage: `url(${logo})`,
                backgroundSize: '420% 420%',
                backgroundPosition: '50% 14%',
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 17, color: '#0B1F4B', letterSpacing: '-0.01em' }}>
              Nexora
            </span>
          </Link>

          {isDesktop && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="nexora-nav-link"
                  style={{ textDecoration: 'none', fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 14, color: '#1B2B55', whiteSpace: 'nowrap' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
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
            {isDesktop && (
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="nexora-whatsapp-btn"
                style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid #E3E8F2', background: '#F7F9FC', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2z"></path>
                </svg>
              </a>
            )}
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
    </div>
  );
}
