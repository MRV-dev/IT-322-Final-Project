import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/ordernow.css'


function OrderNow() {
  const location = useLocation();
  const pathname = location.pathname;

  return(
    <>
      <div className="OnlineOrder">
        <div className="customer-nav">
          <img className='Logo' src={Logo}  />
          <ul className='Nav-bar'>
            <li className=''><Link className='Nav-link' to='/Home'>
            <span className='link-text'>Home</span></Link></li>

            <li className=''><Link className='Nav-link' to='/Home'>
            <span className='link-text'>Order Now</span></Link></li>

            <li className=''><Link className='Nav-link' to='/Home'>
            <span className='link-text'>Contact Us</span></Link></li>
            
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