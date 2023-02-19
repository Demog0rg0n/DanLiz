import React from 'react'

import "../styles/review.css"

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

							<div className="input-wrapper">
								<input className='contact-input' id='reviewName' type="text" name='reviewName' placeholder=' ' />
								<label htmlFor="reviewName">Ваше имя</label>
							</div>

							<div className="input-wrapper">
								<input className='contact-input' id='reviewPhoneNumber' type="tel" name='reviewPhoneNumber' placeholder=' ' />
								<label htmlFor="reviewPhoneNumber">Номер телефона</label>
							</div>
							
							<div className="input-wrapper">
								<input className='contact-input' id='email' type="email" name='email' placeholder=' ' />
								<label htmlFor="email">Почта</label>
							</div>

							<div className="input-wrapper">
								<input className='contact-input' id='serviceName' type="tel" name='serviceName' placeholder=' ' />
								<label htmlFor="serviceName">Название услуги</label>
							</div>

							<div className="input-wrapper">
								<input className='contact-input' id='telephone' type="tel" name='telephone' placeholder=' ' />
								<label htmlFor="telephone">Имя мастера</label>
							</div>

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