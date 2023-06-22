import React, { useState } from "react"

const PortfolioCard = ({ videos, title, description, link }) => {
	const [modal, setModal] = useState(false)

	const toggleModal = () => {
		setModal(!modal)
	}

	if (modal) {
		document.body.classList.add("active-modal")
	} else {
		document.body.classList.remove("active-modal")
	}

	return (
		<>
			<div className='box' onClick={toggleModal}>
				<div className='video'>
					<video autoPlay muted src={videos} className="projectVideo" />
				</div>
				<div className='title flex2'>
					<h2>{title}</h2>
					<h3 className="btn">Click to Visit</h3>
				</div>
			</div>

			{/* Popup box */}

			{modal && (
				<div className='modal'>
					<div onClick={toggleModal} className='overlay'></div>
					<div className='modal-content'>
						<video autoPlay muted src={videos} />
						<div className='modal-text'>
							<span>About Project</span>
							<h1>{title}</h1>
							<p>{description}</p>
							<a href={link} target='_blank' className="btn">Github</a>
							<button className='close-modal btn' onClick={toggleModal}>
								<i class='fas fa-times'></i>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default PortfolioCard
