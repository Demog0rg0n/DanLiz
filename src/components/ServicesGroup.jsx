import React from 'react'

const ServicesGroup = ({title}) => {
  return (
    <div className='services-group'>
			<img className='services-group__background' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/3c/a9/e8/diamond-clinic-main-foto.jpg?w=1200&h=1200&s=1" alt="" />
			<div className="services-group__content">
				<h2 className='services-group__title'>{title}</h2>
				<button className="services-group__button">Подробнее</button>
			</div>
    </div>
  )
}

export default ServicesGroup