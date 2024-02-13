import { Handbag } from '@phosphor-icons/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProductsCount } from '../redux/cart/cart-selectors';
import { useState } from 'react';
import Cart from './cart/Cart';

const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const productsCount = useSelector(selectProductsCount);

  const handleClickOpenSidebar = () => {
    setCartIsVisible(true);
  };

  return (
    <nav className="border-b border-elements-color py-4 px-16">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-title-color">
          Store
        </Link>

        <div className="relative">
          <button
            onClick={handleClickOpenSidebar}
            type="button"
            className="bg-black/40 p-2 rounded-md"
          >
            <Handbag size={30} color="#8D8D99" />
          </button>

          <span className="text-white text-base bg-primary-color rounded-full py-[1px] px-[8px] absolute -top-2 -right-3">
            {productsCount}
          </span>
        </div>
      </div>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </nav>
  );
};

export default Header;
