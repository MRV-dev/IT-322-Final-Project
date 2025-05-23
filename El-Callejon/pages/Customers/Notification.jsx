import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/Notification.css'
import { FaBell, FaUser} from 'react-icons/fa';

function Notification() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
 <div className="Account">
        <div className="customer-nav">
          <img className='Logo' src={Logo} alt="Logo" />
          <ul className='nav-bar'>
            <li><Link className='nav-link' to='/Customers-LandingPage'>
              <span className='link-text'>Home</span></Link></li>
            <li><Link className='nav-link' to='/Customers-OrderNow'>
              <span className='link-text'>Order Now</span></Link></li>
            <li><Link className='nav-link' to='/Customers-Contact'>
              <span className='link-text'>Contact Us</span></Link></li>
            <li className='icon-item'>
              <Link to='/Customers-Notification' className='Nav-link'><FaBell size={20} color="black" /></Link></li>
            <li className='icon-item'>
              <Link to='/Customers-Account' className='Nav-link'><FaUser size={20} color="black" /></Link></li>
          </ul>
        </div>


      <div>
        <main>
        </main>
      </div>
    </div>
  );
}

export default Notification
