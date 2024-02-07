import { Link, useParams } from 'react-router-dom';
import { Handbag } from '@phosphor-icons/react';
import { FormatCurrency } from './utilities/FormatCurrency';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

type CardProps = {
  id: number;
  imgUrl: string;
  product: string;
  price: number;
};

const Card = ({ id, imgUrl, product, price }: CardProps) => {
  const context = useContext(UserContext);

  const { handleOpenProduct, handleAddItem } = context!;

  const handleClick = () => {
    handleOpenProduct({
      id,
      imgUrl,
      product,
      price,
    });
  };

  return (
    <div
      className="w-[350px] h-[350px] relative rounded-md"
      style={{
        background: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <Link to={`/product/${id}`} onClick={handleClick}>
        <div className="absolute w-full bottom-0 p-1 z-10">
          <div className="bg-[#202020] flex justify-between rounded-md p-4">
            <div>
              <h1 className="text-white text-base font-semibold">{product}</h1>

              <p className="text-emerald-500 font-semibold text-lg">
                {FormatCurrency(price)}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <button
        className="bg-emerald-700 p-2 rounded-md absolute bottom-5 right-5 z-50"
        onClick={handleAddItem}
      >
        <Handbag size={30} />
      </button>
    </div>
  );
};

export default Card;
