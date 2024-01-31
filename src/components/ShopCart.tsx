import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

const ShopCart = () => {
  const context = useContext(UserContext);

  const { cards } = context!;
  return (
    <section className="py-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <img src={cards[0].imgUrl} alt="" width={696} height={656} />

        <div className="p-6 flex flex-col space-y-6">
          <h1 className="text-4xl font-semibold text-gray-400">
            {cards[0].product}
          </h1>
          <p className="text-emerald-500 font-semibold text-2xl">
            {cards[0].price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>

          <div className="flex-1 space-y-3">
            <p className="mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              similique eveniet rem nihil possimus et facere asperiores minus
              nulla sapiente? Consequatur vel iste possimus illo delectus
              laudantium soluta exercitationem repudiandae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              similique eveniet rem nihil possimus et facere asperiores minus
              nulla sapiente? Consequatur vel iste possimus illo delectus
              laudantium soluta exercitationem repudiandae.
            </p>
          </div>

          <button className="bg-emerald-700 p-3 w-full rounded-md text-base">
            Colocar na sacola
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopCart;
