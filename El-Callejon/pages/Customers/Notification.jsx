import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/Notification.css'
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

function Notification() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="account-container">
      <nav className="navbar">
          <img className="Logo-Admin" src={logo} />
        <ul className="nav-links">
          <li><Link to='/Customers-landingPage'><span className='link-text'>HOME</span></Link></li>
          <li><Link to='/Customers-OrderNow'><span className='link-text'>ORDER NOW</span></Link></li>
          <li><Link to='/Customers-Contact'><span className='link-text'>CONTACT US</span></Link></li>
          <li><FaBell className="icon" /></li>
          <li><FaUser className="icon" /></li>
        </ul>
      </nav>


      <div>
        <main className="account-settings">
          <h2>Account Settings</h2>
        </main>
      </div>
    </div>
  );
}

export default Notification
