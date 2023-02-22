import React from 'react'

import GroupItem from '../components/GroupItem'

import services from "../services.json"
import ServicesGroup from './ServicesGroup'

const Services = () => {
  return (
    <div className="services">
    {
			services.map((group, serviceTypeIndex) => (
				<ServicesGroup title={group.name}/>
			))
    }
</div>
  )
}

{/* <div className="services__group">
<h3 className='services__group__title'>{group.name}</h3>
<div className="services__group__items">
	{
		group.items.map((groupItem, serviceIndex) => (
				<GroupItem key={groupItem.name} {...groupItem} serviceIndex={serviceIndex} serviceTypeIndex={serviceTypeIndex}/>
		))
	}
</div>
</div> */}

export default Services