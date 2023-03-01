import React from 'react'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

import img1 from "../images/interior-swiper-img/img1.jpg"
import img2 from "../images/interior-swiper-img/img2.jpg"
import img3 from "../images/interior-swiper-img/img3.jpg"
import img4 from "../images/interior-swiper-img/img4.jpg"
import img5 from "../images/interior-swiper-img/img5.jpg"
import img6 from "../images/interior-swiper-img/img6.jpg"
import img7 from "../images/interior-swiper-img/img7.jpg"

const imgArr = [img1, img2, img3, img4, img5, img6, img7]

const InteriorSwiper = () => {
  return (
    <Swiper
        className="interior-swiper"
        direction='horizontal'
        slidesPerView={"auto"}
        modules={[Autoplay]}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        loopedSlides={2}
        speed={5000}
        autoplay={{delay: 2000}}
        navigation={false}
        freeMode={true}
        allowTouchMove={false}
    >
        {
            imgArr.map((imgSrc) => (
                <SwiperSlide key={imgSrc}>
                    <div className="interior-swiper__slide__img-wrapper">
                        <img src={imgSrc} alt="" />
                    </div>
                </SwiperSlide>
            ))
        }

    </Swiper>
  )
}

export default InteriorSwiper