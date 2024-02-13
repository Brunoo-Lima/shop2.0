import { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Card from './Card';
import { cards } from '../../data/products';

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="pt-16 overflow-hidden">
      <h1 className="text-title-color text-center text-3xl font-semibold mb-4">
        Escolha um produto
      </h1>

      <div className="relative">
        <ul
          className="flex flex-row gap-6 transition-transform"
          style={cardStyle}
        >
          {cards.map((product) => (
            <li key={product.id} className="flex items-center justify-center ">
              <Card product={product} />
            </li>
          ))}
        </ul>

        <button
          className={`absolute ${
            currentIndex === 0 ? 'hidden' : ''
          }   bg-base-color/50 left-0 top-[50%] -translate-x-0 translate-y-[-50%] w-20 h-full cursor-pointer`}
          onClick={prevSlide}
        >
          <CaretLeft
            size={30}
            className="absolute top-[50%] right-6 text-icon-color cursor-pointer"
          />
        </button>
        <button
          className={`absolute ${
            currentIndex === cards.length - 1 ? 'hidden' : ''
          } bg-base-color/50 right-0 top-[50%] -translate-x-0 translate-y-[-50%] w-20 h-full cursor-pointer`}
          onClick={nextSlide}
        >
          <CaretRight
            size={30}
            className="absolute top-[50%] left-6 text-icon-color cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default Cards;
