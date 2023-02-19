import React from 'react'

import "../ymap"

const AddressPage = () => {
  return (
    <main className='address-page'>

        <h1 className="page-title">Адрес салона</h1>

        <section className='map-section'>
          <div className="map-section__content">
            <div className="map-body">
              <iframe 
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d71611.32792269214!2d37.57178879999999!3d55.8825472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1675611094398!5m2!1sru!2sru" 
                width="1000" 
                height="700" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div> 
        </section>
    </main>
  )
}

export default AddressPage