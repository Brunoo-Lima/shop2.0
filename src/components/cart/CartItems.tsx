import { Minus, Plus } from '@phosphor-icons/react';
import { useDispatch } from 'react-redux';
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '../../redux/cart/actions';
import { FormatCurrency } from '../utilities/FormatCurrency';

type CartItemProps = {
  product: {
    id: number;
    imgUrl: string;
    product: string;
    price: number;
    quantity: number;
  };
};

const CartItems = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleClickRemoveItem = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleClickIncrease = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleClickDecrease = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  return (
    <li className="flex gap-4 ">
      <img
        src={product.imgUrl}
        alt="Imagem do produto"
        className="rounded-md"
        width={80}
        height={80}
      />

      <div className="space-y-1 w-52">
        <h2 className="text-text-color text-base">{product.product}</h2>
        <p className="text-base text-title-color font-semibold">
          {FormatCurrency(product.price)}
        </p>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Minus
              size={16}
              color="#ffff"
              onClick={handleClickDecrease}
              className="cursor-pointer"
            />
            <p className="text-white">{product.quantity}</p>
            <Plus
              size={16}
              color="#ffff"
              onClick={handleClickIncrease}
              className="cursor-pointer"
            />
          </div>

          <button
            className="text-primary-color hover:text-light-color text-base transition duration-300"
            onClick={handleClickRemoveItem}
          >
            Remover
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
