import "./Contact.css"
import Pageheading from "../../component/pageHeading/Pageheading"

const Contact = () => {

	return (
		<>
			<section className='Contact container' id='contact'>
				<Pageheading headingText={"Contact"} />
				<div className='content flex'>
					<div className="contactLeft">
						<div>
							<i class="fa-solid fa-location-dot"></i>
							<a href="https://www.google.com/maps/place/23%C2%B011'58.9%22N+88%C2%B052'45.7%22E/@23.1992619,88.8786183,19z/data=!4m13!1m8!3m7!1s0x39ff2e474e7cf3a1:0x21f4bacbcc0d1134!2sBagdah,+West+Bengal!3b1!8m2!3d23.21468!4d88.8862809!16s%2Fm%2F0ds6rvc!3m3!8m2!3d23.199704!4d88.879372?authuser=0&entry=ttu">Changa Battala, 92B Bangaon-Boyra Rd, Bagdah, West Bengal 743232</a>
						</div>
						<div>
							<i class="fa-solid fa-phone"></i>
							<a href="">7003103509</a>
						</div>
						<div>
							<i class="fa-solid fa-envelope"></i>
							<a href = "mailto: chayanroymail01@gmail.com">chayanroymail01@gmail.com</a>
						</div>
					</div>
					<div className="contactRight">
						<a href="https://www.facebook.com/chayan0roy/" target="_blank">
							<button className='btn'>
								<i class="fa-brands fa-facebook"></i>
							</button>
							Facebook
						</a>
						<a href="https://www.instagram.com/chayan0roy/" target="_blank">
							<button className='btn'>
								<i class='fa-brands fa-instagram'></i>
							</button>
							Instagram
						</a>
						<a href="https://www.linkedin.com/in/chayan0roy/" target="_blank">
							<button className='btn'>
								<i class='fa-brands fa-linkedin-in'></i>
							</button>
							Linkedin
						</a>
						<a href="https://github.com/chayan0roy/" target="_blank">
							<button className='btn'>
								<i class="fa-brands fa-github"></i>
							</button>
							Github
						</a>
						<a href="https://twitter.com/chayan0roy" target="_blank">
							<button className='btn'>
								<i class="fa-brands fa-twitter"></i>
							</button>
							Twitter
						</a>
					</div>
				</div>
			</section>
		</>
	)
}
export default Contact