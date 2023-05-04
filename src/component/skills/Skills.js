import React from "react"
import "./Skills.css"
import Pageheading from "../pageHeading/Pageheading"
import SkillsData from "./SkillsData"
import SkillsCard from "./SkillsCard"

const Skills = () => {
	return (
		<>
			<section className='Skills' id='skills'>
				<div className='container'>
					<Pageheading headingText={"Skills"}/>
					<div className='content'>
						{SkillsData.map((val, index) => {
							return <SkillsCard title={val.title} year={val.year} persentage={val.persentage} />
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Skills





{/* <div className='heading'>
							<h4>2020-2023</h4>
							<h1>My Skills</h1>
						</div> */}