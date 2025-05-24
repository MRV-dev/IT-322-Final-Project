import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/ordernow.css'
import { Link } from 'react-router-dom'
import { FaBell, FaUser, FaHeart } from 'react-icons/fa'
import { IoIosAlert } from "react-icons/io";
import { MdDeliveryDining } from 'react-icons/md'; 
import pickup from '../assets/take-away.png'
import Lomi from '../assets/Lomi.png'
import Dessert from '../assets/Dessert.png'
import Bilao from '../assets/Pancit_Canton_Bihon_Guisado-removebg-preview 1.png'
import reserve from '../assets/booking.png'

function OrderNow() {

  const dishes = [
  { name: 'Lomi', price: 75, image: Lomi },
  { name: 'Lomi', price: 75, image: Lomi },
  { name: 'Lomi', price: 75, image: Lomi },
  { name: 'Lomi', price: 75, image: Lomi },
  { name: 'Lomi', price: 75, image: Lomi },
  { name: 'Lomi', price: 75, image: Lomi },
  { name: 'Lomi', price: 75, image: Lomi },
  { name: 'Lomi', price: 75, image: Lomi },
];


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
              <div className='alert1'>
                <p>All online orders are final and cannot be canceled. 
                Thank you for understanding <FaHeart className='heart-icon'/></p>
              </div>
            </div>

            <div className='Menu-container'>
              <h3 style={{paddingLeft: '40px', marginTop: '60px', fontWeight: '600'}}>Menu</h3>
              <div className='dish-selection'>
                <div className='dishes'>
                  <ul className='dishes-list'>
                    {dishes.map((dish, index) => (
                      <li key={index} className='dish'>
                        <img className='dish-image' src={dish.image} />
                        <div className='Container'>
                          <div className='left-info'>
                            <p className='dish-name'>{dish.name}</p>
                            <p className='dish-price'>
                              <span style={{ color: '#F9B925' }}>₱</span>{dish.price.toFixed(2)}
                            </p>
                          </div>
                          <div className='quantity'>
                            <button className='quantity-btn'><span className='minus'>&#8722;</span></button>
                            <span>1</span>
                            <button className='quantity-btn'><span className='plus'>&#43;</span></button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className='order-summary'>
          <div className='order-details'>
            <div className='alert2'>
              <p><IoIosAlert className='warning-icon'/>   A minimum order of ₱200 is required 
                when placing an order.</p>
            </div>
            <div className='order-option'>
              <div className='delivery'><MdDeliveryDining style={{fontSize: '20px', marginLeft: '3px', marginBottom: '2px'}}/> </div>
              <button className='delivery-btn'>Delivery</button>
              
              <div className='delivery'><img style={{height: '17px', marginBottom: '3px', marginLeft: '2px'}} src={pickup} />  </div>
              <button className='pick-up-btn'> Pick Up</button>
              
              <div className='delivery'><img style={{height: '17px', marginBottom: '3px', marginLeft: '2px'}} src={reserve} /> </div>
              <button className='reservation-btn'> Reservation</button>
            </div>
          </div>
          
          <div className='customer-order-details'>
            <div className='order-detail-container'>
              <h2>Your Order</h2>
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default OrderNow
