import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/El_Calejon.jpg'
import Profile from '../assets/Profile.jpg'
import '../Customers/customer-css/Account.css'
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

function Account() {
  const location = useLocation();
  const pathname = location.pathname;

  const [formData, setFormData] = useState({
    name: 'Juan Dela Cruz',
    email: 'juandelacruz@gmail.com',
    address: 'Calaca City Batangas',
    phone: '091234567819',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

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

      <div className="account-wrapper">
        <aside className="sidebar">

          <div className="profile-pic">
            <img className="Profile" src={Profile} />
            <div className="photo-buttons">
              <button className="btn">Change Photo</button>
              <button className="btn remove">Remove</button>
            </div>
          </div>
          <ul className="sidebar-menu">
            <hr className='line'/>
            <li>
              <Link to="/Customers-Account"
                className={`nav ${pathname === '/Customers-Account' ? 'account-active' : ''}`}>
                <FaUser className='nav-icons'/>Account
              </Link>
            </li>
            <hr className='line'/>
            <li>
              <Link to="/Customers-Password"
                className={`nav ${pathname === '/Customers-Password' ? 'password-active' : ''}`}>
                <FaLock className='nav-icons' />Password
              </Link>
            </li>
            <hr className='line'/>
            <li>
              <Link to="/Customers-Orders"
                className={`nav ${pathname === '/Customers-Orders' ? 'orders-active' : ''}`}>
                <FaClock className='nav-icons'/>Orders
              </Link>
            </li>
            <hr className='line'/>
            <li>
              <Link to="/Customers-Orderhistory"
                className={`nav ${pathname === '/Customers-Orderhistory' ? 'orderhistory-active' : ''}`}>
                <FaClipboardList className='nav-icons'/>Order History
              </Link>
            </li>
            <hr className='line'/>
            <li>
              <Link to="/Customers-CustomerLogin"
                className={`nav ${pathname === '/Customers-CustomerLogin' ? 'customerlogin-active' : ''}`}>
                <FaSignOutAlt className='nav-icons'/>Logout
              </Link>
            </li>
            <hr className='line'/>
          </ul>
        </aside>
      </div>

      <div>
        <main className="account-settings">
          <h2>Account Settings</h2>

          {['name', 'email', 'address', 'phone'].map((field) => (
            <div className="form-group" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1).replace('phone', 'Phone Number')}</label>
              <input
                type="text"
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
              <button className="edit-btn">EDIT</button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Account
