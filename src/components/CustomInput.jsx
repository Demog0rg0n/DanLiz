import React from 'react'

const CustomInput = ({id, value, type}) => {
  return (
    <div className="input-wrapper">
			<input className='contact-input' id={id} type={type} name={id} placeholder=' ' />
			<label htmlFor={id}>{value}</label>
    </div>
  )
}

export default CustomInput