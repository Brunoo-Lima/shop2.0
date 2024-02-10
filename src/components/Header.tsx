import { Handbag } from '@phosphor-icons/react';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const context = useContext(UserContext);

  const { openSidebar, setOpenSidebar } = context!;

  return (
    <nav className="border-b border-elements-color py-6 px-16">
      <div className="flex justify-between">
        <Link to="/" className="text-2xl font-semibold text-title-color">
          Store
        </Link>

        <button onClick={() => setOpenSidebar(!openSidebar)} type="button">
          <Handbag size={30} color="#8D8D99" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
