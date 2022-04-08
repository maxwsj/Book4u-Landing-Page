import React from 'react';
import classes from '../AppCarousel/AppCarousel.module.css';

import celularLoginImg from '../../../assets/AppCarouselImgs/CelularLogin.png';
import appDadosLivrosImg from '../../../assets/AppCarouselImgs/AppDadosLivros.png';
import appHomeImg from '../../../assets/AppCarouselImgs/AppHome.png';
import perfilUsuarioInternoImg from '../../../assets/AppCarouselImgs/PerfilUsuarioInterno.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const AppCarousel = () => {
   return (
      <Swiper
         slidesPerView={1}
         // spaceBetween={30}
         centeredSlides={true}
         centeredSlidesBounds={true}
         // autoplay={{
         //    delay: 2500,
         //    disableOnInteraction: false,
         // }}
         loop={true}
         pagination={{
            clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className={`${classes.swiper__bullet} ${classes['swiper__slide']} ${classes['.swiper__bulletPosition']}`}
      >
         <SwiperSlide>
            <img src={celularLoginImg} alt='' />
         </SwiperSlide>
         <SwiperSlide>
            <img src={perfilUsuarioInternoImg} alt='' />
         </SwiperSlide>
         <SwiperSlide>
            <img src={appHomeImg} alt='' />
         </SwiperSlide>
         <SwiperSlide>
            <img src={appDadosLivrosImg} alt='' />
         </SwiperSlide>
      </Swiper>
   );
};

export default AppCarousel;
