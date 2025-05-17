import {useLocation, Link} from 'react-router-dom'
// import { useState } from 'react'
import logoAdmin from '../assets/El_Calejon.jpg'
import '../Admin/admin-css/Setting.css'
import { FaThLarge } from 'react-icons/fa'



function Settings() { 
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
              <h1 className='settings-text'><FaThLarge style={{ marginTop: '-9px', marginRight: '0px', height: '43px', width: '43px', }} />Settings</h1>
            </div>
          </div>
          
          <div className='main-content-dashboard'>
            <div className='overview-container'>
              
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Settings