import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/landingpage.css'
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

function LandingPage() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="homepage-container">
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

      <section className="hero-section">
        <div className="hero-text">
          <p className="tagline">Satisfy your cravings</p>
          <h1>
            Feel the warmth.<br />
            Taste the flavor.<br />
            Lomi at your<br />
            doorstep.
          </h1>
          <button className="order-button">Order Now</button>
        </div>

        <div className="hero-image">
          <img src="/lomi-bowl.png" alt="Lomi Bowl" />
        </div>
      </section>
    </div>
  );
}  


export default LandingPage
