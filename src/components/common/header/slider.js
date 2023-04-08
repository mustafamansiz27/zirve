import React from 'react';
import "./slider.scss"
// import slides from "./slides.json"



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slides from "./slides.json"



// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";

const Slider = () => {
  return (
    <>
    <Swiper
     autoplay={{
      delay: 3000,
      disableOnInteraction: false,
  }}
      spaceBetween={30}
      effect={"fade"}
      Navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
      className="mySwiper"
    >

      {/* {
        slides.map((slide)=>{
          <SwiperSlide key={slide.id}>
        <img src={require(`../../../assets/img/slider/${slide.image}`)}   alt={slide.title}/>
          </SwiperSlide>
        })
      } */}
      <SwiperSlide className='sd'>
        <img src={require(`../../../assets/img/product/slider.jpg`)} />
      </SwiperSlide>
      
      <SwiperSlide className='sd'>
        <img src={require(`../../../assets/img/slider/sliders6.jpg`)} />
      </SwiperSlide>
      
      <SwiperSlide className='sd'>
        <img src={require(`../../../assets/img/slider/sliders6.jpg`)} />
      </SwiperSlide>
     
    </Swiper>
    </>
);
  
}

export default Slider
