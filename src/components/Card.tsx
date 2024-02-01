import { Link } from 'react-router-dom';
import { Handbag } from '@phosphor-icons/react';

type CardProps = {
  id: number;
  imgUrl: string;
  product: string;
  price: number;
};

const Card = ({ id, imgUrl, product, price }: CardProps) => {
  const handleClick = () => {
    window.location.href = `/product/:${id}`;
  };

  return (
    <Link
      to={`/product/:${id}`}
      className="w-[350px] h-[350px] relative rounded-md"
      style={{
        background: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="absolute w-full bottom-0 p-1">
        <div className="bg-[#202020] flex justify-between rounded-md p-4">
          <div>
            <h1 className="text-white text-base font-semibold">{product}</h1>

            <p className="text-emerald-500 font-semibold text-lg">
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <button
            className="bg-emerald-700 p-2 rounded-md"
            onClick={handleClick}
          >
            <Handbag size={30} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
