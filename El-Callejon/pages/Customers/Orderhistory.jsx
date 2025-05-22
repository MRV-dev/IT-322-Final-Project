import { Link, useLocation } from 'react-router-dom';
import '../Customers/customer-css/Orderhistory.css'
import Logo from '../assets/El_Calejon.jpg'
import Profile from '../assets/Profile.jpg'
import { FaBell, FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

function Orderhistory() {
    const location = useLocation();
  const pathname = location.pathname;

  const orders = [
    {
      id: '0013',
      method: 'Delivery',
      date: '2025-04-25',
      amount: '₽285.00',
      status: 'Completed'
    },
    {
      id: '0089',
      method: 'Reservation',
      date: '2025-04-15',
      amount: '₽220.00',
      status: 'Completed'
    }
  ];

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

      <div>
        <main className="account-settings">
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