import Data from "./DATA"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={Data.logo.footer_logo} alt='' />
          </div>
          <p>© 2021. All rights reserved by Chayan Roy.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer