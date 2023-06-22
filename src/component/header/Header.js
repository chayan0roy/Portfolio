import React, { useState } from "react"
import "./Header.css"
import Data from "../../DATA"

const Header = () => {

	window.addEventListener("scroll", function () {
		const header = document.querySelector(".header")
		header.classList.toggle("active", window.scrollY > 100)
	})

	const [Mobile, setMobile] = useState(false)
	return (
		<header className='header flex3'>
			<img src={Data.logo.header_logo} alt='' />

			<div className='navlink flex2'>
				<ul className={Mobile ? "nav-links-mobile" : "link flex"} onClick={() => setMobile(false)}>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#portfolio'>Portfolio</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
					<li>
						<a href={Data.CV} download className='btn'>DOWNLOAD CV</a>
					</li>
				</ul>
				<button className='toggle' onClick={() => setMobile(!Mobile)}>
					{Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
				</button>
			</div>
		</header>
	)
}

export default Header
