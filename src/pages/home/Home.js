import React from "react"
import "./Home.css"
import Data from "../../DATA"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
	return (
		<section className='home flex' id='home'>
			<div className='left'>
				<h3>WELCOME TO MY PORTFOLIO</h3>
				<h1>
					Hi, I'm <span>Chayan Roy</span>
				</h1>
				<h2>
					a
					<span>
						<Typewriter words={[" Web Developer.", " Web Designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
					</span>
				</h2>

				<div className='home_SocialBtn_area'>
					<h4>FIND WITH ME</h4>
					<div className='button'>
						<a href="https://www.facebook.com/chayan0roy/" target="_blank">
							<button className='btn'>
								<i class="fa-brands fa-facebook"></i>
							</button>
						</a>
						<a href="https://www.instagram.com/chayan0roy/" target="_blank">
							<button className='btn'>
								<i class='fa-brands fa-instagram'></i>
							</button>
						</a>
						<a href="https://www.linkedin.com/in/chayan0roy/" target="_blank">
							<button className='btn'>
								<i class='fa-brands fa-linkedin-in'></i>
							</button>
						</a>
						<a href="https://github.com/chayan0roy/" target="_blank">
							<button className='btn'>
								<i class="fa-brands fa-github"></i>
							</button>
						</a>
						<a href="https://twitter.com/chayan0roy" target="_blank">
							<button className='btn'>
								<i class="fa-brands fa-twitter"></i>
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className='right flex'>
				<img src={Data.photo.myPhoto} alt='' />
			</div>
		</section>
	)
}

export default Home
