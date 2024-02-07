import { useContext } from 'react';
import { FormatCurrency } from './utilities/FormatCurrency';
import { UserContext } from '../UserContext';

type CartItemProps = {
  handleRemoveItem: () => void;
};

const CartItems = ({ handleRemoveItem }: CartItemProps) => {
  const context = useContext(UserContext);
  const { dataProducts } = context!;

  return (
    <div className="flex gap-4">
      <img src={dataProducts?.imgUrl} alt="" className="w-24 rounded-md" />

      <div className="space-y-2">
        <h2 className="text-gray-400 text-base">{dataProducts?.product}</h2>
        <p className="text-base text-white font-semibold">
          {FormatCurrency(dataProducts?.price)}
        </p>
        <button
          className="text-emerald-500 text-base"
          onClick={handleRemoveItem}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartItems;
