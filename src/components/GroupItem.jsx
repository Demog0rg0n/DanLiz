import React from 'react'

import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { setActiveService, setActiveServiceType } from '../redux/slices/onlineBookingSlice'

const GroupItem = ({price, name, time, description, serviceTypeIndex, serviceIndex}) => {

  const dispatch = useDispatch()

  return (
    <div className='services__group__item'>
      <h4 className='services__group__item__title'>{name}</h4>
      <p className='services__group__item__description'>Секреты традиционной восточной медицины пробрались во все уголки мира. Методики поражают своей эффективностью и пригодны для профилактики и лечения широкого спектра заболеваний. Китайский массаж удачно сочетает целый комплекс техник, поэтому подход к пациенту сугубо индивидуален и дает наиболее благоприятный результат.</p>
      <div className='services__group__item__time'>
        <img src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/clock-time-ticker-times-hour-256.png" alt="" />
        <span>{time}мин.</span>
      </div>
      <div className="services__group__item__bottom">
        <Link onClick={() => {
            dispatch(setActiveService(serviceIndex))
            dispatch(setActiveServiceType(serviceTypeIndex))
          }} 
          className='services__group__item__button'  
          to={"../online-booking"}>Онлайн запись
        </Link>
		    <div className='services__group__item__price'>{price}р.</div>
      </div>
    </div>
  )
}

export default GroupItem