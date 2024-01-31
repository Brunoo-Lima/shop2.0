import SectionCards from './components/SectionCards';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCart from './components/ShopCart';

import { UserProvider } from './hooks/UserContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <main className="container px-8 mx-auto">
            <Routes>
              <Route path="/" element={<SectionCards />} />
              <Route path="/shop" element={<ShopCart />} />
            </Routes>
          </main>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
