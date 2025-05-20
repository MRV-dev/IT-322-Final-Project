import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/customer-ordering.css'
import {Link} from 'react-router-dom'

function Contact() {
  return(
    <>
      <div className="OnlineOrder">
        <div className="customer-nav">
          <img className='Logo' src={Logo}  />
          <ul className=''>
            <li className=''><Link to='/Home'>Home</Link></li>
            <li className=''><Link to='/Home'>Order Now</Link></li>
            <li className=''><Link to='/Home'>Contact Us</Link></li>
            
          </ul>
        </div>
        <div>
            <h2>GET IN TOUCH</h2>
        </div>
      </div>
    
    </>
  )
}

export default Contact 