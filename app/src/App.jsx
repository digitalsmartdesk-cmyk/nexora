import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext.jsx';
import Homepage from './pages/Homepage.jsx';
import Product from './pages/Product.jsx';
import Collection from './pages/Collection.jsx';
import Bundles from './pages/Bundles.jsx';
import TrackOrder from './pages/TrackOrder.jsx';

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter basename="/nexora">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shop" element={<Collection />} />
          <Route path="/shop/:collectionId" element={<Collection />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/track" element={<TrackOrder />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}
