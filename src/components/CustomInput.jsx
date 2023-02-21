import React from 'react'

const CustomInput = ({id, value, type, additionalClass}) => {
  return (
    <div className={`input-wrapper ${additionalClass? additionalClass: ""}`}>
			<input className='contact-input' id={id} type={type} name={id} placeholder=' ' />
			<label htmlFor={id}>{value}</label>
    </div>
  )
}

export default CustomInput