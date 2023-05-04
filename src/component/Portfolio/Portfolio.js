import "./Portfolio.css"
import Pageheading from "../pageHeading/Pageheading"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
        <Pageheading headingText={"Portfolio"}/>
          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} videos={value.videos} title={value.title} description={value.description} link={value.link} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
