import { Link, useLocation } from 'react-router-dom';
import '../Customers/customer-css/Orderhistory.css'
import Logo from '../assets/El_Calejon.jpg'
import Profile from '../assets/Profile.jpg'
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt, FaCamera, FaTrash} from 'react-icons/fa';

function Orderhistory() {
    const location = useLocation();
  const pathname = location.pathname;

  const orders = [
    {
      id: '00142',
      method: 'Pickup',
      date: '2025-04-25',
      amount: '₽255.00',
      status: 'Completed'
    },
    {
      id: '00111',
      method: 'Reservation',
      date: '2025-04-15',
      amount: '₽350.00',
      status: 'Completed'
    }
  ];

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

        <main className="orderhistory-setting">
          <h2>Order History</h2>
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Method</th>
                <th>Order Placed</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.method}</td>
                  <td>{order.date}</td>
                  <td>{order.amount}</td>
                  <td className="status-completed">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
        </div>
  );
}

export default Orderhistory