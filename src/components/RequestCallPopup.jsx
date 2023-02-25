import React from 'react'

import "../styles/popup.css"

import closePopupImg from "../images/close-popup.png"

import { useDispatch, useSelector } from 'react-redux'
import { closeRequestCallPopup } from '../redux/slices/popupSlice'
import CustomCheckbox from './CustomCheckbox'
import CustomInput from './CustomInput'

export function setScroll() {
	const $body = document.querySelector("body")
	$body.style.overflow = "initial"
}

const RequestCallPopup = () => {

	const popupState = useSelector(state => state.popupSlice.requestCallPopupState)
	const dispatch = useDispatch()

  return ( 
    <div className={`popup-wrapper ${popupState && "popup_opened"}`}>
		<div className="request-call-popup">
			<img onClick={() => {
				setScroll()
				dispatch(closeRequestCallPopup())
			}} className='close-popup-button' src={closePopupImg} alt="" />
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