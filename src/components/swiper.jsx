import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';

const AdvancedSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default AdvancedSlider;
