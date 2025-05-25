import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/El_Calejon.jpg';
import Profile from '../assets/profile.jpg';
import '../Customers/customer-css/Password.css';
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt, FaEye, FaEyeSlash, FaCamera, FaTrash } from 'react-icons/fa';


function Password() {
      const location = useLocation();
      const pathname = location.pathname;

      const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      

      const [showCurrentPassword, setShowCurrentPassword] = useState(false);
      const [showNewPassword, setShowNewPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
          alert('New password and confirmation password do not match!');
          return;
        }
        console.log('Password change submitted:', formData);
        alert('Password changed successfully!');
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      };

        const togglePasswordVisibility = (setState) => {
        setState((prevState) => !prevState);
      };

  return (
    <div className="account-container">
            <div className="customer-nav">
              <img className='Logo' src={Logo} alt="Logo" />
              <ul className='nav-bar'>
                <li><Link className='nav-link' to='/Customers-LandingPage'>
                  <span className='link-text'>Home</span></Link></li>
                <li><Link className='nav-link' to='/Customers-OrderNow'>
                  <span className='link-text'>Order Now</span></Link></li>
                <li><Link className='nav-link' to='/Customers-Contact'>
                  <span className='link-text' to='/Customers-Contact'>Contact Us</span></Link></li>
                <li className='icon-item'>
                  <Link to='/Customers-Notification' className='nav-link'><FaBell size={20} color="black" /></Link></li>
                <li className='icon-item'>
                  <Link to='/Customers-Account' className='nav-link'><FaUser size={20} color="black" /></Link></li>
              </ul>
            </div>

      <div className="sidebar-setting">
        <aside className="sidebar">
          <div className="profile-pic">
            <img className="Profile" src={Profile} alt="Profile" />
            <div className="photo-buttons">
              <label className="btn change" htmlFor="photoUpload">
                <FaCamera style={{ marginRight: '5px' }} /> Change Photo
              </label>
              <input
                type="file"
                id="photoUpload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      document.querySelector('.Profile').src = reader.result;
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <button
                className="btn remove"
                onClick={() => {
                  document.querySelector('.Profile').src = Profile; // Revert to default profile
                }}
              >
                <FaTrash style={{ marginRight: '5px' }} /> Remove
              </button>
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

      <main className="password-setting">
        <h2>Change Password</h2>
        <div className="centered-form">
          <form onSubmit={handleSubmit} className="password-form">
            <div className="form-section">
              <h3>Current Password</h3>
              <div className="password-field">
                <div className="password-input-container">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    required
                  />
                  <span className="toggle-password" onClick={() => togglePasswordVisibility(setShowCurrentPassword)}>
                    {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3>New Password</h3>
              <div className="password-field">
                <div className="password-input-container">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                  />
                  <span className="toggle-password" onClick={() => togglePasswordVisibility(setShowNewPassword)}>
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3>Confirm Password</h3>
              <div className="password-field">
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <span className="toggle-password" onClick={() => togglePasswordVisibility(setShowConfirmPassword)}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="submit-container">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      </div>
    </div>
  );
}

export default Password;