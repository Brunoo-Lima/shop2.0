import Bag from '../../assets/bag.svg';

type CardProps = {
  imgUrl: string;
  product: string;
  price: number;
};

const Card = ({ imgUrl, product, price }: CardProps) => {
  return (
    <div
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

          <button className="bg-emerald-700 p-2 rounded-md">
            <img
              src={Bag}
              alt="Icone da sacola"
              className="max-w-full w-8 block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
