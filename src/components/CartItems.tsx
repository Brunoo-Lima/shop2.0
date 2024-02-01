type CartItemProps = {
  imgUrl: string;
  price: number;
  product: string;
  handleRemoveItem: () => void;
};

const CartItems = ({
  imgUrl,
  price,
  product,
  handleRemoveItem,
}: CartItemProps) => {
  return (
    <div className="flex gap-4">
      <img src={imgUrl} alt="" className="w-24 rounded-md" />

      <div className="space-y-2">
        <h2 className="text-gray-400 text-base">{product}</h2>
        <p className="text-base text-white font-semibold">{price}</p>
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
