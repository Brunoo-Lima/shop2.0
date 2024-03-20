import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Card from './Card';
import { cards } from '../../data/products.json';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Cards = () => {
  return (
    <div className="py-16 container">
      <h1 className="text-title-color text-center text-3xl font-semibold mb-4">
        Escolha um produto
      </h1>

      <ul>
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
          className="pb-20 relative"
        >
          {cards.map((product) => (
            <SwiperSlide key={product.id} className="w-[400px] relative">
              <li className="flex flex-row justify-center">
                <Card product={product} />
              </li>
            </SwiperSlide>
          ))}

          <div className="relative -bottom-10 flex items-center justify-center slider-controler">
            <div className="flex items-center">
              <div className="transform md:translate-x-[-58%] translate-x-[-80%] -translate-y-1 cursor-pointer  swiper-button-prev">
                <CaretLeft
                  size={16}
                  className="size-8 bg-white hover:bg-slate-400 rounded-full"
                />
              </div>

              <div className="relative w-[15rem] -bottom-6 swiper-pagination"></div>

              <div className="transform md:translate-x-[58%] translate-x-[80%] -translate-y-1 cursor-pointer swiper-button-next">
                <CaretRight
                  size={16}
                  className="bg-white hover:bg-slate-400 rounded-full size-8"
                />
              </div>
            </div>
          </div>
        </Swiper>
      </ul>
    </div>
  );
};

export default Cards;
