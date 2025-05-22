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
            <img className="Profile" src={Profile} />
          </div>
          <ul className="sidebar-menu">
                        <hr className='line'/>
              <li> <Link to="/Customers-Account"
                className={`nav ${pathname === '/Customers-Account' ? 'account-active' : ''}`}>
                <FaUser className='nav-icons'/>Account</Link> </li>
                        <hr className='line'/>
              <li> <Link to="/Customers-Password"
                className={`nav ${pathname === '/Customers-Password' ? 'password-active' : ''}`}>
                <FaLock className='nav-icons' />Password</Link> </li>
                        <hr className='line'/>
              <li> <Link to="/Customers-Orders"
                className={`nav ${pathname === '/Customers-Orders' ? 'orders-active' : ''}`}>
                <FaClock className='nav-icons'/>Orders</Link> </li>
                        <hr className='line'/>
              <li> <Link to="/Customers-Orderhistory"
                className={`nav ${pathname === '/Customers-Orderhistory' ? 'orderhistory-active' : ''}`}>
                <FaClipboardList className='nav-icons'/>Order History</Link> </li>
                        <hr className='line'/>
              <li> <Link to="/Customers-CustomerLogin"
                className={`nav ${pathname === '/Customers-CustomerLogin' ? 'customerlogin-active' : ''}`}>
                <FaSignOutAlt className='nav-icons'/>Logout</Link> </li>
                        <hr className='line'/>
          </ul>
        </aside>
        </div>

        <main className="account-settings">
          <h2>Change Password</h2>
           <form onSubmit={handleSubmit} className="password-form">
            <div className="form-group">
              <h2>Current Password</h2>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <h2>New Password</h2>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <h2>Confirm Password</h2>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </main>
      </div>
  );
}

export default Password