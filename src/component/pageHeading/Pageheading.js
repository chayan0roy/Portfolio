import './Pageheading.css'

export default function Pageheading({headingText}) {
  return (
    <div className='pageHeading'>
        <h1 class="pageHeadingBackground">{headingText}</h1>
		<h1 class="pageHeadingFront">{headingText}</h1>
    </div>
  )
}