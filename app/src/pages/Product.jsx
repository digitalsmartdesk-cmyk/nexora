import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import Placeholder from '../components/Placeholder.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { PRODUCTS, discountPct, inr, getProduct } from '../data/products.js';

const SPECS_DATA = [
  { label: 'Suction Power', value: '2500Pa strong suction, works on tiles, wood & low-pile carpet.' },
  { label: 'Battery Life', value: 'Up to 100 minutes on a single charge, USB-C charging.' },
  { label: 'Box Contents', value: '1x Robotic Sweeper, 1x Charging Dock, 2x Side Brush, User Manual.' },
  { label: 'Warranty', value: '1-year manufacturer warranty on motor and battery.' },
  { label: 'Dimensions & Weight', value: '28cm diameter, 7.5cm height, 1.1kg.' },
];

const PROBLEM_LINES = [
  'Roz jhaadu-pocha? Ab nahi.',
  'Guests aane wale hain, floor abhi bhi gandha hai?',
  'Weekend cleaning mein poora din nikal jaata hai.',
];

const STEPS = [
  { n: 1, text: 'Charge fully & place on any floor' },
  { n: 2, text: 'Press power — auto-navigates every corner' },
  { n: 3, text: 'Empty the dustbin, done in minutes' },
];

const REVIEWS = [
  { stars: '★★★★★', text: '"Wah, itne mein?! Ekdum paisa vasool."', name: 'Priya, Pune' },
  { stars: '★★★★★', text: '"Roz ka jhaadu-pocha ab 10 min ka kaam."', name: 'Sameer, Nagpur' },
  { stars: '★★★★☆', text: '"Battery life accha hai, sound bhi kam hai."', name: 'Neha, Surat' },
];

const QAS = [
  { q: 'Kya ye carpet pe bhi chalta hai?', a: 'Haan, low-pile carpet aur rugs pe achhe se kaam karta hai.' },
  { q: 'COD available hai kya mere pincode pe?', a: 'Zyada tar pincodes pe COD available hai — checkout pe pincode daalke confirm karo.' },
];

