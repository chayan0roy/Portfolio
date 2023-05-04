import React from "react"
import "./Home.css"
import Data from "../DATA"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
	return (
		<>
			<section className='home' id='home'>
				<div className='container f_flex'>
					<div className='left top'>
						<h3>WELCOME TO MY WORLD</h3>
						<h1>
							Hi, I'm <span>Chayan Roy</span>
						</h1>
						<h2>
							a
							<span>
								<Typewriter words={[" Web Developer.", " Web Designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
							</span>
						</h2>

						<div className='home_btn d_flex'>
							<div className='col_1'>
								<h4>FIND WITH ME</h4>
								<div className='button'>
									<a href="https://www.facebook.com/chayan0roy/" target="_blank">
										<button className='btn_shadow'>
										<i class="fa-brands fa-facebook"></i>
										</button>
									</a>
									<a href="https://www.instagram.com/chayan0roy/" target="_blank">
										<button className='btn_shadow'>
											<i class='fa-brands fa-instagram'></i>
										</button>
									</a>
									<a href="https://www.linkedin.com/in/chayan0roy/" target="_blank">
										<button className='btn_shadow'>
											<i class='fa-brands fa-linkedin-in'></i>
										</button>
									</a>
									<a href="https://github.com/chayan0roy/" target="_blank">
										<button className='btn_shadow'>
										<i class="fa-brands fa-github"></i>
										</button>
									</a>
									<a href="https://twitter.com/chayan0roy" target="_blank">
										<button className='btn_shadow'>
										<i class="fa-brands fa-twitter"></i>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<div className='right_img'>
							<img src={Data.photo.myPhoto} alt='' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
