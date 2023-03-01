import React from 'react'

import "../styles/contactPage.css"

import VK from "../images/social/VK.svg"
import telegram from "../images/social/telegram.svg"
import instagram from "../images/social/instagram.svg"

const ContactPage = () => {

  // для избежания повторного вызова useEffect в режиме разработчика
  let mapHasInited = false

  React.useEffect(() => {
    if (!mapHasInited) {
      // eslint-disable-next-line no-undef
      ymaps.ready(mapInit);
      mapHasInited = true
    }
    function mapInit() {
      // eslint-disable-next-line no-undef
      let myMap = new ymaps.Map('map', {
        center: [55.67410271, 37.50458485],
        zoom: 17,
      });
    
      // eslint-disable-next-line no-undef
      var myPlacemark = new ymaps.Placemark(
        [55.67410271, 37.50458485],
        {
          balloonContent: `
            <h3>Контент</h3>
          `,
        },
        {},
      );
      myMap.geoObjects.add(myPlacemark);
    }
    
    
  }, [])

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
              <p>График работы:<br/>Ежедневно с 10 до 9 </p>
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
        
          <div id="map" style={{width: 1000, height: 700}}>

          </div>


        </div> 
      </section>
    </main>
  )
}

export default ContactPage