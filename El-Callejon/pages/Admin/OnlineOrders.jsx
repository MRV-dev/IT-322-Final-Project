import {useLocation, Link} from 'react-router-dom'
import React, { useState } from 'react'
import logoAdmin from '../assets/El_Calejon.jpg'
import '../Admin/admin-css/Onlineorder.css'
import { FaThLarge } from 'react-icons/fa'



function OnlineOrders() { 

  const location = useLocation();
  const pathname = location.pathname;


  // status update
  const [SelectedRowId, setSelectedRowId] = useState(null);
  // show order detail
  const [showModal, setShowModal] = useState(false);

  const openStatusModal = (SelectedRowId) => {
    setSelectedRowId(SelectedRowId);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedRowId(null);
  };

  // closes the modals both view order and status
  const handleStatusChange = () => {
    closeModal();
    closeOrderModal();
  };

  // view order modal
  const [RowId, setRowId] = useState(null);
  const [ShowOrderModal, setShow] = useState(false);

  const viewOrderModal = (RowId) => {
    setRowId(RowId)
    setShow(true)
  };
  const closeOrderModal = () => {
    setShow(false)
    setRowId(null)
  }



  // table data
  const orders = [
    {
    id: '00125',
    date: '2025-05-28',
    name: 'John Dela Cruz',
    method: 'Delivery',
    payment: 'GCash',
    status: 'Pending'
    },
    {
      id: '00143',
      date: '2025-05-28',
      name: 'John Dela Cruz',
      method: 'Reservation',
      payment: 'GCash',
      status: 'Pending'
    },
    {
    id: '00125',
    date: '2025-05-28',
    name: 'John Dela Cruz',
    method: 'Delivery',
    payment: 'GCash',
    status: 'Pending'
    },
    {
    id: '00125',
    date: '2025-05-28',
    name: 'John Dela Cruz',
    method: 'Delivery',
    payment: 'GCash',
    status: 'Pending'
    },
    {
    id: '00125',
    date: '2025-05-28',
    name: 'John Dela Cruz',
    method: 'Delivery',
    payment: 'GCash',
    status: 'Pending'
    },
    {
    id: '00125',
    date: '2025-05-28',
    name: 'John Dela Cruz',
    method: 'Delivery',
    payment: 'GCash',
    status: 'Pending'
    },
  ];


  return(
    <>
      <div className="whole-page">
        <div className="side-bar">
          <img className="Logo-Admin" src={logoAdmin} />
          <ul className='List'>
            <li className='navigations'>
              <Link to="/Admin-Dashboard"
              className={`nav ${pathname === '/Admin-Dashboard' ? 'dashboard-active' : ''}`}>
                <FaThLarge className='nav-icons'/></Link> </li>

            <li className='navigations'>
              <Link to="/Admin-Reports"
              className={`nav ${pathname === '/Admin-Reports' ? 'reports-active' : ''}`}>
                <FaThLarge className='nav-icons' /></Link> </li>
            
            <li className='navigations'>
              <Link to="/Admin-OnlineOrders"
              className={`nav ${pathname === '/Admin-OnlineOrders' ? 'online-orders-active' : ''}`}>
                <FaThLarge className='nav-icons'/></Link> </li>
            
            <li className='navigations'>
              <Link to="/Admin-Settings"
              className={`nav ${pathname === '/Admin-Settings' ? 'settings-active' : ''}`}>
                <FaThLarge className='nav-icons'/></Link> </li>
            
            <hr className='line'/>
            
            <Link to="/Admin-Login">
                <FaThLarge style={{ marginLeft: '-1px', marginTop: '8px', height: '43px', width: '43px', color: 'black'}} /></Link>
          </ul>
        </div>

          
        <div className='part'>
            <div className='nav-section'>
              <div className="navbar">
              <h1 className='OnineOrders-text'><FaThLarge style={{ marginTop: '-9px', marginRight: '0px', height: '43px', width: '43px', }} />OnlineOrders</h1>
            </div>
          </div>
          
          <div className='main-content-Online-orders'>
            <div className='overview-container-online'>
              <div className="Online-orders-table">
                <p className="search-text">Search:</p>
                <input className='search-online-order' type="text" />

                {/* Table */}
                <table className="recent-orders-table">
                  <thead>
                    <tr>
                      <th style={{textAlign: 'center'}}>Order ID</th>
                      <th style={{textAlign: 'center'}}>Order Placed</th>
                      <th style={{textAlign: 'center'}}>Customer Name</th>
                      <th style={{textAlign: 'center'}}>Order Method</th>
                      <th style={{textAlign: 'center'}}>Order Details</th>
                      <th style={{textAlign: 'center'}}>Payment Method</th>
                      <th style={{textAlign: 'center'}}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className='centered-row'>
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.name}</td>                        
                        <td>{order.method}</td>
                        <td>
                          <button className="order-details-btn" onClick={viewOrderModal}>
                            View Orders
                          </button>
                        </td>
                        <td>{order.payment}</td> 
                        <td><button className="status" onClick={() => openStatusModal()}>Pending</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <ul className='online-orders-pagination'>
                  <li className='pagination-item'>
                    <button className='page'>&laquo;</button>
                  </li>

                  <li className='pagination-item'>
                    <button className='page'>&raquo;</button>
                  </li>
                </ul>
                
                {/* order details modal */}
                {showModal && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <h3 className='update-status-text'>Update Order Status</h3>
                      <ul className="modal-status-options">
                        <li className='modal-list' onClick={() => handleStatusChange("Pending")}>
                          Pending</li>
                        <li className='modal-list' onClick={() => handleStatusChange("Confirmed")}>
                          Confirmed</li>
                        <li className='modal-list' onClick={() => handleStatusChange("In Process")}>
                          In Process</li>
                      </ul>
                      <button onClick={closeModal} className="close-modal">Close</button>
                    </div>
                  </div>
                )}
                 {ShowOrderModal && (
                  <div className="view-order-modal-overlay">
                    <div className="view-order-modal-content">
                      <h3 className='order-detail-text'>Order Details</h3>
                      <a onClick={closeOrderModal} className="close-order-detail">&times;</a>
                      <div className='order-details'>
                        <div className='left'>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default OnlineOrders