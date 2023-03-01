import React from 'react'

import { useSelector } from 'react-redux'

import services from "../services.json"
import ServicesGroup from './ServicesGroup'
import ServicesPopup from './ServicesPopup'

const Services = () => {

	const activeServicePopup = useSelector(state => state.popupSlice.activeServicePopup)

  return (
		<>
		
			<ServicesPopup {...services[activeServicePopup]} serviceTypeIndex={activeServicePopup}/>
			
			<div className="services">
				{
					services.map((group, index) => (
						<ServicesGroup key={index} title={group.name} index={index} background={group.background}/>
					))
				}
			</div>

		</>
    
  )
}

export default Services