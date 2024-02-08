import { X } from '@phosphor-icons/react';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import CartItems from './CartItems';

const ShopCart = () => {
  const context = useContext(UserContext);
  const { cartItems, handleRemoveItem, openNavbar, setOpenNavbar } = context!;

  const valueTotal = cartItems.reduce((acc, item) => item.price + acc, 0);
  const qtd = cartItems.reduce((acc) => 0 + acc, 0);

  return (
    <div
      className={`${
        openNavbar ? 'fixed' : 'hidden'
      } w-full max-w-96 h-screen top-0 right-0 z-30 bg-[#121212]`}
    >
      <div className="relative py-20 px-10 flex flex-col">
        <button
          onClick={() => setOpenNavbar(!openNavbar)}
          className="absolute top-6 right-6"
        >
          <X size={30} />
        </button>

        <h1 className="mb-4 text-lg font-semibold">Sacola de compras</h1>

        <div>
          <ul className="flex flex-col space-y-2">
            {cartItems.map((item, index) => (
              <li key={index}>
                <CartItems carts={item} handleRemoveItem={handleRemoveItem} />
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute -bottom-64 left-6 right-6 p-4 bg-[#121212] z-20">
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
    </div>
  );
};

export default ShopCart;
