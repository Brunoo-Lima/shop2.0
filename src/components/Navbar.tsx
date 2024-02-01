import { Handbag } from '@phosphor-icons/react';
import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

const Navbar = () => {
  const context = useContext(UserContext);

  const { openNavbar, setOpenNavbar } = context!;

  return (
    <nav className="bg-[#181818] border-b border-slate-700 py-6 px-16">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Store</h1>

        <button onClick={() => setOpenNavbar(!openNavbar)}>
          <Handbag size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
