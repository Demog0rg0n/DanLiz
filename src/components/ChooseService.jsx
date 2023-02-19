import React from 'react'

import AppSelect from '../components/AppSelect'

import { setActiveService, setActiveServiceType } from '../redux/slices/onlineBookingSlice'
import { useSelector } from 'react-redux'

import services from "../services.json"

const ChooseService = () => {

	const {activeServiceType, activeService} = useSelector(state => state.onlineBookingSlice)

  return (
    <div className='choose-service'>
      <AppSelect 
				options={services.map((item) => (item.name))} 
				id={"type-services"} 
				label={"ВЫБЕРИТЕ ТИП УСЛУГИ"} 
				handler={setActiveServiceType}
				activeValue={activeServiceType} 
			/>
      <AppSelect 
				options={services[activeServiceType].items.map((item) => (item.name))} 
				id={"services"} 
				label={"ВЫБЕРИТЕ УСЛУГУ"} 
				handler={setActiveService} 
				activeValue={activeService}
			/>
    </div>
  )
}

export default ChooseService