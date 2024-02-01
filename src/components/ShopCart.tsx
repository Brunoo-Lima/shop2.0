import { X } from '@phosphor-icons/react';
import { useState } from 'react';

const ShopCart = () => {
  const [openNavbar, setOpenNavbar] = useState(true);

  const handleClick = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div
      className={`${
        openNavbar ? 'fixed' : 'hidden'
      } w-full max-w-96 h-screen top-0 right-0 z-30 bg-[#121212]`}
    >
      <div className="relative py-20 px-10 flex flex-col">
        <button onClick={handleClick} className="absolute top-6 right-6">
          <X size={30} />
        </button>

        <h1 className="mb-4 text-lg font-semibold">Sacola de compras</h1>

        <div className="flex gap-4">
          <img
            src="../../public/shirt.svg"
            alt=""
            className="w-20 rounded-md"
          />

          <div className="space-y-2">
            <h2 className="text-gray-400 text-base">Produto</h2>
            <p className="text-base text-white font-semibold">R$ 79,90</p>
            <button className="text-emerald-500 text-base">Remover</button>
          </div>
        </div>

        <div className="absolute -bottom-64 left-6 right-6 p-4 bg-[#121212] z-20">
          <div className="flex justify-between">
            <p>Quantidade</p>
            <p>3 itens</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Valor total</p>
            <p className="text-lg font-semibold">R$ 270,00</p>
          </div>

          <button className="bg-emerald-600 py-2 rounded-md w-full">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
