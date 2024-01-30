import Card from './cards/Card';

type SectionCardsProps = {
  id: number;
  imgUrl: string;
  product: string;
  price: number;
};

const cards: SectionCardsProps[] = [
  {
    id: 1,
    imgUrl: '../shirt.svg',
    product: 'Camisa Beyond the Limits',
    price: 79.9,
  },
  {
    id: 2,
    imgUrl: '../shirt2.svg',
    product: 'Camisa Beyond the Limits',
    price: 90.0,
  },
  {
    id: 3,
    imgUrl: '../shirt2.svg',
    product: 'Camisa Beyond the Limits',
    price: 90.0,
  },
  {
    id: 4,
    imgUrl: '../shirt.svg',
    product: 'Camisa Beyond the Limits',
    price: 90.0,
  },
];

const SectionCards = () => {
  return (
    <div className="py-20 overflow-hidden px-4">
      <h1 className="text-center text-3xl font-semibold mb-4">
        Escolha um produto
      </h1>

      <ul className="flex flex-row overflow-x-scroll gap-4 ">
        {cards.map((card) => (
          <li key={card.id}>
            <Card
              imgUrl={card.imgUrl}
              product={card.product}
              price={card.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionCards;
