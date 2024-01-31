import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

const ShopCart = () => {
  const context = useContext(UserContext);

  const { cards } = context!;
  return (
    <section className="py-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <img src={cards[0].imgUrl} alt="" width={696} height={656} />

        <div className="p-8 flex flex-col">
          <h1 className="text-4xl font-semibold text-gray-400 mb-4">
            {cards[0].product}
          </h1>
          <p className="text-emerald-500 font-semibold text-2xl mb-6">
            {cards[0].price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>

          <div className="flex-1 space-y-6">
            <p className="mb-6 text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              similique eveniet rem nihil possimus et facere asperiores minus
              nulla sapiente? Consequatur vel iste possimus illo delectus
              laudantium soluta exercitationem repudiandae.
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              similique eveniet rem nihil possimus et facere asperiores minus
              nulla sapiente? Consequatur vel iste possimus illo delectus
              laudantium soluta exercitationem repudiandae.
            </p>
          </div>

          <button className="bg-emerald-700 hover:bg-emerald-700/75 py-4 w-full rounded-md text-base cursor-pointer">
            Colocar na sacola
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopCart;
