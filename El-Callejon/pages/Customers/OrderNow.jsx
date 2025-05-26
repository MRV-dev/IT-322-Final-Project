import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/ordernow.css'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { FaBell, FaUser, FaHeart } from 'react-icons/fa'
import { IoIosAlert } from "react-icons/io";
import { MdDeliveryDining } from 'react-icons/md'; 
import { CiShoppingCart } from "react-icons/ci";
import pickup from '../assets/take-away.png'
import Lomi from '../assets/Lomi.png'
import Dessert from '../assets/Dessert.png'
import Bilao from '../assets/Pancit_Canton_Bihon_Guisado-removebg-preview 1.png'
import reserve from '../assets/booking.png'
import QR from '../assets/QR.png'
import Siomaisilog from '../assets/siomai_silog.png'
import Siomairice from '../assets/Siomai_rice.png'
import Tapsilog from '../assets/Tapsilog2.png'
import Bihon from '../assets/bihon2.png'
import Pancit from '../assets/Pancit.png'
import SweetandSpicy from '../assets/Sweet_and_spicy.png'
import Hotsilog from '../assets/hotsilog.png'

function OrderNow() {
  
const initialDishes = [
  { name: 'Lomi', price: 75, image: Lomi, quantity: 0 },
  { name: 'SweetandSpicy', price: 75, image: SweetandSpicy, quantity: 0 },
  { name: 'Pancit', price: 75, image: Pancit, quantity: 0 },
  { name: 'Bihon', price: 75, image: Bihon, quantity: 0 },
  { name: 'Tapsilog', price: 75, image: Tapsilog, quantity: 0 },
  { name: 'Hotsilog', price: 75, image: Hotsilog, quantity: 0 },
  { name: 'Siomaisilog', price: 75, image: Siomaisilog, quantity: 0 },
  { name: 'Siomairice', price: 75, image: Siomairice, quantity: 0 },
];

const orderSummaryRef = useRef(null);
const [Dishes, setDishes] = useState(initialDishes);


const updateQuantity = (index, change) => {
  setDishes(prevDishes =>
    prevDishes.map((dish, i) =>
      i === index
        ? { ...dish, quantity: Math.max(0, dish.quantity + change) } // Prevents negative values
        : dish
    )
  );

  setTimeout(() => {
    orderSummaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

const [showSummary, setShowSummary] = useState(false);


const [isModalOpen, setIsModalOpen] = useState(false);
const [isOrderPlaced, setIsOrderPlaced] = useState(false);


  return (
    <>
      <div className='Menu-page'>
        <nav className='customer-navbar'>
          <img className='El-Callejon-Logo' src={Logo} />
          <ul className='customer-navigations'>
            <li><Link className='Nav-link' to='/Customers-LandingPage'>
              <span className='Link-text'>Home</span></Link>
            </li>

            <li><Link className='Nav-link' to='/Customers-OrderNow'>
              <span className='Link-text'>Order Now</span></Link>
            </li>

            <li><Link className='Nav-link' to='/Customers-LandingPage'>
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
              <div className='alert1'>
                <p className='alert-note'><span className='note'>Note: &nbsp;</span>All online orders are final and cannot be canceled. 
                Thank you for understanding! <FaHeart className='heart-icon'/></p>
                <button className="toggle-summary-btn" onClick={() => setShowSummary(!showSummary)}>
  {showSummary ? <CiShoppingCart className='cart'/> : <CiShoppingCart className='cart'/>}
</button>

              </div>
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
                    {Dishes.map((dish, index) => (
                      <li key={index} className='dish'>
                        <img 
                           className={`dish-image ${dish.name.toLowerCase().replace(/\s/g, '-')}`} 
                            src={dish.image} 
                                          />

                        <div className='Container'>
                          <div className='left-info'>
                            <p className="dish-name" data-name={dish.name}>
                              {dish.name}
                            </p>


                            <p className='dish-price'>
                              <span style={{ color: '#F9B925' }}>₱</span>{dish.price.toFixed(2)}
                            </p>
                          </div>
                          <div className="quantity" data-name={dish.name}>
                            <button 
                              className="quantity-btn minus-btn" 
                              onClick={() => updateQuantity(index, -1)}
                            >
                              <span className="minus">&#8722;</span>
                            </button>

                            <span>{dish.quantity}</span> 

                            <button 
                              className="quantity-btn plus-btn" 
                              onClick={() => updateQuantity(index, 1)}
                            >
                              <span className="plus">&#43;</span>
                            </button>
                          </div>


                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div  className={`order-summary ${showSummary ? 'show' : ''}`}  ref={orderSummaryRef}>
            <div className='order-details'>
              <div className='alert2'>
                <p><IoIosAlert className='warning-icon'/>   A minimum order of ₱200 is required 
                  when placing an order.</p>
              </div>
              <div className='order-option'>
                <div className='delivery'><MdDeliveryDining style={{fontSize: '20px', marginLeft: '3px', marginBottom: '2px'}}/> </div>
                <button className='delivery-btn'>Delivery</button>
                
                <div className='Pickup'><img style={{height: '16px', marginBottom: '3px', marginLeft: '5px'}} src={pickup} />  </div>
                <button className='pick-up-btn'> Pick Up</button>
                
                <div className='Reservation'><img style={{height: '16px', marginBottom: '3px', marginLeft: '4.5px'}} src={reserve} /> </div>
                <button className='reservation-btn'> Reservation</button>
                
              </div>

              <div className='customer-order-details'>
                <div>
                  <h2 className='order-text'>Your Order</h2>
                </div>
                <hr className='upper-line'/> 
                <div className='order-detail-container'>
                  <div className='ordered-details'>
                    {Dishes.filter(dish => dish.quantity > 0).map((dish, index) => (
                      <div key={index} className='order-list'>
                        <p className='order-quantity'>{dish.quantity}</p>
                        <p className='dish-text'>{dish.name}</p>
                        <p className='order-price'>₱{(dish.price * dish.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='total'>
                  <hr className='price-line'/>
                  <p className='total-text'>
                    Total: <span className='total-number'>
                      ₱{Dishes.reduce((total, dish) => total + dish.price * dish.quantity, 0).toFixed(2)}
                    </span>
                  </p>
                </div>

                <div className='checkout'>
                  <button className='checkout-btn' onClick={() => setIsModalOpen(true)} >Checkout</button>
                </div>
              </div>
              {isModalOpen && (
                <div className="place-order-modal-overlay">
                  <div className="place-order-modal-content">
                    <div className='placeorder'>
                      <div className='title'>
                        <div className='delivery-type'><MdDeliveryDining size={28} className='delivery-icon' style={{fontSize: '20px', marginLeft: '3px', marginBottom: '2px'}}/>
                        <p className='delivery-text'>Delivery</p></div>
                        <button className='closemodal' onClick={() => setIsModalOpen(false)}>×</button>
                      </div>
                      <div className='placeorder-details'>
                        <div className='placeorder-info'>
                          <p className='fullname'>Full name</p>
                          <input className='entername' type="text" placeholder='Enter full name' />
                        </div>
                        <div className='alignment'>
                          <div className='placeorder-number'>
                            <p className='PhoneNumber'>Phone Number</p>
                            <input className='Phone' type="text" placeholder='Enter phone number' />
                          </div>
                          <div className='placeorder-address'>
                            <p className='location'>Address</p>
                            <input className='Address' type="text" placeholder='Enter address' />
                          </div>
                        </div>
                        <div>
                          <p className='delivery-time'>Time to deliver</p>
                          <input className='deliver' type="text"/>
                        </div>
                        <div className='payment-container'>
                          <div className='payment'>
                            <div className='Gcash-payment'>
                              <p className='Payment-text'>Payment</p>
                              <div className='QR-payment'>
                                <p>Scan QR to pay in Gcash</p>
                                <img className='QR-sample' src={QR} />
                              </div>
                            </div>  
                          </div>

                          <div className='upload'>
                            <p>Upload Proof of Payment</p>
                              <div className="file-upload">
                                <label htmlFor="fileInput" className="upload-box">
                                  <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: "none" }}
                                    accept="image/*"
                                    onChange={(e) => {
                                      const file = e.target.files[0];
                                      console.log("Selected file:", file);
                                    }}
                                  />
                                  <p className="upload-instruction">Drag a file here or click to select one</p>
                                  <p className="upload-subtext">
                                    Attach receipt or transaction screenshot for the confirmation. <br />
                                    File should not exceed 10mb.
                                  </p>
                                </label>
                              </div>

                          </div>
                        </div>
                      </div>
                    </div>  
                    <div>
                      <button  className='PlacedOrder' onClick={() => {setIsModalOpen(false); 
                      setIsOrderPlaced(true);    
                              }}
                            >
                              Place Order
                            </button>
                    </div>            
                  </div>
                </div>
              )}
              {isOrderPlaced && (
                <div className="order-confirmation-overlay">
                  <div className="order-confirmation-modal">
                    <h2>Order Placed!</h2>
                    <p>Your order has been successfully submitted.</p>
                    <div className="order-buttons">
                      <button className="view-order">View Your Order</button>
                      <button
                        className="exit-modal"
                        onClick={() => setIsOrderPlaced(false)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderNow
