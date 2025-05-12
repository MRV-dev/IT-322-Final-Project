import React, { useState } from 'react';
import { FaEye, FaSearch, FaFileAlt, FaTimes } from 'react-icons/fa';
import './Orders.css';

const OrdersPage = () => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

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
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar p-3">
        <div className="logo-circle mb-3">
          <img src="public/cropped_image.png" alt="Logo" className="logo-img" />
        </div>
        <div className="profile-section text-center mb-4">
          <img src="public/cropped_image.png" alt="Profile" className="profile-pic mb-2" />
        </div>
        <div className="nav flex-column text-center">
          <div className="nav-link">👤 Account</div>
          <div className="nav-link">🔒 Password</div>
          <div className="nav-link active">⏱ Orders</div>
          <div className="nav-link">🗂 Order History</div>
          <div className="nav-link">↩ Log Out</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center px-4 py-3 topbar">
          <div className="nav-links d-flex gap-3">
            <a href="#">HOME</a>
            <a href="#">ORDER NOW</a>
            <a href="#">CONTACT US</a>
          </div>
          <div className="d-flex gap-3">
            <div className="icon-circle">🔔</div>
            <div className="icon-circle">👤</div>
          </div>
        </div>

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
  );
};

export default OrdersPage;
