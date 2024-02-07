import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { FormatCurrency } from './utilities/FormatCurrency';

const Product = () => {
  const context = useContext(UserContext);
  const { handleAddItem, dataProducts } = context!;

  return (
    <section className="py-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <img
          src={dataProducts?.imgUrl}
          alt="Imagem do produto"
          width={576}
          height={656}
        />

        <div className="p-8 flex flex-col">
          <h1 className="text-4xl font-semibold text-gray-400 mb-4">
            {dataProducts?.product}
          </h1>
          <p className="text-emerald-500 font-semibold text-2xl mb-6">
            {FormatCurrency(dataProducts?.price)}
          </p>

          <div className="flex-1 space-y-6 w-[520px] h-[174px]">
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

          <button
            onClick={handleAddItem}
            className="bg-emerald-700 hover:bg-emerald-700/75 py-4 w-full rounded-lg text-base cursor-pointer"
          >
            Colocar na sacola
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
