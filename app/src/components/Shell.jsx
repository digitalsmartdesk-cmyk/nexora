import Header from './Header.jsx';
import BottomNav from './BottomNav.jsx';
import CartDrawer from './CartDrawer.jsx';

export default function Shell({ active, extraPadding = 0, children }) {
  return (
    <div
      style={{
        background: '#DDE3ED',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Inter,sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 430,
          background: '#F7F9FC',
          minHeight: '100vh',
          boxShadow: '0 0 40px rgba(11,31,75,0.12)',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: extraPadding,
        }}
      >
        <Header />
        {children}
        <BottomNav active={active} />
        <CartDrawer />
      </div>
    </div>
  );
}
