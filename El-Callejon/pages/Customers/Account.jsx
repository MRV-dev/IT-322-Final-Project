import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/El_Calejon.jpg';
import Profile from '../assets/profile.jpg';
import '../Customers/customer-css/Account.css';
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt, FaCamera, FaTrash } from 'react-icons/fa';

function Account() {
  const location = useLocation();
  const pathname = location.pathname;

  const [formData, setFormData] = useState({
    name: 'Juan Dela Cruz',
    email: 'juandelacruz@gmail.com',
    address: 'Calaca City Batangas',
    phone: '091234567819',
  });

  const [editingField, setEditingField] = useState(null);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const handleSave = () => {
    setEditingField(null);
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

        <main className="account-setting">
          <h2>Account Settings</h2>
          <div className="account-info-container">
            {['name', 'email', 'address', 'phone'].map((field) => (
              <div className="info-row" key={field}>
                <div className="info-label">
                  {field === 'phone' ? 'Phone Number' : field.charAt(0).toUpperCase() + field.slice(1)}
                </div>
                <div className="info-value-container">
                  {editingField === field ? (
                    <input
                      type="text"
                      className="info-input"
                      value={formData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      autoFocus
                    />
                  ) : (
                    <div className="info-value">{formData[field]}</div>
                  )}
                  {editingField === field ? (
                    <button className="save-btn" onClick={handleSave}>
                      SAVE
                    </button>
                  ) : (
                    <button className="edit-btn" onClick={() => handleEdit(field)}>
                      EDIT
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Account