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

 <div className="account-container">
            <div className="customer-nav">
              <img className='Logo' src={Logo} alt="Logo" />
              <ul className='nav-bar'>
                <li><Link className='nav-link' to='/Customers-LandingPage'>
                  <span className='link-text'>Home</span></Link></li>
                <li><Link className='nav-link' to='/Customers-OrderNow'>
                  <span className='link-text'>Order Now</span></Link></li>
                <li><Link className='nav-link' to='/Customers-Contact'>
                  <span className='link-text' to='/Customers-Contact'>Contact Us</span></Link></li>
                <li className='icon-item'>
                  <Link to='/Customers-Notification' className='nav-link'><FaBell size={20} color="black" /></Link></li>
                <li className='icon-item'>
                  <Link to='/Customers-Account' className='nav-link'><FaUser size={20} color="black" /></Link></li>
              </ul>
            </div>


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
         </div>
         <div className='order-summary'>
            <div className='order-details'>

          </div>
       </div>
      </div>
    </>
  )
}

export default OrderNow
