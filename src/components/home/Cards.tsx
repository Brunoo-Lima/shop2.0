import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Card from './Card';
import { cards } from '../../data/products.json';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Cards = () => {
  return (
    <div className="pt-16 container">
      <h1 className="text-title-color text-center text-3xl font-semibold mb-4">
        Escolha um produto
      </h1>

      <ul className="flex flex-row gap-6">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="h-[32rem] py-8 relative"
        >
          {cards.map((product) => (
            <SwiperSlide className="w-[37rem] relative">
              <li key={product.id} className="flex flex-row justify-center">
                <Card product={product} />
              </li>
            </SwiperSlide>
          ))}

          <div className="relative flex items-center justify-center slider-controler">
            <div className="md:left-[43%] left-[38%] transform md:translate-x-[-58%] translate-x-[-80%] bg-white p-6 rounded-full swiper-button-prev">
              <CaretLeft size={8} />
            </div>
            <div className="md:left-[53%] left-[50%] transform md:translate-x-[58%] translate-x-[80%] bg-white p-6 rounded-full swiper-button-next">
              <CaretRight size={8} />
            </div>

            <div className="relative w-[15rem] px-2 bottom-0 swiper-pagination"></div>
          </div>
        </Swiper>
      </ul>
    </div>
  );
};

export default Cards;
