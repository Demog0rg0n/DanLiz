import React from 'react'

const Master = ({sertificatesLinks}) => {
	const [activeSertificate, setActiveSertificate] = React.useState(0)
  return (
    <div to={"./"} className="master">
			<div className="master__info">
				<img className='master__photo' src="https://i.pinimg.com/originals/6a/34/11/6a3411a2988f07138cac790a0a04993f.jpg" alt="" />
				<h2>Имя Фамилия</h2>
			</div>
			<div className="master-certificates">
				<div className="active-sertificate">
					<img src={sertificatesLinks[activeSertificate]} alt="" />
				</div>
				<ul className="master__certificates__nav">
					{
						sertificatesLinks.map((src, index) => (
							<li>
								<img onClick={() => setActiveSertificate(index)} src={src} alt="" />
							</li>
						))
					}
				</ul>
			</div>
		</div>
  )
}

export default Master