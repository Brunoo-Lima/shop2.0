import { useContext } from 'react';
import { FormatCurrency } from './utilities/FormatCurrency';
import { UserContext } from '../UserContext';

type CartItemProps = {
  id: number;
  imgUrl: string;
  product: string;
  price: number;
  handleRemoveItem: (id: number) => void;
};

const CartItems = ({
  id,
  imgUrl,
  product,
  price,
  handleRemoveItem,
}: CartItemProps) => {
  const context = useContext(UserContext);
  const { dataProducts } = context!;

  return (
    <li className="flex gap-4">
      <img src={imgUrl} alt="" className="w-24 rounded-md" />

      <div className="space-y-2">
        <h2 className="text-gray-400 text-base">{product}</h2>
        <p className="text-base text-white font-semibold">
          {FormatCurrency(price)}
        </p>
        <button
          className="text-emerald-500 text-base"
          onClick={() => handleRemoveItem(id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
};

export default CartItems;
