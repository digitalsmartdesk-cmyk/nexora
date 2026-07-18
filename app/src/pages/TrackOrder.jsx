import { useState } from 'react';
import Shell from '../components/Shell.jsx';

const STEP_LABELS = ['Ordered', 'Shipped', 'Out for Delivery', 'Delivered'];

export default function TrackOrder() {
  const [showResult, setShowResult] = useState(false);

  const trackSteps = STEP_LABELS.map((label, i) => ({
    label,
    done: i < 3,
    bg: i < 3 ? '#1E6FE0' : '#D9E0EC',
    textColor: i < 3 ? '#0B1F4B' : '#A6AEC2',
  }));

  return (
    <Shell active="track">
      <div style={{ padding: 'clamp(20px,4vw,48px) 16px 4px', maxWidth: 560, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <h1 style={{ margin: '0 0 4px', fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 21, color: '#0B1F4B' }}>Track Your Order</h1>
        <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#7C89A8', marginBottom: 18 }}>
          Order number ya phone number daalo — status turant milega.
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: 14, padding: 16, boxShadow: '0 2px 10px rgba(11,31,75,0.06)', marginBottom: 18 }}>
          <label style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, color: '#3A4560', display: 'block', marginBottom: 6 }}>
            Order ID or Mobile Number
          </label>
          <input
            placeholder="e.g. NXR10293 or 98XXXXXX10"
            style={{ width: '100%', boxSizing: 'border-box', padding: '12px 13px', borderRadius: 9, border: '1px solid #E3E8F2', background: '#F7F9FC', fontFamily: 'Inter,sans-serif', fontSize: 13.5, marginBottom: 10 }}
          />
          <button
            onClick={() => setShowResult(true)}
            style={{ width: '100%', padding: 13, border: 'none', borderRadius: 10, background: 'linear-gradient(135deg,#1E6FE0,#38B6FF)', color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}
          >
            Track Order
          </button>
        </div>

        {showResult && (
          <div style={{ background: '#FFFFFF', borderRadius: 14, padding: 16, boxShadow: '0 2px 10px rgba(11,31,75,0.06)', marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#7C89A8' }}>Order #NXR10293</span>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 700, color: '#1E6FE0', background: '#EAF2FF', padding: '3px 9px', borderRadius: 12 }}>
                Out for Delivery
              </span>
            </div>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ position: 'absolute', top: 11, left: 32, right: 32, height: 2, background: '#EBEFF6', zIndex: 0 }} />
              {trackSteps.map((step) => (
                <div key={step.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    {step.done && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    )}
                  </div>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 9.5, fontWeight: 600, color: step.textColor, textAlign: 'center', marginTop: 5 }}>{step.label}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: '#3A4560', marginTop: 16, textAlign: 'center' }}>
              Aaj shaam 6–9 PM tak pahunch jayega. 📦
            </div>
          </div>
        )}

        <div style={{ background: '#EAF2FF', borderRadius: 14, padding: 16, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2z"></path>
          </svg>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 12.5, color: '#0B1F4B' }}>Order mein dikkat?</div>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11.5, color: '#3A4560' }}>WhatsApp pe seedha baat karo</div>
          </div>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', padding: '8px 14px', borderRadius: 8, border: '1.5px solid #25D366', color: '#128C4A', fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 12, whiteSpace: 'nowrap' }}
          >
            Chat
          </a>
        </div>
      </div>

      <div style={{ flex: 1 }} />
    </Shell>
  );
}
