import React from 'react'

import logoSrc from "../images/logo2.png"

import Navigation from './Navigation'
import NavigationMenu from './NavigationMenu'

import "../styles/header.css"

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__content">

        <Link to={"/"} className="logo">
          <img src={logoSrc} alt="" />
        </Link>

        <a href='tel:+79775555838' className="phone-number">+7 977 555 58 38</a>

        <Navigation />
        
        <NavigationMenu />

      </div>
    </header>
  )
}

export default Header