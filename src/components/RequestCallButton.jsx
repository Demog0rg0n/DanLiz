import React from 'react'

import requestCallImg from "../images/request-call.png"

import { useDispatch } from 'react-redux'
import { openRequestCallPopup } from '../redux/slices/popupSlice'

export function removeScroll(selector) {
	const $popup = document.querySelector(selector)
	$popup.style.top = window.scrollY + "px"

	const $body = document.querySelector("body")
	$body.style.overflow = "hidden"
}

const RequestCall = ({text, imgSrc}) => {

  const dispatch = useDispatch()

  return (
    <div 
			onClick={() => {
				removeScroll(".popup-wrapper")
				dispatch(openRequestCallPopup())
			}} 
			className="right-bottom-button"
		>

			<div className="right-bottom-button__text">Заказать звонок</div>

			<img className='right-bottom-button__img' src={requestCallImg} alt="" />

    </div>
  )
}

export default RequestCall

