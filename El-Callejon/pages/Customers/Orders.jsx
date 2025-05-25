import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { jsPDF } from "jspdf";
import Logo from '../assets/El_Calejon.jpg'
import Profile from '../assets/profile.jpg'
import '../Customers/customer-css/Orders.css';
import { FaUser, FaLock, FaClock, FaClipboardList, FaSignOutAlt, FaBell, FaEye, FaFileAlt, FaTimes, FaCamera, FaTrash } from 'react-icons/fa';

function Orders() {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const location = useLocation();
  const pathname = location.pathname;

  const orders = [
    { id: '00230', method: 'Pickup', status: 'Pending' },
    { id: '00227', method: 'Delivery', status: 'Confirmed' },
    { id: '00219', method: 'Reservation', status: 'Confirmed ' },
  ];

  const orderDetails = {
    '00230': {
      items: [
        { name: 'Spaghetti - Medium', price: 550 },
        { name: 'Palabok - Medium', price: 550 },
        { name: 'Leche Flan', price: 100 }
      ],
      pickupTime: '6:00 PM'
    },
    '00227': {
      items: [
        { name: 'Palabok - Large', price: 650 },
        { name: 'Leche Flan', price: 100 },
      ],
      deliveryAddress: 'Dacanlao Calaca City',
      deliveryTime: '4:30 PM'
    },
    '00219': {
      items: [
        { name: 'Spaghetti - Large', price: 650 },
        { name: 'Maja Blanca', price: 120 },
      ],
      reservationDate: '05/20/2025',
      reservationTime: '7:00 PM',
      persontocome: '3'
    }
  };

  const openViewModal = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    setSelectedOrder({ 
      id: orderId, 
      method: order.method,
      status: order.status,
      ...orderDetails[orderId] 
    });
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

const handleDownloadOrder = () => {
  const doc = new jsPDF();
  
  doc.setFont(undefined, 'bold');
  doc.setFontSize(18);
  doc.setTextColor(40, 40, 40);
  doc.text("El Callejon", 105, 20, { align: 'center' });
  doc.setFontSize(14);
  doc.text("Order Receipt", 105, 30, { align: 'center' });
  
  // Order details
  doc.setFontSize(12);
  doc.text(`Order #: ${selectedOrder.id}`, 15, 40);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 15, 50);
  doc.text(`Status: ${selectedOrder.status}`, 15, 60);
  doc.text(`Type: ${selectedOrder.method}`, 15, 70);
  
  // Items table header
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, 'bold');
  doc.text("Item", 35, 85);
  doc.text("Price", 180, 85, { align: 'right' });
  doc.setFont(undefined, 'normal');
  
  // Items list - now showing quantities instead of numbers
  let yPosition = 95;
  selectedOrder.items.forEach((item) => {
    doc.text(`1 ${item.name}`, 20, yPosition); // Changed from numbered list to "1 [item name]"
    doc.text(`₱${item.price.toFixed(2)}`, 180, yPosition, { align: 'right' });
    yPosition += 10;
  });
  
  // Total
  yPosition += 10;
  doc.setFont(undefined, 'bold');
  doc.text("Total:", 16, yPosition);
  doc.text(`₱${getTotal(selectedOrder.items).toFixed(2)}`, 180, yPosition, { align: 'right' });
  doc.setFont(undefined, 'normal');
  
  // Order-specific info
  doc.setFont(undefined, 'bold');
  yPosition += 20;
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  
  if (selectedOrder.method === 'Delivery') {
    doc.text("Delivery Information", 85, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(`Address: ${selectedOrder.deliveryAddress}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Time to Deliver: ${selectedOrder.deliveryTime}`, 20, yPosition);
  } else if (selectedOrder.method === 'Pickup') {
    doc.text("Pickup Information", 85, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(`Time to Pickup: ${selectedOrder.pickupTime}`, 20, yPosition);
  } else {
    doc.text("Reservation Information", 85, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(`Date to Come: ${selectedOrder.reservationDate}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Time to Come: ${selectedOrder.reservationTime}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Persons to Come: ${selectedOrder.persontocome}`, 20, yPosition);
  }
  
  // Footer
  doc.setFont(undefined, 'bold');
  doc.setFontSize(15);
  doc.setTextColor(100, 100, 100);
  doc.text("Thank you for your order. We hope you enjoy it!", 105, 280, { align: 'center' });
  
  // Save the PDF
  doc.save(`Order_${selectedOrder.id}.pdf`);
};

  const renderOrderInfo = () => {
    if (!selectedOrder) return null;

  switch(selectedOrder.method) {
    case 'Delivery':
      return (
        <div className="order-info">
          <h5>Delivery Information</h5>
          <div className="delivery-details">
            <div className="detail-row">
              <span className="detail-label">Address:</span>
              <span className="detail-address">{selectedOrder.deliveryAddress}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Delivery Time:</span>
              <span className="detail-value">{selectedOrder.deliveryTime}</span>
            </div>
          </div>
        </div>
      );
      case 'Pickup':
        return (
          <div className="order-info">
            <h5>Pickup Information</h5>
            <div className="delivery-details">
              <div className="detail-row">
                <span className="detail-label">Pickup Time:</span>
                <span className="detail-value">{selectedOrder.pickupTime}</span>
              </div>
            </div>
          </div>
        );
      case 'Reservation':
        return (
          <div className="order-info">
            <h5>Reservation Information</h5>
            <div className="delivery-details">
              <div className="detail-row">
                <span className="detail-label">Date to Come:</span>
                <span className="detail-value">{selectedOrder.reservationDate}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Time to Come:</span>
                <span className="detail-value">{selectedOrder.reservationTime}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Persons to Come:</span>
                <span className="detail-value">{selectedOrder.persontocome}</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
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
            <img className="Profile" src={Profile} />
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
                  document.querySelector('.Profile').src = Profile; 
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

        <main className="order-setting">
          <h2>Orders</h2>
          <table className="order-table">
            <thead>
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
                  <td><FaEye style={{ cursor: 'pointer' }} onClick={openTrackModal} /></td>
                  <td><FaFileAlt style={{ cursor: 'pointer' }}onClick={() => openViewModal(order.id)}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        

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

        {/* View Order Modal */}
      {showViewModal && selectedOrder && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">View Order </h4>
              <FaTimes style={{ cursor: 'pointer' }} onClick={closeModals} />
            </div>
            
            <div className="order-id-section">
              <h5>Order ID</h5>
              <p>{selectedOrder.id}</p>
            </div>
            
            <div className="order-items-section">
              <h5>Order Items</h5>
              <ul className="order-items-list">
                {selectedOrder.items.map((item, index) => (
                  <li key={index} className="order-item">
                    <span className="item-quantity">1</span>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">₱{item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-total">
              <span>Total</span>
              <span>₱{getTotal(selectedOrder.items).toFixed(2)}</span>
            </div>
            
            {renderOrderInfo()}

            <div className="modal-footer">
              <button className="download-btn" onClick={handleDownloadOrder}>
                Download Receipt
              </button>
              <button className="close-btn" onClick={closeModals}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
  );
}

export default Orders