import { X } from '@phosphor-icons/react';
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';
import { FormatCurrency } from '../utilities/FormatCurrency';
import { useSelector } from 'react-redux';
import {
  selectProductsCount,
  selectProductsTotalPrice,
} from '../../redux/cart/cart-selectors';
import { CartState } from '../../redux/cart/reducer';

type CartProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector(
    (state: { cartReducer: CartState }) => state.cartReducer,
  );

  const navigate = useNavigate();

  const handleClick = () => {
    if (products.length === 0) {
      alert('Carrinho vazio');
    } else {
      navigate('/order/');
    }
  };

  const handleClickCloseSidebar = () => {
    setIsVisible(false);
  };

  const productsCount = useSelector(selectProductsCount);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <div
      className={`${isVisible ? 'fixed' : 'hidden'}
      } w-full max-w-[25rem] h-screen top-0 right-0 z-30 bg-elements-color transition-transform duration-500`}
    >
      <div onClick={handleEscapeAreaClick} className="w-full" />
      <div className="pt-20 px-10 flex flex-col h-full">
        <button
          onClick={handleClickCloseSidebar}
          className="absolute top-6 right-6"
          type="button"
        >
          <X size={30} color="#8D8D99" />
        </button>

        <h1 className="mb-4 text-lg text-title-color font-semibold">
          Sacola de compras
        </h1>

        <div className="overflow-hidden flex-1">
          {products.length == 0 ? (
            <h1 className="text-base text-text-color text-center mt-28">
              Carrinho vazio
            </h1>
          ) : (
            <ul className="flex flex-col h-full overflow-y-auto gap-y-2">
              {products.map((product) => (
                <li key={product.id}>
                  <CartItems product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="py-5">
          <div className="flex justify-between">
            <p className="text-base text-title-color">Quantidade</p>
            <p className="text-base text-title-color">{productsCount} itens</p>
          </div>
          <div className="flex justify-between">
            <p className="text-base text-title-color">Valor total</p>
            <p className="text-base font-semibold text-title-color">
              {FormatCurrency(productsTotalPrice)}
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

export default Cart;
