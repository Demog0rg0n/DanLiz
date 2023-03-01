import React from 'react'

import { Autoplay, Mousewheel, Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

const Subscriptions = () => {
  return (
    <div className='subscriptions-wrapper'>
			<h2 className="subscriptions-wrapper__title">Абонементы</h2>
			<Swiper
				className="subscriptions-swiper"
				direction='horizontal'
				slidesPerView={"auto"}
				modules={[Mousewheel, Autoplay, Navigation]}
				spaceBetween={20}
				loop={true}
				loopedSlides={2}
				centeredSlides={true}
				mousewheel
				autoplay = {{delay: 10000}}
			>
				{
					[...new Array(10)].map((index) => (
						<SwiperSlide key={index}>
							<div className="subscriptions-swiper__slide"></div>
						</SwiperSlide>
					))
				}
			</Swiper>
    </div>
  )
}

export default Subscriptions