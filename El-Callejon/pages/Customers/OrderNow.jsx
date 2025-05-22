import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/ordernow.css'
import { FaBell, FaUser} from 'react-icons/fa';


function OrderNow() {
  const location = useLocation();
  const pathname = location.pathname;

  return(
    <>
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