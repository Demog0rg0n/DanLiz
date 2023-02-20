import React from 'react'

import "../styles/review.css"

import CustomInput from "../components/CustomInput"

const ReviewPage = () => {
  return (
    <main className='review-page'>
			<h1 className='page-title'>Отзывы</h1>
			<section className='review-page__section'>
				<div className="review-page__section__content container">
					<p className='review-foreword'>
						Уважаемые гости!<br/>
						Компания “7 КРАСОК” ставит перед своими сотрудниками цель – всегда соблюдать единые стандарты высококачественного сервиса. Если Вы недовольны работой отдельных сотрудников или работой компании – просим обращаться в Службу Поддержки "7 Красок".<br/>
						Телефон 8 (926) 77-96-777 с 9.00 до 20.00 часов без выходных или по e-mail: quality@7krasok.ru.<br/>
						Мы оперативно проведём внутреннюю проверку и обязательно отреагируем на Ваши критические замечания.<br/>
						С уважением,<br/>
						DanLiz<br/>
					</p>
					<div className="review-form__wrapper">
						<form className="review-form">

							<CustomInput id={"reviewName"} value={"Ваше имя"} type={"text"}/>
							<CustomInput id={"reviewPhoneNumber"} value={"Номер телефона"} type={"tel"}/>
							<CustomInput id={"reviewEmail"} value={"Почта"} type={"email"}/>
							<CustomInput id={"serviceName"} value={"Название услуги"} type={"text"}/>
							<CustomInput id={"masterName"} value={"Имя мастера"} type={"text"}/>

							<div className="input-wrapper textarea-wrapper">
								<textarea className='contact-input' id='reviewText' type="tel" name='reviewText' placeholder=' ' rows={10} />
								<label htmlFor="reviewText">Отзыв</label>
							</div>

							<input className='submitButton' type="submit" value="Оставить отзыв" />
	
						</form>
					</div>
				</div>
			</section>
    </main>
  )
}

export default ReviewPage