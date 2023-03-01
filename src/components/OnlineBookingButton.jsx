import React from 'react'

import { Link } from 'react-router-dom'

import onlineBookingImage from "../images/online-booking.png"

const OnlineBookingButton = () => {
  return (
    <Link className={"right-bottom-button"} to="./online-booking">

      <div className="right-bottom-button__text">Онлайн запись</div>

      <img className='right-bottom-button__img' src={onlineBookingImage} alt="" />

    </Link>
  )
}

export default OnlineBookingButton