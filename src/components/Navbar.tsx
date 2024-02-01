import { Handbag, X } from '@phosphor-icons/react';
import { useState } from 'react';

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleClick = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <nav className="bg-[#181818] border-b border-slate-700 py-6 px-16">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Store</h1>

        <button onClick={handleClick}>
          <Handbag size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
