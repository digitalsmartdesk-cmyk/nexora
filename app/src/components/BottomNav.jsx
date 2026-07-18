import { Link } from 'react-router-dom';

function icon(name, active) {
  const c = active ? '#1E6FE0' : '#8892A6';
  switch (name) {
    case 'home':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <path d="M9 22V12h6v10"></path>
        </svg>
      );
    case 'shop':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2l1.5 5h9L18 2"></path>
          <path d="M3 7h18l-1.5 12.5A2 2 0 0 1 17.5 21h-11a2 2 0 0 1-2-2L3 7z"></path>
        </svg>
      );
    case 'bundle':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="13" rx="2"></rect>
          <path d="M3 12h18"></path>
          <path d="M12 8v13"></path>
          <path d="M8 8V6a4 4 0 0 1 8 0v2"></path>
        </svg>
      );
    case 'track':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#25D366' : '#8892A6'}>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.82-.11-.42-.13-.95-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.23 1.38.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.32.07.11.07.65-.17 1.32z"></path>
        </svg>
      );
    default:
      return null;
  }
}

const TABS = [
  { key: 'home', label: 'Home', href: '/', internal: true },
  { key: 'shop', label: 'Shop', href: '/shop', internal: true },
  { key: 'bundle', label: 'Bundles', href: '/bundles', internal: true },
  { key: 'track', label: 'Track', href: '/track', internal: true },
  { key: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/919999999999', internal: false },
];

export default function BottomNav({ active = 'home' }) {
  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        zIndex: 40,
        width: '100%',
        background: '#FFFFFF',
        borderTop: '1px solid #E9EDF4',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        padding: '6px 4px 8px',
        boxShadow: '0 -2px 10px rgba(11,31,75,0.05)',
      }}
    >
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        const color = isActive ? '#1E6FE0' : '#8892A6';
        const style = {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          textDecoration: 'none',
          padding: '4px 2px',
          color,
        };
        const inner = (
          <>
            <span style={{ display: 'flex', width: 22, height: 22 }}>{icon(tab.key, isActive)}</span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10, fontWeight: isActive ? 700 : 500 }}>{tab.label}</span>
          </>
        );
        return tab.internal ? (
          <Link key={tab.key} to={tab.href} style={style}>
            {inner}
          </Link>
        ) : (
          <a key={tab.key} href={tab.href} target="_blank" rel="noreferrer" style={style}>
            {inner}
          </a>
        );
      })}
    </div>
  );
}
