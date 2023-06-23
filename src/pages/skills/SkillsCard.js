import React from "react"

const Card = ({ title, year, persentage }) => {
	return (
		<div className='SkillsCard'>
			<div className="SkillBox">
				<h2>{title}</h2>
				<hr />
				<div className="d_flex ">
					<span className="year">{year}</span>
					<span className="skill_number">{persentage}</span>
				</div>
				<div className="skill_bar">
					<span className="skill_percentage" style={{ width: `${persentage}` }}></span>
				</div>
			</div>
		</div>
	)
}

export default Card
