import Header from './Header.jsx';
import BottomNav from './BottomNav.jsx';
import CartDrawer from './CartDrawer.jsx';

export default function Shell({ active, extraPadding = 0, children }) {
  return (
    <div
      style={{
        background: '#F7F9FC',
        minHeight: '100vh',
        fontFamily: 'Inter,sans-serif',
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
  );
}
