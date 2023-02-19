import React from 'react'

import "../styles/footer.css"

import VK from "../images/social/VK.svg"
import telegram from "../images/social/telegram.svg"
import instagram from "../images/social/instagram.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__content container">
				
				<div className="emailAndPhone">
					<p>ivan.kot1331@gmail.com</p>
					<p>+7 977 555 58 38</p>
				</div>

				<div className="social-media">
					<a href="https://vk.com/club218827935">
						<img src={VK} alt="" />
					</a>
					<a href="https://vk.com/club218827935">
						<img src={telegram} alt="" />
					</a>
					<a href="https://vk.com/club218827935">
						<img src={instagram} alt="" />
					</a>
				</div>

			</div>
    </footer>
  )
}

export default Footer