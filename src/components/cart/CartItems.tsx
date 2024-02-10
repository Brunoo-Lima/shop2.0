import { FormatCurrency } from '../utilities/FormatCurrency';

type CartItemProps = {
  carts: {
    id: number;
    imgUrl: string;
    product: string;
    price: number;
  };
  handleRemoveItem: (id: number) => void;
};

const CartItems = ({ carts, handleRemoveItem }: CartItemProps) => {
  return (
    <li className="flex gap-4">
      <img
        src={carts.imgUrl}
        alt="Imagem do produto"
        className="rounded-md"
        width={80}
        height={80}
      />

      <div className="space-y-1">
        <h2 className="text-text-color text-base">{carts.product}</h2>
        <p className="text-base text-title-color font-semibold">
          {FormatCurrency(carts.price)}
        </p>
        <button
          className="text-primary-color hover:text-light-color text-base transition duration-300"
          onClick={() => handleRemoveItem(carts.id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
};

export default CartItems;
