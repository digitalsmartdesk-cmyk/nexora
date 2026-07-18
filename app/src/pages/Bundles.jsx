import Shell from '../components/Shell.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { BUNDLES, inr, getProduct } from '../data/products.js';

export default function Bundles() {
  const { addBundle } = useStore();

  const bundles = BUNDLES.map((b) => {
    const items = b.items.map((id) => getProduct(id)).filter(Boolean);
    return {
      ...b,
      items,
      includesLabel: items.map((i) => i.name).join(', '),
    };
  });

  return (
    <Shell active="bundle">
      <div style={{ padding: 'clamp(20px,3vw,36px) clamp(16px,4vw,32px) 18px', background: 'linear-gradient(135deg,#0B1F4B,#183E8C)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 6px', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 'clamp(22px,3vw,32px)', color: '#fff' }}>Bundle &amp; Save</h1>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#B9C8EA' }}>Do-teen kaam ke gadgets, ek saath sasta.</div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          padding: '16px clamp(14px,4vw,32px) 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 16,
          alignContent: 'start',
        }}
      >
        {bundles.map((b) => (
          <div key={b.id} style={{ background: '#FFFFFF', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(11,31,75,0.07)' }}>
            <div style={{ position: 'relative', display: 'flex', gap: 6, padding: '14px 14px 0' }}>
              {b.items.map((item) => (
                <div
                  key={item.id}
                  style={{ flex: 1, aspectRatio: '1/1', borderRadius: 10, background: 'repeating-linear-gradient(135deg,#EAF1FF,#EAF1FF 7px,#F7F9FC 7px,#F7F9FC 14px)' }}
                />
              ))}
              <span
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 20,
                  background: '#FFC531',
                  color: '#0B1F4B',
                  fontFamily: 'Inter,sans-serif',
                  fontWeight: 800,
                  fontSize: 10.5,
                  padding: '3px 8px',
                  borderRadius: 6,
                }}
              >
                SAVE {inr(b.mrp - b.price)}
              </span>
            </div>
            <div style={{ padding: '12px 14px 16px' }}>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 16, color: '#0B1F4B' }}>{b.name}</div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#7C89A8', margin: '3px 0 8px' }}>{b.tagline}</div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11.5, color: '#3A4560', marginBottom: 10 }}>Includes: {b.includesLabel}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 18, color: '#0B1F4B' }}>{inr(b.price)}</span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: '#A6AEC2', textDecoration: 'line-through' }}>{inr(b.mrp)}</span>
                </div>
                <button
                  onClick={() => addBundle(b.items.map((i) => i.id))}
                  style={{ padding: '10px 16px', border: 'none', borderRadius: 9, background: 'linear-gradient(135deg,#1E6FE0,#38B6FF)', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 12.5, cursor: 'pointer' }}
                >
                  Add Kit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}
