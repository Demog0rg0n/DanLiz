import React from 'react'

import { Link } from 'react-router-dom'

const navElems = [
  {name: "Прайс", link: "./price"},
  {name: "Акции", link: "./promotion"},
  {name: "Наши мастера", link: "./our-masters"},
  {name: "Адрес", link: "./address"},
  {name: "Отзывы", link: "./reviews"},
]

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
      {
        navElems.map((navItem) => (
            <li key={navItem.name} className="navigation__list__element"><Link to={navItem.link}>{navItem.name}</Link></li>
        ))
      }
      </ul>
    </nav>
  )
}

export default Navigation