import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import Placeholder from '../components/Placeholder.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { PRODUCTS, COLLECTIONS, discountPct, inr } from '../data/products.js';

const BESTSELLER_IDS = ['robo-sweeper', 'massage-gun', 'tyre-inflator', 'aroma-diffuser'];

const TRUST_ITEMS = [
  {
    label: 'GST-Registered Indian Brand',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FE0" strokeWidth="2">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
  },
  {
    label: 'Cash on Delivery',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FE0" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
  {
    label: 'Fast Delivery',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FE0" strokeWidth="2">
        <rect x="1" y="7" width="14" height="10" rx="1"></rect>
        <path d="M15 10h4l3 3v4h-7z"></path>
        <circle cx="6" cy="19" r="1.6"></circle>
        <circle cx="17" cy="19" r="1.6"></circle>
      </svg>
    ),
  },
  {
    label: 'Easy 7-Day Replacement',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FE0" strokeWidth="2">
        <path d="M1 4v6h6"></path>
        <path d="M3.5 15a9 9 0 1 0 2-9.5L1 10"></path>
      </svg>
    ),
  },
];

const UGC_TILES = [3.2, 8.9, 1.4, 5.6, 12.1, 2.8].map((v) => `${v}k`);

const REVIEWS = [
  { stars: '★★★★★', text: '"Wah, itne mein?! Sweeper toh ekdum solid hai."', name: 'Priya', city: 'Pune' },
  { stars: '★★★★★', text: '"Massage gun ne gym ki thakaan bhula di."', name: 'Rohit', city: 'Indore' },
  { stars: '★★★★☆', text: '"COD tha isliye trust ho gaya. Product bhi mast."', name: 'Ayesha', city: 'Lucknow' },
];

function PlayButton({ size = 64, iconSize = 26 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M8 5v14l11-7z"></path>
      </svg>
    </div>
  );
}

