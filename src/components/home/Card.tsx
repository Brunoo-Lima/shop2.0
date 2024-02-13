import { Link } from 'react-router-dom';
import { Handbag } from '@phosphor-icons/react';
import { FormatCurrency } from '../utilities/FormatCurrency';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/cart/actions';
import { selectProduct } from '../../redux/product/actions';

type CardProps = {
  product: { id: number; imgUrl: string; product: string; price: number };
};

const Card = ({ product }: CardProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectProduct(product.id));
  };

  const handleClickAddProductToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div
      className="w-[350px] h-[350px] relative rounded-md"
      style={{
        background: `url(${product.imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <Link to={`/product/${product.id}`} onClick={handleClick}>
        <div className="absolute w-full bottom-0 p-1 z-10">
          <div className="bg-elements-color flex justify-between rounded-md p-4">
            <div>
              <h1 className="text-title-color text-base font-semibold">
                {product.product}
              </h1>

              <p className="text-primary-color font-semibold text-lg">
                {FormatCurrency(product.price)}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <button
        className="bg-primary-color hover:bg-light-color p-2 rounded-lg absolute bottom-5 right-5 z-50 transition duration-300"
        onClick={handleClickAddProductToCart}
      >
        <Handbag size={30} color="#ffffff" />
      </button>
    </div>
  );
};

export default Card;
