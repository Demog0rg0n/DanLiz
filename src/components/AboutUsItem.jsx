import React from 'react'

const AboutUsItem = ({paragraphs, imgSrc}) => {
  return (
		<div className="main-page__item-wrapper">
			<div className='main-page__item'>

				<img className='section-info__item__img' src={imgSrc} alt="" />
				
				<div className='section-info__item__description'>
					{
						paragraphs.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))
					}
				</div>

			</div>
		</div>
		
  )
}

export default AboutUsItem