import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/landingpage.css'
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

function LandingPage() {
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
