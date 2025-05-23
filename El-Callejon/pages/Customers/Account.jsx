import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/El_Calejon.jpg';
import Profile from '../assets/Profile.jpg';
import '../Customers/customer-css/Account.css';
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

    <div className="account-container">
      <nav className="account-navbar">
        <img className="Logo-Admin" src={logo} />
        <ul className='Nav-bar'>
            <li><Link className='Nav-link' to='/Home'>
              <span className='link-text'>Home</span></Link>
            </li>

            <li><Link className='Nav-link' to='/OrderNow'>
              <span className='link-text'>Order Now</span></Link>
            </li>

            <li><Link className='Nav-link' to='/Contact'>
              <span className='link-text'>Contact Us</span></Link>
            </li>

           
            <li className='icon-item'>
              <Link to='/Customers-Notification' className='Nav-link'>
                <FaBell size={26} color="black" />
              </Link>
            </li>

          
            <li className='icon-item'>
              <Link to='/Customers-Account' className='Nav-link'>
                <FaUser size={28} color="black" />
              </Link>
            </li>

          </ul>
      </nav>

      <div className="account-wrapper">
        <aside className="sidebar">
          <div className="profile-pic">
            <img className="Profile" src={Profile} alt="Profile" />
            <div className="photo-buttons">
              <button className="btn">Change Photo</button>
              <button className="btn remove">Remove</button>
            </div>
          </div>
          
        <ul className="sidebar-menu">
            <li className={pathname === '/Customers-Account' ? 'active' : ''}>
              <Link to="/Customers-Account">
                <div className="menu-item"><FaUser size={20} color="black" /><span>Account</span></div></Link>
            </li>
            <li className={pathname === '/Customers-Password' ? 'active' : ''}>
              <Link to="/Customers-Password"><div className="menu-item"><FaLock size={20} color="black" /><span>Password</span></div></Link>
            </li>
            <li className={pathname === '/Customers-Orders' ? 'active' : ''}>
              <Link to="/Customers-Orders"><div className="menu-item"><FaClock size={20} color="black" /><span>Orders</span></div></Link>
            </li>
            <li className={pathname === '/Customers-Orderhistory' ? 'active' : ''}>
              <Link to="/Customers-Orderhistory"><div className="menu-item"><FaClipboardList size={20} color="black" /><span>Order History</span></div></Link>
            </li>
            <li className={pathname === '/Customers-CustomerLogin' ? 'active' : ''}>
              <Link to="/Customers-CustomerLogin"><div className="menu-item"><FaSignOutAlt size={20} color="black" /><span>Logout</span></div></Link>
            </li>
          </ul>
        </aside>


        <main className="account">

      <div className='customer-account'>
        <main className="account-settings">

          <h2>Account Settings</h2>
          {['name', 'email', 'address', 'phone'].map((field) => (
            <div className="form-group" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1).replace('phone', 'Phone Number')}</label>
              <input
                type="text"
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)} />
              <button className="edit-btn">EDIT</button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Account;