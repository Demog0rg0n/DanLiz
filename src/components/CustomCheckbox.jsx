import React from 'react'

const CustomCheckbox = ({id, value}) => {
  return (
    <div className="checkbox-input-wrapper">
			<input id={id} type="checkbox" />
			<label className="checkbox-label" htmlFor={id}></label>
			<span>{value}</span>
		</div>
  )
}

export default CustomCheckbox