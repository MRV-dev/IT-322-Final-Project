
import { Link } from 'react-router-dom';
import Logo from '../assets/El_Calejon.jpg';
import '../Customers/customer-css/Notification.css';
import { FaBell, FaUser, FaTrash } from 'react-icons/fa';
import { useState } from 'react';


function Notification() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Your order 00227 is in process! You may now come to our shop.",
      date: "30m.",
      isNew: true
    },
    {
      id: 2,
      message: "Your order 00227 has been confirmed.",
      date: "35m.",
      isNew: true
    },
    {
      id: 3,
      message: "Your order 00227 has been placed.",
      date: "2025-04-25",
      isNew: false
    },
    {
      id: 4,
      message: "Your order 00113 has been completed.",
      date: "2025-04-15",
      isNew: false
    },
    {
      id: 5,
      message: "Your order 00113 has been confirmed.",
      date: "2025-04-15",
      isNew: false
    },
    {
      id: 6,
      message: "Your order 00113 has been placed.",
      date: "2025-04-15",
      isNew: false
    }
  ]);

  const handleClearAll = () => {
    setNotifications([]); 
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      isNew: false
    })));
  };

  return (
    <div className="account-container">
      <nav className='customer-navbar'>
        <img className='El-Callejon-Logo' src={Logo} />
          <ul className='customer-navigations'>
            <li><Link className='Nav-link' to='/Home'>
              <span className='Link-text'>Home</span></Link>
            </li>
            
            <li><Link className='Nav-link' to='/OrderNow'>
              <span className='Link-text'>Order Now</span></Link>
            </li>
            
            <li><Link className='Nav-link' to='/Contact'>
              <span className='Link-text'>Contact Us</span></Link>
            </li>
            
                        
            <li className='icon-item'>
              <Link to='/Customers-Notification' className='Nav-link'>
                <FaBell className='bell' color="black" />
              </Link>
            </li>
            
            <li className='icon-item'>
              <Link to='/Customers-Account' className='Nav-link'>
                <FaUser className='User-icon' color="black" />
              </Link>
            </li>
          </ul>
      </nav>

      <div className="notification-container">
        <div className="notification-header">
          <h2>Notifications</h2>
          <div className="notification-actions">
            <button className="action-btn" onClick={handleClearAll}>
              <FaTrash /> Clear All
            </button>
          </div>
        </div>
        
        <div className="notifications-list">
          {notifications.length === 0 ? (
            <div className="empty-notifications">
              <p>No notifications to display</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.isNew ? 'new' : ''}`}
              >
                <div className="notification-content">
                  <p className="notification-message">{notification.message}</p>
                  <p className="notification-date">{notification.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notification