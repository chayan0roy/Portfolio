import Data from "../../DATA"
import './Footer.css'

const Footer = () => {
	return (
		<footer className="container flex1">
			<div className='img'>
				<img src={Data.logo.footer_logo} alt='' />
			</div>
			<p>© 2022. All rights reserved by Chayan Roy.</p>
		</footer>
	)
}

export default Footer