import React from 'react'

import clock from "../images/clock.svg"
import closeImg from "../images/close-popup.png"

import { useDispatch, useSelector } from 'react-redux'
import { setActiveService, setActiveServiceType } from '../redux/slices/onlineBookingSlice'
import { closeServicePopup } from '../redux/slices/popupSlice'

import { Link } from 'react-router-dom'

import { setScroll } from './RequestCallPopup'

const ServicesPopup = ({name, items, serviceTypeIndex}) => {

	const popupState = useSelector(state => state.popupSlice.servicePopupState)
	const dispatch = useDispatch()

  return (
    <div className={`services-popup-wrapper ${popupState? "popup_opened": ""}`}>
			<div className="services-popup-body">
				<div className="services-popup-body__content">

					<h2 className="services-popup__title">{name}</h2>

					{
						items.map((item, serviceIndex) => (
							<div key={item.name} className="service-popup-item topAndBottomLines">

								<h3>{item.name}</h3>

								<p className="service-popup-item__description">Как часть медицины Древнего Китая рассматривается лечебный массаж. Он основан на взаимодействии рук массажиста и биологически активных точек на теле пациента. Мастер исходит из принципа, что каждый человек имеет запас жизненной энергии, которая под влиянием разнообразных факторов склонна истощаться.</p>
								
								<div className="service-popup-item__price">{item.price}р</div>

								<div className="service-popup-item__time">
									<img src={clock} alt="" />
									<span>{item.time}</span>
								</div>

								<Link 
									onClick={() => {
										setScroll()
										dispatch(setActiveService(serviceIndex))
										dispatch(setActiveServiceType(serviceTypeIndex))
										dispatch(closeServicePopup())
										window.scrollTo(0, 0)
									}}
									className='service-popup-item__button' to={"../online-booking"}>Записаться
								</Link>

							</div>
						))
					}

					<img 
						onClick={() => {
							dispatch(closeServicePopup())
							setScroll()
						}}
						className='close-popup-button' src={closeImg} alt="" 
					/>

				</div>
			</div>
			
    </div>
  )
}

export default ServicesPopup