import React from 'react'

import "../styles/contactPage.css" 

import VK from "../images/social/VK.svg"
import telegram from "../images/social/telegram.svg"
import instagram from "../images/social/instagram.svg"

const ContactPage = () => {
  return (
    <main className='contact-page'>
      
      <h1 className="page-title">Контактная информация</h1>
      <section className='map-section'>
        <div className="map-section__content">
        
          <div className="contact-info topAndBottomLines">
            <div className="contact-info__left">
              <p>Номер телефона:<br/> +7 977 555 58 38</p>
              <p>Почта:<br/>ivan.kot1331@gmail.com</p>
              <p>Адрес:<br/> г. Москва проспект Вернадского, 41с1 10-21</p>
              <p>График работы:<br/> с 9 утра до 9 вечера каждый день</p>
            </div>

            <div className="contact-info__right">
              <a href="https://vk.com/club218827935">
                <img src={VK} alt="" />
              </a>
              <a href="https://vk.com/club218827935">
                <img src={instagram} alt="" />
              </a>
              <a href="https://vk.com/club218827935">
                <img src={telegram} alt="" />
              </a>
            </div>
          </div>
        

          <div className="map-body">
            <iframe 
              className='map'
              title='map'
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d71611.32792269214!2d37.57178879999999!3d55.8825472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1675611094398!5m2!1sru!2sru" 
              width="1000" 
              height="700" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>


        </div> 
      </section>
    </main>
  )
}

export default ContactPage