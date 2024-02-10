import { X } from '@phosphor-icons/react';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';

const ShopCart = () => {
  const context = useContext(UserContext);
  const {
    cartItems,
    setCartItems,
    handleRemoveItem,
    openNavbar,
    setOpenNavbar,
  } = context!;
  const navigate = useNavigate();

  const valueTotal = cartItems.reduce((acc, item) => item.price + acc, 0);

  const qtd = cartItems.length;

  const handleClick = () => {
    if (cartItems.length == 0) {
      alert('Carrinho de compra vazio!');
    } else {
      navigate('/order/', { state: { qtd } });
      setCartItems([]);
    }
  };

  return (
    <div
      className={`${
        openNavbar ? 'fixed' : 'hidden'
      } w-full max-w-[25rem] h-screen top-0 right-0 z-30 bg-[#202024]`}
    >
      <div className="pt-20 px-10 flex flex-col h-full">
        <button
          onClick={() => setOpenNavbar(!openNavbar)}
          className="absolute top-5 right-6"
        >
          <X size={30} />
        </button>

        <h1 className="mb-4 text-lg font-semibold">Sacola de compras</h1>

        <div className="overflow-hidden flex-1">
          <ul className="flex flex-col h-full overflow-y-auto gap-y-2">
            {cartItems.length == 0 ? (
              <h1 className="text-base text-center mt-28">Carrinho vazio</h1>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <CartItems
                      carts={item}
                      handleRemoveItem={handleRemoveItem}
                    />
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>

        <div className="py-5 bg-[#202024] border-t border-t-gray-800">
          <div className="flex justify-between">
            <p className="text-base">Quantidade</p>
            <p className="text-base">{qtd} itens</p>
          </div>
          <div className="flex justify-between">
            <p className="text-base">Valor total</p>
            <p className="text-base font-semibold">
              {valueTotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <button
            className="bg-emerald-600 mt-4 py-2 rounded-md w-full"
            onClick={handleClick}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
