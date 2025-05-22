import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/ordernow.css'
import { Link } from 'react-router-dom'
import { FaBell, FaUser } from 'react-icons/fa'

function OrderNow() {
  return (
    <>
      <div className="OnlineOrder">
        <div className="customer-nav">
          <img className='Logo' src={Logo} alt="Logo" />
          <ul className='Nav-bar'>
            <li><Link className='Nav-link' to='/Home'>
              <span className='link-text'>Home</span></Link>
            </li>

            <li><Link className='Nav-link' to='/OrderNow'>
              <span className='link-text'>Order Now</span></Link>
            </li>

            <li><Link className='Nav-link' to='/Contact'>
              <span className='link-text'>Contact Us</span></Link>
            </li>

           
            <li className='icon-item'>
              <Link to='/Customers-Notification' className='Nav-link'>
                <FaBell size={26} color="black" />
              </Link>
            </li>

          
            <li className='icon-item'>
              <Link to='/Customers-Account' className='Nav-link'>
                <FaUser size={28} color="black" />
              </Link>
            </li>

          </ul>
        </div>

        <div className='Menu'>
          <div className='left-Side-Menu'>
            <div className='Category'>
              <div><p>Dishes</p></div>
              <div><p>Bilao</p></div>
              <div><p>Dessert</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderNow
