import React from 'react'
import { useDispatch } from 'react-redux'

import requestCallImg from "../images/request-call.png"
import { openPopup } from '../redux/slices/requestCallPopupSlice'

const RequestCall = ({text, imgSrc}) => {

  const dispatch = useDispatch()

	function removeScroll() {
		dispatch(openPopup())

		const $popup = document.querySelector(".popup-wrapper")
		$popup.style.top = window.scrollY + "px"

		const $body = document.querySelector("body")
		$body.style.overflow = "hidden"

	}

  return (
    <div onClick={() => removeScroll()} className="right-bottom-button">
		<div className="right-bottom-button__text">Заказать звонок</div>
		<img className='right-bottom-button__img' src={requestCallImg} alt="" />
    </div>
  )
}

export default RequestCall

