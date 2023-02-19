import React from 'react'
import AboutUsItem from '../components/AboutUsItem'

import "../styles/mainPage.css"

import info from "../info.json"

import logo from "../images/logo.png"

const MainPage = () => {
  return (
	<main className='main-page'>
		<section className='main-page__section-top'>
			<div className="main-page__section-top__img__wrapper">
				<img className='main-page__section-top__img' src="https://shtory-deco.ru/wp-content/uploads/f/d/0/fd050bacbd3df2b980e29f145bc468c7.jpeg" alt="" />
				<div className="main-page__section-top__img__gradient-left"></div>
				<div className="main-page__section-top__img__gradient-right"></div>
			</div>
			<img src={logo} alt="" className="main-page__section-top__logo" />
		</section>
		<section className='main-page__section-info'>
			<div className="main-page__section__content container">
				{
					info.map((infoItem) => (
						<AboutUsItem imgSrc={infoItem.imgSrc} paragraphs={infoItem.paragraphs} />
					))
				}
			</div>
		</section>
	</main>
  )
}

export default MainPage