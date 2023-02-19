import React from 'react'

import "../styles/onlineBooking.css"

import Datepicker from '../components/Datepicker'
import ChooseService from '../components/ChooseService'
import CustomInput from '../components/CustomInput'

const OnlineBooking = () => {
  return (
    <main className='online-booking'>
      <section className='online-booking__section'>
        <div className="online-booking__section__content  container">

          <h1 className='page-title'>Онлайн запись</h1>

          <form className='online-booking__form' action="#">
            <ChooseService />
            <Datepicker />
            <div className="contacts">
              <CustomInput id={"onlineBookingName"} value={"Ваше имя"} type={"text"}/>
              <CustomInput id={"onlineBookingpPhoneNumber"} value={"Номер телефона"} type={"tel"}/>
            </div>
            <input className='submitButton' type="submit" value="Записаться" />
          </form>

        </div>
      </section>
    </main>
  )
}

export default OnlineBooking