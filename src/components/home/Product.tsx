import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { FormatCurrency } from '../utilities/FormatCurrency';

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
          <h1 className="text-4xl font-semibold text-title-color mb-4">
            {dataProducts?.product}
          </h1>
          <p className="text-primary-color font-semibold text-2xl mb-6">
            {FormatCurrency(dataProducts!.price)}
          </p>

          <div className="flex-1 space-y-6 w-[520px] h-[174px]">
            <p className="mb-6 text-text-color">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              similique eveniet rem nihil possimus et facere asperiores minus
              nulla sapiente? Consequatur vel iste possimus illo delectus
              laudantium soluta exercitationem repudiandae.
            </p>
            <p className="text-text-color">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              similique eveniet rem nihil possimus et facere asperiores minus
              nulla sapiente? Consequatur vel iste possimus illo delectus
              laudantium soluta exercitationem repudiandae.
            </p>
          </div>

          <button
            onClick={() => handleAddItem(dataProducts!)}
            className="bg-primary-color hover:bg-light-color py-4 w-full rounded-lg text-base cursor-pointer transition duration-300"
          >
            <p className="text-white font-semibold">Colocar na sacola</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
