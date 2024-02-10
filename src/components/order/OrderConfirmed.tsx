import { Link, useLocation } from 'react-router-dom';

const OrderConfirmed = () => {
  const location = useLocation();
  const { qtd } = location.state;

  return (
    <section className="px-10">
      <div className="flex items-center justify-center flex-col h-[80vh]">
        <h1 className="font-bold text-3xl text-center mb-8">
          Compra efetuada!
        </h1>

        <p className="font-normal text-2xl text-center mb-20">
          Uhuul, {qtd == 1 ? `${qtd} camiseta` : `${qtd} camisetas`} está a
          caminho da sua casa.
        </p>

        <Link
          to="/"
          className="font-bold text-xl text-emerald-500 hover:underline text-center"
        >
          Voltar ao catálogo
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirmed;
