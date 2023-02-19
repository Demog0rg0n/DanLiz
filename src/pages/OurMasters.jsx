import React from 'react'

import Master from '../components/Master'

import "../styles/ourMastersPage.css"

const OurMasters = () => {
	const sertificatesLinks1 = [
		'http://centermassage.ru/ssl/u/10/113648224411e99ea4c1656e89db83/-/sert_universal.jpg',
		'https://www.carpe-diem.kz/images/sertifikati/pucheglazova/EPSON008.jpg',
		'https://static.tildacdn.com/tild3430-3737-4731-b035-633737396437/6.jpg',
	]
  return (
    <main className="our-masters-page">
			<section className="our-masters__section">
				<div className="our-masters__section__content container">
					<h1 className="page-title">Наши мастера</h1>
					<div className="masters">
						<Master sertificatesLinks={sertificatesLinks1}/>
						<Master sertificatesLinks={sertificatesLinks1}/>
					</div>
				</div>
			</section>
    </main>
  )
}

export default OurMasters