import SectionCards from './components/home/SectionCards';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/home/Product';

import { UserProvider } from './UserContext';
import ShopCart from './components/cart/ShopCart';
import OrderConfirmed from './components/order/orderConfirmed';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <main className="container px-8 mx-auto">
            <Routes>
              <Route path="/" element={<SectionCards />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/order/" element={<OrderConfirmed />} />
            </Routes>
            <ShopCart />
          </main>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
