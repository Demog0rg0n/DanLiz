import React from 'react'

import { useDispatch } from 'react-redux'

const AppSelect = ({options, id, label, handler, activeValue}) => {

	const [selectState, setSelectState] = React.useState(false)
	
	const dispatch = useDispatch()

  return (
    <div className='select'>

			<label htmlFor={id} className="input-title">{label}:</label>

			<div onClick={() => setSelectState(!selectState)} className="input-wrapper">
				<input type="text" id={id} name={id} className="select__input" value={options[activeValue]} disabled />
			</div>

			<ul className={`select__options ${selectState && "select__options_opened"}`}>
				{
					options.map((option, index) => (
						<li onClick={() => {
							dispatch(handler(index))
							setSelectState(false)
						}} 
						key={option} className='select__option'>{option}</li>  
					))
				}
			</ul>

    </div>
  )
}

export default AppSelect