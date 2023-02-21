import React from 'react'
import CustomCheckbox from './CustomCheckbox'
import CustomInput from './CustomInput'

const Consultation = () => {
  return (
    <section className='consultation'>
			<div className="consultation__content">
				
				<h2 className='consultation__form-title'>Заказать консультацию</h2>

				<form className="consultation__form">
					<div className="consultation__form__top">
						<CustomInput id={"consultationPhone"} type={"tel"} value={"Номер телефона"} additionalClass={"consultation-input"} />
						<CustomInput id={"consultationName"} type={"text"} value={"Имя"} additionalClass={"consultation-input"} />
						<input type="submit" className='consultation__submit-button' value={"Отправить заявку"}/>

					</div>
					<div className="consultation__form__bottom">
						<CustomCheckbox id={"consultation-personal-data-processing-policy"} value={"Согласие с политикой обработки персональных данных"}/>
						<CustomCheckbox id={"consultation-personal-data-processing"} value={"Согласие на обработку персональных данных"}/>
					</div>
				</form>

			</div>
    </section>
  )
}

export default Consultation