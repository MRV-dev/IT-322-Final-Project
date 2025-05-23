import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/El_Calejon.jpg'
import Profile from '../assets/Profile.jpg'
import '../Customers/customer-css/Password.css'
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';


function Password() {
  const location = useLocation();
  const pathname = location.pathname;

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password change logic here
    console.log('Password change submitted:', formData);
    alert('Password changed successfully!');
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
        <main className="password">
          <h2>Change Password</h2>
           <form onSubmit={handleSubmit} className="password-form">
              <h2>Current Password</h2>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
              <h2>New Password</h2>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
              <h2>Confirm Password</h2>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </main>
      </div>
      /</div>
  );
}

export default Password