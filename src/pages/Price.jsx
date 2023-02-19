import React from 'react'
import Services from '../components/Services'
import Subscriptions from '../components/Subscriptions'

import "../styles/price.css"

const Price = () => {
  return (
    <main className='price-page'>
			<section className='price-page__section'>

				<h1 className='page-title'>Прайс лист</h1>

				<div className="price-page__section__content container">
					<Subscriptions />
					<Services />
				</div>

			</section>
    </main>
  )
}

export default Price