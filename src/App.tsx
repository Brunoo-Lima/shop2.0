import Cards from './components/home/Cards';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/home/Product';
import OrderConfirmed from './components/order/OrderConfirmed';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container px-8 mx-auto">
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/order/" element={<OrderConfirmed />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
