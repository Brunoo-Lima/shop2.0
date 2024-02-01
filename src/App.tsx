import SectionCards from './components/SectionCards';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product';

import { UserProvider } from './hooks/UserContext';
import ShopCart from './components/ShopCart';

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
            </Routes>
            <ShopCart />
          </main>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
