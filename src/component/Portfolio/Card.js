import React, { useState } from "react"

const Card = ({videos, title, description, link}) => {
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
			<div className='box btn_shadow'  onClick={toggleModal}>
				<div className='video'>
					<video autoPlay muted src={videos} className="projectVideo"/>
				</div>
				<div className='title'>
					<h2>{title}</h2>
					<h3>Click to Visit</h3>
				</div>
			</div>

			{/* Popup box */}
			
			{modal && (
				<div className='modal'>
					<div onClick={toggleModal} className='overlay'></div>
					<div className='modal-content d_flex'>
						<div className='modal-img left'>
						<video autoPlay muted src={videos}/>
						</div>
						<div className='modal-text right'>
							<span>About Project</span>
							<h1>{title}</h1>
							<p>{description}</p>
							<div className="button f_flex mtop">
								<a href={link} target='_blank' className="btn_shadow githubBtn">Github</a>
							</div>
							<button className='close-modal btn_shadow' onClick={toggleModal}>
								<i class='fas fa-times'></i>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Card