const CROSS_SELL_IDS = ['kitchen-mop', 'veg-chopper', 'lint-remover'];

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);
  const [openSpec, setOpenSpec] = useState(0);

  const current = getProduct(id) || getProduct('robo-sweeper');
  const pct = discountPct(current.price, current.mrp);
  const crossSell = CROSS_SELL_IDS.filter((cid) => cid !== current.id)
    .map((cid) => PRODUCTS.find((p) => p.id === cid))
    .filter(Boolean);

  const handleAdd = () => addToCart(current.id, qty);

  return (
    <Shell active="shop" extraPadding={78}>
      {/* DEMO VIDEO + GALLERY */}
      <Placeholder style={{ width: '100%', aspectRatio: '16/9' }} label="DEMO VIDEO 16:9" dark>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </div>
      </Placeholder>
      <div style={{ display: 'flex', gap: 8, padding: '10px 14px', overflowX: 'auto' }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              flex: '0 0 56px',
              height: 56,
              borderRadius: 8,
              background: 'repeating-linear-gradient(135deg,#EAF1FF,#EAF1FF 6px,#F7F9FC 6px,#F7F9FC 12px)',
              border: `2px solid ${i === 0 ? '#1E6FE0' : 'transparent'}`,
            }}
          />
        ))}
      </div>

      {/* BUY BOX */}
      <div style={{ padding: '14px 16px 18px', background: '#FFFFFF' }}>
        <h1 style={{ margin: '0 0 6px', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 20, color: '#0B1F4B', lineHeight: 1.25 }}>{current.name}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ color: '#FFB800', fontSize: 13, letterSpacing: '1px' }}>★★★★☆</span>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#7C89A8' }}>
            {current.rating} ({current.reviews.toLocaleString('en-IN')} reviews)
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
          <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 26, color: '#0B1F4B' }}>{inr(current.price)}</span>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#A6AEC2', textDecoration: 'line-through' }}>{inr(current.mrp)}</span>
          <span style={{ background: '#E6483B', color: '#fff', fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 11, padding: '3px 8px', borderRadius: 5 }}>{pct}% OFF</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, color: '#3A4560' }}>Qty</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#F1F4F9', borderRadius: 20, padding: '6px 12px' }}>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} style={{ width: 22, height: 22, border: 'none', background: 'none', fontSize: 16, color: '#0B1F4B', cursor: 'pointer' }}>
              −
            </button>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 700, minWidth: 16, textAlign: 'center' }}>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} style={{ width: 22, height: 22, border: 'none', background: 'none', fontSize: 16, color: '#0B1F4B', cursor: 'pointer' }}>
              +
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 12 }}>
          <button
            onClick={handleAdd}
            style={{ width: '100%', padding: 14, border: 'none', borderRadius: 10, background: 'linear-gradient(135deg,#1E6FE0,#38B6FF)', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}
          >
            Buy Now — COD Available
          </button>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: 13,
              borderRadius: 10,
              border: '1.5px solid #25D366',
              color: '#128C4A',
              fontFamily: 'Poppins,sans-serif',
              fontWeight: 700,
              fontSize: 14,
              textAlign: 'center',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 7,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2z"></path>
            </svg>
            Ask on WhatsApp
          </a>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <input
            placeholder="Enter pincode"
            style={{ flex: 1, minWidth: 0, padding: '11px 12px', borderRadius: 9, border: '1px solid #E3E8F2', background: '#F7F9FC', fontFamily: 'Inter,sans-serif', fontSize: 13 }}
          />
          <button style={{ padding: '0 14px', border: '1px solid #1E6FE0', borderRadius: 9, background: '#FFFFFF', color: '#1E6FE0', fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>
            Check
          </button>
        </div>
        <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#8892A6', marginTop: 6 }}>Delivery date + COD eligibility ke liye pincode check karo</div>
      </div>

      {/* PROBLEM STRIP */}
      <div style={{ padding: '20px 16px', background: '#EAF2FF' }}>
        {PROBLEM_LINES.map((line, i) => (
          <div key={i} style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 15, color: '#0B1F4B', marginBottom: 8, lineHeight: 1.4 }}>
            {line}
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <div style={{ padding: '22px 16px 6px' }}>
        <h2 style={{ margin: '0 0 14px', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 18, color: '#0B1F4B' }}>How It Works</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div
                style={{
                  flex: '0 0 76px',
                  height: 76,
                  borderRadius: 10,
                  background: 'repeating-linear-gradient(135deg,#EAF1FF,#EAF1FF 7px,#F7F9FC 7px,#F7F9FC 14px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Courier New',monospace",
                  fontSize: 8,
                  color: '#7C89A8',
                  textAlign: 'center',
                }}
              >
                GIF LOOP
              </div>
              <div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 11, color: '#1E6FE0', marginBottom: 2 }}>STEP {s.n}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13, color: '#0B1F4B' }}>{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SPECS ACCORDION */}
      <div style={{ padding: '22px 16px 6px' }}>
        <h2 style={{ margin: '0 0 10px', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 18, color: '#0B1F4B' }}>Specifications</h2>
        <div style={{ border: '1px solid #EBEFF6', borderRadius: 12, overflow: 'hidden' }}>
          {SPECS_DATA.map((spec, i) => {
            const isOpen = openSpec === i;
            return (
              <div key={spec.label} style={{ borderBottom: '1px solid #EBEFF6' }}>
                <button
                  onClick={() => setOpenSpec(isOpen ? -1 : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 14px', background: '#FFFFFF', border: 'none', textAlign: 'left', cursor: 'pointer' }}
                >
                  <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13, color: '#0B1F4B' }}>{spec.label}</span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#7C89A8' }}>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 14px 13px', fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: '#55607A', lineHeight: 1.5 }}>{spec.value}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* REVIEWS + Q&A */}
      <div style={{ padding: '22px 0 6px' }}>
        <h2 style={{ margin: '0 0 12px', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 18, color: '#0B1F4B', padding: '0 16px' }}>Photo Reviews</h2>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 16px 8px' }}>
          {REVIEWS.map((r, i) => (
            <div key={i} style={{ flex: '0 0 190px', background: '#FFFFFF', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 10px rgba(11,31,75,0.06)', border: '1px solid #EBEFF6' }}>
              <Placeholder style={{ width: '100%', aspectRatio: '4/3' }}>
                <span style={{ fontFamily: "'Courier New',monospace", fontSize: 9, color: '#7C89A8' }}>CUSTOMER PHOTO</span>
              </Placeholder>
              <div style={{ padding: '10px 12px 12px' }}>
                <div style={{ color: '#FFB800', fontSize: 12, letterSpacing: '1px' }}>{r.stars}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#3A4560', margin: '5px 0 6px', lineHeight: 1.4 }}>{r.text}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 600, color: '#7C89A8' }}>— {r.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '14px 16px 4px' }}>
          <h3 style={{ margin: '0 0 10px', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 15, color: '#0B1F4B' }}>Questions &amp; Answers</h3>
          {QAS.map((qa, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 12.5, color: '#0B1F4B' }}>Q: {qa.q}</div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: '#55607A', marginTop: 3 }}>A: {qa.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CROSS-SELL */}
      <div style={{ padding: '20px 0 6px' }}>
        <h2 style={{ margin: '0 0 12px', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 18, color: '#0B1F4B', padding: '0 16px' }}>Goes Well With</h2>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 16px 8px' }}>
          {crossSell.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              style={{ scrollSnapAlign: 'start', flex: '0 0 140px', textDecoration: 'none', background: '#FFFFFF', borderRadius: 12, overflow: 'hidden', border: '1px solid #EBEFF6' }}
            >
              <div style={{ width: '100%', aspectRatio: '1/1', background: 'repeating-linear-gradient(135deg,#EAF1FF,#EAF1FF 8px,#F7F9FC 8px,#F7F9FC 16px)' }} />
              <div style={{ padding: '8px 9px 10px' }}>
                <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 11.5, color: '#0B1F4B', lineHeight: 1.3, height: 29, overflow: 'hidden' }}>{p.name}</div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 13, color: '#0B1F4B', marginTop: 5 }}>{inr(p.price)}</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ padding: '6px 16px 4px' }}>
          <Link
            to="/bundles"
            style={{ textDecoration: 'none', display: 'flex', borderRadius: 14, padding: 14, background: '#EAF2FF', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}
          >
            <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 12.5, color: '#0B1F4B' }}>Bundle this with 2 more &amp; save ₹4,798</span>
            <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 12, color: '#1E6FE0', whiteSpace: 'nowrap' }}>View Bundle ▸</span>
          </Link>
        </div>
      </div>

      {/* STICKY BUY BAR */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 66, zIndex: 35, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ width: '100%', maxWidth: 430, background: '#FFFFFF', borderTop: '1px solid #EBEFF6', boxShadow: '0 -4px 14px rgba(11,31,75,0.08)', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', pointerEvents: 'auto' }}>
          <div>
            <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 16, color: '#0B1F4B' }}>{inr(current.price)}</div>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 10.5, color: '#A6AEC2', textDecoration: 'line-through' }}>{inr(current.mrp)}</div>
          </div>
          <button
            onClick={handleAdd}
            style={{ flex: 1, padding: 12, border: 'none', borderRadius: 10, background: 'linear-gradient(135deg,#1E6FE0,#38B6FF)', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 13.5, cursor: 'pointer' }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </Shell>
  );
}
