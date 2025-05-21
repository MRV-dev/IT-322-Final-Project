import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logoAdmin from '../assets/El_Calejon.jpg'
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
    <div className="account-container">
      <nav className="navbar">
          <img className="Logo-Admin" src={logoAdmin} />
        <div className="nav-links">
          <li><Link to='/Customers-landingPage'><span className='link-text'>Home</span></Link></li>
          <li><Link to='/Customers-OrderNow'><span className='link-text'>ORDER NOW</span></Link></li>
          <li><Link to='/Customers-Contact'><span className='link-text'>CONTACT US</span></Link></li>
          <FaBell className="icon" />
          <FaUser className="icon" />
        </div>
      </nav>

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
              <li> <Link to="/Customers-CustomersLogin"
                className={`nav ${pathname === '/Customers-CustomerLogin' ? 'customerlogin-active' : ''}`}>
                <FaSignOutAlt className='nav-icons'/>Logout</Link> </li>
                        <hr className='line'/>
          </ul>
        </aside>

        <div>
        <main className="account-settings">
          <h2>Orders</h2>
        </main>

        {/* Orders Section */}
        <div className="p-4 orders-section">
          <h2 className="orders-title mb-4">Orders</h2>
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
        </div>

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
    </div>
  );
}

export default Orders