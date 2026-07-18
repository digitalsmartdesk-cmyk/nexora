import { useStore } from '../context/StoreContext.jsx';
import { inr } from '../data/products.js';

export default function CartDrawer() {
  const { cartOpen, closeCart, cartItems, cartCount, setQty } = useStore();

  if (!cartOpen) return null;

  const total = cartItems.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
      <div onClick={closeCart} style={{ position: 'absolute', inset: 0, background: 'rgba(11,31,75,0.45)' }} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: 'min(88vw,380px)',
          background: '#F7F9FC',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-8px 0 24px rgba(11,31,75,0.15)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16,
            background: '#FFFFFF',
            borderBottom: '1px solid #EBEFF6',
          }}
        >
          <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 16, color: '#0B1F4B' }}>
            Your Cart ({cartCount})
          </span>
          <button
            onClick={closeCart}
            style={{ width: 30, height: 30, borderRadius: '50%', border: 'none', background: '#F1F4F9', cursor: 'pointer', fontSize: 16, color: '#0B1F4B' }}
          >
            ✕
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div key={item.id} style={{ display: 'flex', gap: 10, background: '#FFFFFF', borderRadius: 12, padding: 10, alignItems: 'center' }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 8,
                    flexShrink: 0,
                    background: 'repeating-linear-gradient(135deg,#EAF1FF,#EAF1FF 6px,#F7F9FC 6px,#F7F9FC 12px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Courier New',monospace",
                    fontSize: 7,
                    color: '#7C89A8',
                    textAlign: 'center',
                  }}
                >
                  IMG
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 13, color: '#0B1F4B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 13, color: '#1E6FE0', marginTop: 2 }}>
                    {inr(item.price)}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#F1F4F9', borderRadius: 20, padding: '4px 8px' }}>
                  <button
                    onClick={() => setQty(item.id, Math.max(0, item.qty - 1))}
                    style={{ width: 20, height: 20, border: 'none', background: 'none', fontSize: 14, color: '#0B1F4B', cursor: 'pointer' }}
                  >
                    −
                  </button>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, minWidth: 14, textAlign: 'center' }}>{item.qty}</span>
                  <button
                    onClick={() => setQty(item.id, item.qty + 1)}
                    style={{ width: 20, height: 20, border: 'none', background: 'none', fontSize: 14, color: '#0B1F4B', cursor: 'pointer' }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          {cartItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 12px', color: '#8892A6', fontFamily: 'Inter,sans-serif', fontSize: 13 }}>
              Cart khaali hai. Kuch smart add karo! 🛒
            </div>
          )}
        </div>
        <div style={{ padding: '14px 16px 20px', background: '#FFFFFF', borderTop: '1px solid #EBEFF6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontFamily: 'Inter,sans-serif' }}>
            <span style={{ fontSize: 13, color: '#55607A' }}>Total</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#0B1F4B' }}>{inr(total)}</span>
          </div>
          <button
            style={{
              width: '100%',
              padding: 13,
              border: 'none',
              borderRadius: 10,
              background: 'linear-gradient(135deg,#1E6FE0,#38B6FF)',
              color: '#fff',
              fontFamily: 'Poppins,sans-serif',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            Checkout — COD Available
          </button>
        </div>
      </div>
    </div>
  );
}
