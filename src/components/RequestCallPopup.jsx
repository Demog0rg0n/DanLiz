import React from 'react'

import "../styles/requestCallPopup.css"

import closePopupImg from "../images/close-popup.png"

import { useDispatch, useSelector } from 'react-redux'
import { closePopup } from '../redux/slices/requestCallPopupSlice'
import CustomCheckbox from './CustomCheckbox'
import CustomInput from './CustomInput'

const RequestCallPopup = () => {
	const popupState = useSelector(state => state.requestCallPopupSlice.popupState)
	const dispatch = useDispatch()
	function setScroll() {
		dispatch(closePopup())
		const $body = document.querySelector("body")
		$body.style.overflow = "initial"
	}
  return ( 
    <div className={`popup-wrapper ${popupState && "popup_opened"}`}>
		<div className="request-call-popup">
			<img onClick={() => setScroll()} className='close-popup-button' src={closePopupImg} alt="" />
			<h2 className="request-call-popup__title">Заказать звонок</h2>
			<form className='request-call-popup__form' action="#">
				<CustomInput value={"Ваше имя"} type={"text"} id={"name"} />
				<CustomInput value={"Номер телефона"} type={"tel"} id={"phoneNumber"} />
				<CustomCheckbox value={"Согласие на обработку персональных данных"} id={"personal-data-processing"}/>
				<CustomCheckbox value={"Согласие c политикой обработки персональных данных."} id={"personal-data-processing-policy"}/>
				<input className="form__submit" type="submit" value="Позвоните мне" />
			</form>
		</div>
    </div>
  )
}


export default RequestCallPopup