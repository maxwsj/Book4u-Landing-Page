import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import classes from './Carousel.module.css';

import carrouselImg1 from '../../assets/CarrouselImages/carrousel-img-1.png';
import carrouselImg2 from '../../assets/CarrouselImages/carrousel-img-2.png';
import carrouselImg3 from '../../assets/CarrouselImages/carrousel-img-3.png';

const Carousel = () => {
   return (
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         // autoplay={{
         //    delay: 2500,
         //    disableOnInteraction: false,
         // }}
         pagination={{
            clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className={`${classes['swiper__bullets-color']} ${classes.swiper__container} `}
      >
         <SwiperSlide>
            <img src={carrouselImg1} alt='' />
         </SwiperSlide>
         <SwiperSlide>
            <img src={carrouselImg2} alt='' />
         </SwiperSlide>
         <SwiperSlide>
            <img src={carrouselImg3} alt='' />
         </SwiperSlide>
      </Swiper>
   );
};

export default Carousel;
