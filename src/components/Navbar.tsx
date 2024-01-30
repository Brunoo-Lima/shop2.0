import Bag from '../assets/bag.svg';

const Navbar = () => {
  return (
    <nav className="bg-[#181818] border-b border-slate-700 py-6 px-16">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Store</h1>

        <button>
          <img
            src={Bag}
            alt="Icone de sacola"
            className="w-8 block max-w-full"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
