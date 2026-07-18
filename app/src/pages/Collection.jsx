import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { PRODUCTS, COLLECTIONS, discountPct, inr } from '../data/products.js';

export default function Collection() {
  const { collectionId } = useParams();
  const cId = collectionId || 'chore-killers';
  const collection = COLLECTIONS.find((c) => c.id === cId) || { name: 'Chore Killers', tagline: 'Roz ka kaam, ab asaan' };
  const products = PRODUCTS.filter((p) => p.collection === cId);

  return (
    <Shell active="shop">
      <div style={{ padding: 'clamp(18px,3vw,32px) clamp(16px,4vw,32px) 6px', background: '#0B1F4B' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 600, color: '#8FC1FF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
            Collection
          </div>
          <h1 style={{ margin: '0 0 4px', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 'clamp(23px,3vw,34px)', color: '#fff' }}>{collection.name}</h1>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#B9C8EA', paddingBottom: 16 }}>{collection.tagline}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '12px clamp(14px,4vw,32px)', background: '#FFFFFF', borderBottom: '1px solid #EBEFF6', maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        {COLLECTIONS.map((c) => {
          const active = c.id === cId;
          return (
            <Link
              key={c.id}
              to={`/shop/${c.id}`}
              style={{
                flex: '0 0 auto',
                textDecoration: 'none',
                padding: '8px 13px',
                borderRadius: 20,
                fontFamily: 'Inter,sans-serif',
                fontWeight: 600,
                fontSize: 12.5,
                background: active ? '#0B1F4B' : '#F1F4F9',
                color: active ? '#fff' : '#3A4560',
              }}
            >
              {c.name}
            </Link>
          );
        })}
      </div>

      <div style={{ flex: 1, maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: '16px clamp(14px,4vw,32px) 24px' }}>
        <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: '#7C89A8', marginBottom: 12 }}>{products.length} products</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 16 }}>
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              style={{ textDecoration: 'none', background: '#FFFFFF', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 10px rgba(11,31,75,0.06)', display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                  background: 'repeating-linear-gradient(135deg,#EAF1FF,#EAF1FF 8px,#F7F9FC 8px,#F7F9FC 16px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
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
              </div>
              <div style={{ padding: '9px 10px 12px' }}>
                <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 12, color: '#0B1F4B', lineHeight: 1.3, height: 31, overflow: 'hidden' }}>{p.name}</div>
                <div style={{ color: '#FFB800', fontSize: 10, marginTop: 4 }}>
                  ★★★★☆ <span style={{ color: '#A6AEC2' }}>({p.reviews.toLocaleString('en-IN')})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 5 }}>
                  <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 13.5, color: '#0B1F4B' }}>{inr(p.price)}</span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10.5, color: '#A6AEC2', textDecoration: 'line-through' }}>{inr(p.mrp)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
