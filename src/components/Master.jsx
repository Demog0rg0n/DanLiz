import React from 'react'
import { Autoplay, Mousewheel, Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Link } from 'react-router-dom'

const Master = ({sertificatesLinks}) => {
  return (
    <div to={"./"} className="master">

			<div className="master__info">
				<h2>Имя Фамилия</h2>
				
				<img className='master__photo' src="https://i.pinimg.com/originals/6a/34/11/6a3411a2988f07138cac790a0a04993f.jpg" alt="" />
				
				<Link className='custom-button' to={"../online-booking"}>Записаться</Link>
			</div>

			<div className="master-certificates">
				<h2>Сертификаты</h2>
				<Swiper
					className="swiper-sertificates"
					direction='horizontal'
					slidesPerView={1}
					modules={[Mousewheel, Autoplay, Navigation]}
					spaceBetween={20}
					loop={true}
					loopedSlides={1}
					centeredSlides={true}
					mousewheel
					autoplay = {{delay: 10000}}
				>
					{
						sertificatesLinks.map((sertificateLink) => (
							<SwiperSlide key={sertificateLink}>
								<div className="serificateImg__wrapper">
									<img className='serificateImg' src={sertificateLink} alt="" />
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>

		</div>
  )
}

export default Master