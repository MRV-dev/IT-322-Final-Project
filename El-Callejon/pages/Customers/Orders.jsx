import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/El_Calejon.jpg'
import Profile from '../assets/Profile.jpg'
import '../Customers/customer-css/Orders.css';
import { FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt, FaBell, FaEye, FaFileAlt, FaTimes } from 'react-icons/fa';

function Orders() {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

    const location = useLocation();
    const pathname = location.pathname;

  const orders = [
    { id: '00230', method: 'Reservation', status: 'Pending' },
    { id: '00227', method: 'Delivery', status: 'Confirmed' },
  ];

  const orderDetails = {
    '00230': [
      { name: 'Spaghetti - Medium', price: 750 },
      { name: 'Palabok - Medium', price: 750 },
      { name: 'Leche Flan', price: 105 }
    ],
    '00227': [
      { name: 'Burger - Large', price: 550 },
      { name: 'Sundae', price: 100 }
    ]
  };

  const openViewModal = (orderId) => {
    setSelectedOrder({ id: orderId, items: orderDetails[orderId] });
    setShowViewModal(true);
  };

  const openTrackModal = () => {
    setShowTrackModal(true);
  };

  const closeModals = () => {
    setShowViewModal(false);
    setShowTrackModal(false);
    setSelectedOrder(null);
  };

  const getTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);

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
        <main className="order">
          <h2>Orders</h2>
          <table className="table table-bordered bg-white">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Order Method</th>
                <th>Order Status</th>
                <th>Track Order</th>
                <th>View Order</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.method}</td>
                  <td>{order.status}</td>
                  <td>
                    <FaEye style={{ cursor: 'pointer' }} onClick={openTrackModal} />
                  </td>
                  <td>
                    <FaFileAlt
                      style={{ cursor: 'pointer' }}
                      onClick={() => openViewModal(order.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        {/* View Order Modal */}
        {showViewModal && selectedOrder && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">View Order</h4>
                <FaTimes style={{ cursor: 'pointer' }} onClick={closeModals} />
              </div>
              <ul className="list-unstyled">
                {selectedOrder.items.map((item, index) => (
                  <li key={index} className="d-flex justify-content-between">
                    <span>1 {item.name}</span>
                    <span>₱{item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-end fw-bold mt-3">
                Total: ₱{getTotal(selectedOrder.items).toFixed(2)}
              </div>
              <div className="d-flex gap-3 mt-3">
                <div>
                  <label className="form-label">Date to deliver:</label>
                  <input type="date" className="form-control" defaultValue="2025-05-20" />
                </div>
                <div>
                  <label className="form-label">Time to deliver:</label>
                  <input type="time" className="form-control" defaultValue="16:30" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Track Order Modal */}
        {showTrackModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">Track Order</h4>
                <FaTimes style={{ cursor: 'pointer' }} onClick={closeModals} />
              </div>
              <div style={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '50px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#3f6cf3', borderRadius: '50%', marginRight: '10px' }}></div>
                    <span style={{ fontWeight: '600' }}>Order Placed</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#ccc', borderRadius: '50%', marginRight: '10px' }}></div>
                    <span>On Delivery</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#ccc', borderRadius: '50%', marginRight: '10px' }}></div>
                    <span>Delivered</span>
                  </div>
                </div>
                <div className="alert alert-secondary mt-4" role="alert" style={{ fontSize: '14px' }}>
                  <i className="fa fa-info-circle"></i> Your order has been placed
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
  );
}

export default Orders