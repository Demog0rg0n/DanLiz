import React from 'react'

import "../styles/addressPage.css" 

import qr from "../images/qr.png"

const AddressPage = () => {
  return (
    <main className='address-page'>

        <h1 className="page-title">Адрес салона</h1>

        <section className='map-section'>
          <div className="map-section__content">

            <div className="map-body">
              <iframe 
                className='map'
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d71611.32792269214!2d37.57178879999999!3d55.8825472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1675611094398!5m2!1sru!2sru" 
                width="850" 
                height="700" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div className="info">

              <p>Адрес:<br/> г. Москва проспект Вернадского, 41с1 10-21</p>
              <p>График работы:<br/> с 9 утра до 9 вечера каждый день</p>

              <div className="contact-info">
                <h2 className="contact-info__title">Контакты</h2>
                <a href="https://taplink.cc/danliz?from=qr">
                  <img src={qr} alt="" className="contact-qr" />
                </a>
              </div>

            </div>
          </div> 
        </section>
    </main>
  )
}

export default AddressPage