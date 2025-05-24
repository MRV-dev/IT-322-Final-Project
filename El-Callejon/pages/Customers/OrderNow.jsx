import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/ordernow.css'
import { Link } from 'react-router-dom'
import { FaBell, FaUser } from 'react-icons/fa'
import Lomi from '../assets/Lomi.png'
import Dessert from '../assets/Dessert.png'
import Bilao from '../assets/Pancit_Canton_Bihon_Guisado-removebg-preview 1.png'

function OrderNow() {

  return (
    <>
    <div className='Menu-page'>
      <nav className='customer-navbar'>
        <img className='El-Callejon-Logo' src={Logo} />
        <ul className='customer-navigations'>
          <li><Link className='Nav-link' to='/Home'>
            <span className='Link-text'>Home</span></Link>
          </li>

          <li><Link className='Nav-link' to='/OrderNow'>
            <span className='Link-text'>Order Now</span></Link>
          </li>

          <li><Link className='Nav-link' to='/Contact'>
            <span className='Link-text'>Contact Us</span></Link>
          </li>

            
          <li className='icon-item'>
            <Link to='/Customers-Notification' className='Nav-link'>
              <FaBell className='bell' color="black" />
            </Link>
          </li>

          <li className='icon-item'>
            <Link to='/Customers-Account' className='Nav-link'>
              <FaUser className='User-icon' color="black" />
            </Link>
          </li>
        </ul>
      </nav>


      <div className='order-content'>
        <div className='Order-container'>
          <div className='Category'>
            <ul className='category-list'>
              <li className='category-link'>
                <img className='Dishes' src={Lomi} />
                <p className='category-name'>Dishes</p>
              </li>
              <li className='category-link'>
                <img className='bilao' style={{marginLeft: '3px'}} src={Bilao} />
                <p className='category-name' style={{marginTop: '5px'}}>Bilao</p>
              </li>
              <li className='category-link'>
                <img className='dessert' src={Dessert} />
                <p className='category-name'>Desserts</p>
              </li>
            </ul>
          </div>

          <div className='Menu-container'>
            <h3 style={{paddingLeft: '40px', marginTop: '60px', fontWeight: '600'}}>Menu</h3>
            <div className='dish-selection'>
              <div className='dishes'>
                <ul className='dishes-list'>
                  <li className='dish'>
                    <img className='dish-image' src={Lomi} />
                  </li>

                  <li className='dish'>
                    <img className='dish-image' src={Lomi} />
                  </li>

                  <li className='dish'>
                    <img className='dish-image' src={Lomi} />
                  </li>

                  <li className='dish'>
                    <img className='dish-image' src={Lomi} />
                  </li>
                  
                  <li className='dish'>
                    <img className='dish-image' src={Lomi} />
                  </li>

                  <li className='dish'>
                    <img className='dish-image' src={Lomi} />
                  </li>

                  <li className='dish'>
                    <img className='dish-image' src={Lomi} />
                  </li>

                  <li className='dish'>
                    <img className='dish-image' src={Lomi} />
                  </li>

                </ul>
              </div>

            </div>
          </div>
       </div>
        <div className='order-summary'>
          <div className='order-details'>

          </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default OrderNow
