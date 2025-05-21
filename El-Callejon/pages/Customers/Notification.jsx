import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/Notification.css'
import { FaBell, FaUser} from 'react-icons/fa';

function Notification() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="account-container">
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
        <main>
          <h2></h2>
        </main>
      </div>
    </div>
  );
}

export default Notification