export default function Homepage() {
  const { lang, toggleLang } = useStore();

  const bestsellers = BESTSELLER_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  const footerLangLabel = lang === 'hi' ? 'Switch to English' : 'हिंदी में देखें';

  return (
    <Shell active="home">
      <div style={{ flex: 1 }}>
        {/* HERO */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '4/5',
            background: 'repeating-linear-gradient(135deg,#0B1F4B,#0B1F4B 14px,#12285F 14px,#12285F 28px)',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PlayButton />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
              fontFamily: "'Courier New',monospace",
              fontSize: 10,
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            PRODUCT DEMO VIDEO — 4:5
          </div>
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              padding: '20px 18px 22px',
              background: 'linear-gradient(0deg,rgba(11,31,75,0.95),rgba(11,31,75,0.55) 70%,rgba(11,31,75,0))',
            }}
          >
            <div style={{ display: 'flex', marginBottom: 10 }}>
              <span style={{ background: 'rgba(0,0,0,0.4)', color: '#fff', fontFamily: 'Inter,sans-serif', fontSize: 11, padding: '4px 10px', borderRadius: 4 }}>
                "iske baad jhaadu haath mein nahi liya"
              </span>
            </div>
            <h1 style={{ margin: '0 0 12px', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 27, lineHeight: 1.15, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              Gadgets you didn't know existed.
            </h1>
            <a
              href="#bestsellers"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '12px 20px',
                borderRadius: 10,
                background: 'linear-gradient(135deg,#1E6FE0,#38B6FF)',
                color: '#fff',
                fontFamily: 'Poppins,sans-serif',
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              See It Work · Dekho Kaise ▸
            </a>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, padding: '16px 12px', background: '#FFFFFF' }}>
          {TRUST_ITEMS.map((t) => (
            <div key={t.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#EAF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {t.icon}
              </div>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: 600, color: '#3A4560', lineHeight: 1.25 }}>{t.label}</span>
            </div>
          ))}
        </div>

        {/* BESTSELLERS */}
        <div id="bestsellers" style={{ padding: '22px 0 6px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '0 14px 12px' }}>
            <h2 style={{ margin: 0, fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 19, color: '#0B1F4B' }}>Bestsellers</h2>
            <Link to="/shop" style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: '#1E6FE0', textDecoration: 'none' }}>
              See all ▸
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 14px 8px', scrollSnapType: 'x mandatory' }}>
            {bestsellers.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                style={{
                  scrollSnapAlign: 'start',
                  flex: '0 0 152px',
                  textDecoration: 'none',
                  background: '#FFFFFF',
                  borderRadius: 14,
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(11,31,75,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Placeholder style={{ width: '100%', aspectRatio: '1/1' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(11,31,75,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                  <span
                    style={{
                      position: 'absolute',
                      top: 6,
                      left: 6,
                      background: '#E6483B',
                      color: '#fff',
                      fontFamily: 'Inter,sans-serif',
                      fontWeight: 700,
                      fontSize: 9,
                      padding: '2px 6px',
                      borderRadius: 4,
                    }}
                  >
                    {discountPct(p.price, p.mrp)}% OFF
                  </span>
                </Placeholder>
                <div style={{ padding: '9px 10px 12px' }}>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 12, color: '#0B1F4B', lineHeight: 1.3, height: 31, overflow: 'hidden' }}>
                    {p.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
                    <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 14, color: '#0B1F4B' }}>{inr(p.price)}</span>
                    <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#A6AEC2', textDecoration: 'line-through' }}>{inr(p.mrp)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SHOP BY PROBLEM */}
        <div style={{ padding: '22px 14px 6px' }}>
          <h2 style={{ margin: '0 0 12px', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 19, color: '#0B1F4B' }}>Shop by Problem</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {COLLECTIONS.map((c) => (
              <Link
                key={c.id}
                to={`/shop/${c.id}`}
                style={{ textDecoration: 'none', borderRadius: 14, overflow: 'hidden', background: '#FFFFFF', boxShadow: '0 2px 10px rgba(11,31,75,0.06)', display: 'flex', flexDirection: 'column' }}
              >
                <Placeholder style={{ width: '100%', aspectRatio: '4/3', fontSize: 26 }}>{c.icon}</Placeholder>
                <div style={{ padding: '9px 10px 11px' }}>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 13, color: '#0B1F4B' }}>{c.name}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#7C89A8', marginTop: 2 }}>{c.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* UGC VIDEO WALL */}
        <div style={{ padding: '22px 14px 6px' }}>
          <h2 style={{ margin: '0 0 4px', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 19, color: '#0B1F4B' }}>Real People, Real Reactions</h2>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#7C89A8', marginBottom: 12 }}>Nexora fam on Reels &amp; Insta</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
            {UGC_TILES.map((views, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  aspectRatio: '9/16',
                  borderRadius: 10,
                  overflow: 'hidden',
                  background: 'repeating-linear-gradient(135deg,#0B1F4B,#0B1F4B 8px,#16326E 8px,#16326E 16px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="#fff">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
                <span style={{ position: 'absolute', bottom: 4, left: 5, color: '#fff', fontFamily: 'Inter,sans-serif', fontSize: 9, fontWeight: 600 }}>{views} views</span>
              </div>
            ))}
          </div>
        </div>

        {/* BUNDLE BANNER */}
        <div style={{ padding: '22px 14px 6px' }}>
          <Link
            to="/bundles"
            style={{ textDecoration: 'none', display: 'block', borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(135deg,#0B1F4B,#183E8C)', position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: '#FFC531',
                color: '#0B1F4B',
                fontFamily: 'Inter,sans-serif',
                fontWeight: 800,
                fontSize: 11,
                padding: '4px 9px',
                borderRadius: 6,
              }}
            >
              SAVE ₹4,798
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 18 }}>
              <div
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: 12,
                  flexShrink: 0,
                  background: 'repeating-linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.14) 7px,rgba(255,255,255,0.05) 7px,rgba(255,255,255,0.05) 14px)',
                }}
              />
              <div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 600, color: '#8FC1FF', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Bundle &amp; Save
                </div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 16, color: '#fff', margin: '3px 0 6px' }}>Chore-Free Home Kit</div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 15, color: '#38B6FF' }}>
                  ₹3,499 <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: 12, textDecoration: 'line-through' }}>₹8,297</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* PHOTO REVIEWS */}
        <div style={{ padding: '22px 0 6px' }}>
          <h2 style={{ margin: '0 0 12px', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 19, color: '#0B1F4B', padding: '0 14px' }}>Photo Reviews</h2>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 14px 8px' }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ flex: '0 0 200px', background: '#FFFFFF', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 10px rgba(11,31,75,0.06)' }}>
                <Placeholder style={{ width: '100%', aspectRatio: '4/3' }} label={null}>
                  <span style={{ fontFamily: "'Courier New',monospace", fontSize: 9, color: '#7C89A8' }}>CUSTOMER PHOTO</span>
                </Placeholder>
                <div style={{ padding: '10px 12px 12px' }}>
                  <div style={{ color: '#FFB800', fontSize: 12, letterSpacing: '1px' }}>{r.stars}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#3A4560', margin: '5px 0 6px', lineHeight: 1.4 }}>{r.text}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 600, color: '#7C89A8' }}>
                    — {r.name}, {r.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: '#0B1F4B', padding: '26px 16px 20px', color: '#C6D2EE' }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Check delivery at your pincode</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              placeholder="Enter pincode"
              style={{
                flex: 1,
                minWidth: 0,
                padding: '11px 12px',
                borderRadius: 9,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                fontFamily: 'Inter,sans-serif',
                fontSize: 13,
              }}
            />
            <button
              style={{
                padding: '0 16px',
                border: 'none',
                borderRadius: 9,
                background: 'linear-gradient(135deg,#1E6FE0,#38B6FF)',
                color: '#fff',
                fontFamily: 'Poppins,sans-serif',
                fontWeight: 700,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              Check
            </button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', fontFamily: 'Inter,sans-serif', fontSize: 13, marginBottom: 18 }}>
          <a href="#" style={{ color: '#C6D2EE', textDecoration: 'none' }}>Shipping Policy</a>
          <a href="#" style={{ color: '#C6D2EE', textDecoration: 'none' }}>Replacement Policy</a>
          <a href="#" style={{ color: '#C6D2EE', textDecoration: 'none' }}>About Nexora</a>
          <a href="#" style={{ color: '#C6D2EE', textDecoration: 'none' }}>Contact Us</a>
          <a href="#" style={{ color: '#C6D2EE', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: '#C6D2EE', textDecoration: 'none' }}>Privacy Policy</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundImage: "url('/assets/nexora-logo.png')",
                backgroundSize: '420% 420%',
                backgroundPosition: '50% 14%',
              }}
            />
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#8FA1CC' }}>GST-Registered Indian Brand</span>
          </div>
          <button
            onClick={toggleLang}
            style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: '#fff', fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 600, padding: '6px 10px', borderRadius: 16, cursor: 'pointer' }}
          >
            {footerLangLabel}
          </button>
        </div>
      </div>
    </Shell>
  );
}
