import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/ordernow.css'
import { FaBell, FaUser} from 'react-icons/fa';


function OrderNow() {
  const location = useLocation();
  const pathname = location.pathname;

  return(
    <>
      <div className="OnlineOrder">
      <nav className="navbar">
          <img className="Logo-Admin" src={logo} />
        <ul className="nav-links">
          <li><Link to='/Customers-LandingPage'><span className='link-text'>HOME</span></Link></li>
          <li><Link to='/Customers-OrderNow'><span className='link-text'>ORDER NOW</span></Link></li>
          <li><Link to='/Customers-Contact'><span className='link-text'>CONTACT US</span></Link></li>
          <li><Link to='/Customers-Notification'><FaBell  className="icon" /></Link></li>
          <li><Link to='/Customers-Account'><FaUser className="icon" /></Link></li>
        </ul>
      </nav>
        <div className='Menu'>
          <div className='left-Side-Menu'>
            <div className='Category'>
              <div>
                <p>Dishes</p>
              </div>
              <div>
                <p>Bilao</p>
              </div>
              <div>
                <p>Dessert</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    
    </>
  )
}

export default OrderNow