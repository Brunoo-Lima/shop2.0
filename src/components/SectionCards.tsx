import { useContext, useState } from 'react';
import Card from './Card';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { UserContext } from '../UserContext';

const SectionCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const context = useContext(UserContext);

  const { cards } = context!;

  const prevSlide = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const nextSlide = () => {
    if (currentIndex < cards.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  const cardStyle = {
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(${-currentIndex * (70 / cards.length - 1)}%)`,
  };

  return (
    <div className="py-20 overflow-hidden">
      <h1 className="text-center text-3xl font-semibold mb-4">
        Escolha um produto
      </h1>

      <div className="relative">
        <ul
          className="flex flex-row gap-6 transition-transform"
          style={cardStyle}
        >
          {cards.map((card) => (
            <li key={card.id} className="flex items-center justify-center ">
              <Card
                id={card.id}
                imgUrl={card.imgUrl}
                product={card.product}
                price={card.price}
              />
            </li>
          ))}
        </ul>

        <button
          className={`absolute ${
            currentIndex === 0 ? 'hidden' : ''
          }   bg-black/50 left-0 top-[50%] -translate-x-0 translate-y-[-50%] w-20 h-full cursor-pointer`}
          onClick={prevSlide}
        >
          <CaretLeft
            size={30}
            className="absolute top-[50%] right-6 text-white cursor-pointer"
          />
        </button>
        <button
          className={`absolute ${
            currentIndex === cards.length - 1 ? 'hidden' : ''
          } bg-black/50 right-0 top-[50%] -translate-x-0 translate-y-[-50%] w-20 h-full cursor-pointer`}
          onClick={nextSlide}
        >
          <CaretRight
            size={30}
            className="absolute top-[50%] left-6 text-white cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default SectionCards;
