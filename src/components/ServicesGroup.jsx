import React from 'react'
import { useDispatch } from 'react-redux'

import { openServicePopup } from '../redux/slices/popupSlice'
import { removeScroll } from './RequestCallButton'

const ServicesGroup = ({title, index, background}) => {

	const dispatch = useDispatch()

  return (
    <div className='services-group'>

			<img className='services-group__background' src={background} alt="" />

			<div className="services-group__content">
				<h2 className='services-group__title'>{title}</h2>
				<button 
					className="services-group__button"
					onClick={() => {
						dispatch(openServicePopup(index))
						removeScroll(".services-popup-wrapper")
					}}>Подробнее
				</button>
			</div>

    </div>
  )
}

export default ServicesGroup