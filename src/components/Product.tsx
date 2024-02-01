import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';
import { useParams } from 'react-router-dom';

const Product = () => {
  const context = useContext(UserContext);
  const { id } = useParams<{ id: string }>();
  const { cards } = context!;

  const IdProduct = id?.replace(':', ' ');
  console.log(IdProduct);

  const productId = id ? Number(IdProduct) : 0;

  if (isNaN(productId) || productId < 0 || productId >= cards.length) {
    // Lógica para lidar com um id inválido, por exemplo, redirecionar para uma página de erro
    // console.log(productId);
    return (
      <div>
        <p>Produto não encontrado </p>
      </div>
    );
  }

  return (
    <section className="py-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <img src={cards[productId].imgUrl} alt="" width={696} height={656} />

        <div className="p-8 flex flex-col">
          <h1 className="text-4xl font-semibold text-gray-400 mb-4">
            {cards[productId].product}
          </h1>
          <p className="text-emerald-500 font-semibold text-2xl mb-6">
            {cards[productId].price.toLocaleString('pt-BR', {
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

export default Product;
