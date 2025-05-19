import {useLocation, Link} from 'react-router-dom'
// import { useState } from 'react'
import logoAdmin from '../assets/El_Calejon.jpg'
import '../Admin/admin-css/Onlineorder.css'
import { FaThLarge } from 'react-icons/fa'



function OnlineOrders() { 
  // const [activeNav, setActiveNav] = useState('dashboard');
  const location = useLocation();
  const pathname = location.pathname;

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
                <table className="recent-orders-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Order Placed</th>
                      <th>Customer Name</th>
                      <th>Order Method</th>
                      <th>Order Details</th>
                      <th>Payment Method</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Apr 13, 11:23 AM</td>
                      <td>Walk-in</td>
                      <td><strong>1x Spaghetti (Medium)</strong></td>
                      <td>₱240</td>
                      <td className="status-completed">Completed</td>
                    </tr>
                    <tr>
                      <td>Apr 13, 10:45 AM</td>
                      <td>Online</td>
                      <td><strong>1x Spaghetti (Medium)</strong></td>
                      <td>₱160</td>
                      <td className="status-delivered">Delivered</td>
                    </tr>
                    
                    {}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default OnlineOrders