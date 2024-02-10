import { Handbag } from '@phosphor-icons/react';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const context = useContext(UserContext);

  const { openSidebar, setOpenSidebar, cartItems } = context!;

  const qtd = cartItems.length;

  return (
    <nav className="border-b border-elements-color py-4 px-16">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-title-color">
          Store
        </Link>

        <div className="relative">
          <button
            onClick={() => setOpenSidebar(!openSidebar)}
            type="button"
            className="bg-black/40 p-2 rounded-md"
          >
            <Handbag size={30} color="#8D8D99" />
          </button>

          <span className="text-white text-base bg-primary-color rounded-full py-[1px] px-[8px] absolute -top-2 -right-3">
            {qtd}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
