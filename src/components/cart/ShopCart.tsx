import { X } from '@phosphor-icons/react';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';
import { FormatCurrency } from '../utilities/FormatCurrency';

const ShopCart = () => {
  const context = useContext(UserContext);
  const {
    cartItems,
    setCartItems,
    handleRemoveItem,
    openSidebar,
    setOpenSidebar,
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
      alert('Compra realizada!');
    }
  };

  return (
    <div
      className={`${
        openSidebar ? 'fixed' : 'hidden'
      } w-full max-w-[25rem] h-screen top-0 right-0 z-30 bg-elements-color transition-transform duration-500`}
    >
      <div className="pt-20 px-10 flex flex-col h-full">
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="absolute top-6 right-6"
          type="button"
        >
          <X size={30} color="#8D8D99" />
        </button>

        <h1 className="mb-4 text-lg text-title-color font-semibold">
          Sacola de compras
        </h1>

        <div className="overflow-hidden flex-1">
          <ul className="flex flex-col h-full overflow-y-auto gap-y-2">
            {cartItems.length == 0 ? (
              <h1 className="text-base text-text-color text-center mt-28">
                Carrinho vazio
              </h1>
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

        <div className="py-5">
          <div className="flex justify-between">
            <p className="text-base text-title-color">Quantidade</p>
            <p className="text-base text-title-color">{qtd} itens</p>
          </div>
          <div className="flex justify-between">
            <p className="text-base text-title-color">Valor total</p>
            <p className="text-base font-semibold text-title-color">
              {FormatCurrency(valueTotal)}
            </p>
          </div>

          <button
            className="bg-primary-color hover:bg-light-color mt-4 py-2 rounded-md w-full transition duration-300"
            onClick={handleClick}
          >
            <p className="text-white font-semibold text-base">
              Finalizar compra
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
