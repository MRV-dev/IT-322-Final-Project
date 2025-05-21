import logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/Contact.css'
import {Link} from 'react-router-dom'
import { FaBell, FaUser} from 'react-icons/fa';

function Contact() {
  return(
    <>
      <div className="Contact">
      <nav className="navbar">
          <img className="Logo-Admin" src={logo} />
        <ul className="nav-links">
          <li><Link to='/Customers-LandingPage'><span className='link-text'>HOME</span></Link></li>
          <li><Link to='/Customers-OrderNow'><span className='link-text'>ORDER NOW</span></Link></li>
          <li><Link to='/Customers-Contact'><span className='link-text'>CONTACT US</span></Link></li>
          <li><Link to='/Customers-Notification'><FaBell  className="icon" /></Link></li>
          <li><Link to='/Customers-Account'><FaUser className="icon" /></Link></li>
        </ul>
      </nav>
        <div>
            <h2>GET IN TOUCH</h2>
        </div>
      </div>
    
    </>
  )
}

export default Contact 