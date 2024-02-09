import { X } from '@phosphor-icons/react';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import CartItems from './CartItems';

const ShopCart = () => {
  const context = useContext(UserContext);
  const { cartItems, handleRemoveItem, openNavbar, setOpenNavbar } = context!;

  const valueTotal = cartItems.reduce((acc, item) => item.price + acc, 0);

  const qtd = cartItems.length;

  return (
    <div
      className={`${
        openNavbar ? 'fixed' : 'hidden'
      } w-full max-w-96 h-screen top-0 right-0 z-30 bg-[#121212]`}
    >
      <div className="py-20 px-10 flex flex-col">
        <button
          onClick={() => setOpenNavbar(!openNavbar)}
          className="absolute top-6 right-6"
        >
          <X size={30} />
        </button>

        <h1 className="mb-4 text-lg font-semibold">Sacola de compras</h1>

        <ul className="flex flex-col max-h-[65vh] overflow-y-auto gap-y-4">
          {cartItems.map((item, index) => (
            <li key={index}>
              <CartItems carts={item} handleRemoveItem={handleRemoveItem} />
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute left-0 right-0 bottom-0 py-10 px-10 bg-[#121212] border-t border-t-gray-800">
        <div className="flex justify-between">
          <p>Quantidade</p>
          <p>{qtd} itens</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">Valor total</p>
          <p className="text-lg font-semibold">
            {valueTotal.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>

        <button className="bg-emerald-600 mt-4 py-2 rounded-md w-full">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default ShopCart;
