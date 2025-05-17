import {useLocation, Link} from 'react-router-dom'
// import { useState } from 'react'
import logoAdmin from '../assets/El_Calejon.jpg'
import '../Admin/Onlineorder.css'
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
              <Link to="/Dashboard"
              className={`nav ${pathname === '/Dashboard' ? 'dashboard-active' : ''}`}>
                <FaThLarge className='nav-icons'/></Link> </li>

            <li className='navigations'>
              <Link to="/Reports"
              className={`nav ${pathname === '/Reports' ? 'reports-active' : ''}`}>
                <FaThLarge className='nav-icons' /></Link> </li>
            
            <li className='navigations'>
              <Link to="/OnlineOrders"
              className={`nav ${pathname === '/OnlineOrders' ? 'online-orders-active' : ''}`}>
                <FaThLarge className='nav-icons'/></Link> </li>
            
            <li className='navigations'>
              <Link to="/Settings"
              className={`nav ${pathname === '/Settings' ? 'settings-active' : ''}`}>
                <FaThLarge className='nav-icons'/></Link> </li>
            
            <hr className='line'/>
            
            <Link to="/Logout"
              className={pathname === '/Logout' ? 'Logout-active' : 'nav'}>
                <FaThLarge style={{ marginLeft: '13px', marginTop: '8px', height: '43px', width: '43px', color: 'black'}} /></Link>
          </ul>
        </div>
          
        <div className='part'>
            <div className='nav-section'>
              <div className="navbar">
              <FaThLarge style={{ marginRight: '0px', height: '43px', width: '43px', }} />
              <h1 className='OnineOrders-text'>OnineOrders</h1>
            </div>
          </div>
          
          <div className='main-content-dashboard'>
            <div className='overview-container'>
              <div className="dashboard-table">
                <h3 className="recent-orders-title">Recent Orders</h3>
                <table className="recent-orders-table">
                  <thead>
                    <tr>
                      <th>Date and Time</th>
                      <th>Order Type</th>
                      <th>Item</th>
                      <th>Total</th>
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