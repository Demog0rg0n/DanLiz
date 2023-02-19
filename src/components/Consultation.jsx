import React from 'react'
import CustomCheckbox from './CustomCheckbox'
import CustomInput from './CustomInput'

const Consultation = () => {
  return (
    <section className='consultation'>
			<div className="consultation__content">
				<img src="https://static.tildacdn.com/tild3265-3338-4136-b734-363566653932/312Frame_63.png" alt="" />
				<form className="consultation__form">
					<h2 className='consultation__form-title'>Заказать консультацию</h2>
					<CustomInput id={"consultationName"} type={"text"} value={"Имя"}/>
					<CustomInput id={"consultationPhone"} type={"tel"} value={"Номер телефона"}/>
					<CustomCheckbox id={"consultation-personal-data-processing"} value={"Согласие на обработку персональных данных"}/>
					<CustomCheckbox id={"consultation-personal-data-processing-policy"} value={"Согласие с политикой обработки персональных данных"}/>
					<input type="submit" className='consultation__submit-button' value={"Отправить заявку"}/>
				</form>
			</div>
    </section>
  )
}

export default Consultation