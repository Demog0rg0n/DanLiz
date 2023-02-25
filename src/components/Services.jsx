import React from 'react'

import { useSelector } from 'react-redux'

import services from "../services.json"
import ServicesGroup from './ServicesGroup'
import ServicesPopup from './ServicesPopup'

const Services = () => {

	const activeServicePopup = useSelector(state => state.popupSlice.activeServicePopup)

  return (
		<>
		<ServicesPopup {...services[activeServicePopup]} />
			<div className="services">
				{
					services.map((group, index) => (
						<ServicesGroup title={group.name} items={group.items} index={index}/>
					))
				}
			</div>
		</>
    
  )
}

export default Services