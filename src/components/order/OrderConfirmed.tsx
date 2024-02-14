import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProductsCount } from '../../redux/cart/cart-selectors';

const OrderConfirmed = () => {
  const productCount = useSelector(selectProductsCount);

  return (
    <section className="px-10">
      <div className="flex items-center justify-center flex-col h-[80vh]">
        <h1 className="font-bold text-3xl text-center text-title-color mb-8">
          Compra efetuada!
        </h1>

        <p className="font-normal text-2xl text-center text-text-color mb-20">
          Uhuul,
          <span className="font-semibold text-white">
            {productCount == 1
              ? `${productCount} camiseta `
              : `${productCount} camisetas `}
          </span>
          está a caminho da sua casa.
        </p>

        <Link
          to="/"
          className="font-bold text-xl text-primary-color hover:text-light-color text-center transition duration-300"
        >
          Voltar ao catálogo
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirmed;
