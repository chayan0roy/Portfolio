import "./Portfolio.css"
import Pageheading from "../../component/pageHeading/Pageheading"
import PortfolioCard from "./PortfolioCard"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
	return (
		<section className='Portfolio container' id='portfolio'>
			<Pageheading headingText={"Portfolio"} />
			<div className='content flex2'>
				{Portfolio_data.map((value, index) => {
					return <PortfolioCard key={index} videos={value.videos} title={value.title} description={value.description} link={value.link} />
				})}
			</div>
		</section >
	)
}

export default Portfolio
