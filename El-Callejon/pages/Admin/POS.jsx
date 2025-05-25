import '../Admin/admin-css/POS.css'
import Logo from '../assets/El_Calejon.jpg'
import {useLocation, Link} from 'react-router-dom'
import { MdDeliveryDining } from 'react-icons/md'; 
import { FaBowlFood } from "react-icons/fa6";
import { useState, useRef } from 'react';
import { FaBell } from "react-icons/fa";
import Lomi from '../assets/Lomi.png'
import Dessert from '../assets/Dessert.png'
import Bilao from '../assets/Pancit_Canton_Bihon_Guisado-removebg-preview 1.png'
import Siomaisilog from '../assets/siomai_silog.png'
import Siomairice from '../assets/Siomai_rice.png'
import Tapsilog from '../assets/Tapsilog2.png'
import Bihon from '../assets/bihon2.png'
import Pancit from '../assets/Pancit.png'
import SweetandSpicy from '../assets/Sweet_and_spicy.png'
import Hotsilog from '../assets/hotsilog.png'





function POS() {


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
  
  
  
  
  const SummaryRef = useRef(null);
  
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
      SummaryRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };



  return(
    <>
      <div className="pos-page">
        <div className="sideBar">
          <img className='business-logo' src={Logo}  />
          <ul className='navigation-links'>
            <li className='navs'><Link style={{textDecoration: 'none', color: 'black'}}><FaBowlFood style={{marginBottom: '3.5px'}}/>Point-of-Sale</Link></li>

            <li className='navs'><Link style={{textDecoration: 'none', color: 'black'}}><MdDeliveryDining style={{marginBottom: '3px'}}/>Orders Online</Link></li>
            
            <li className='logout'><Link style={{textDecoration: 'none', color: 'black'}}>Logout</Link></li>

          </ul>
        </div>

        <div className='POS-content'> 
          <div className='POS-container'>
            <h4 className='category-text'>Category</h4>
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
            <div className='POS-Menu-container'>
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
          <div className='summary' ref={SummaryRef}>
            <div className='summary-order-details'>
                <div className='summary-customer-order'>
                  <div className='online-order-alert'>
                    <p className='alert-text'><FaBell className='Bell'/>There are 4 new online orders</p>
                  </div>
                  <div>
                    <h2 className='summary-order-title'>Ordered Items</h2>
                  </div>
                  <hr className='summary-divider' /> 
                  <div className='summary-order-container'>
                    <div className='summary-ordered-items'>
                      {Dishes.filter(dish => dish.quantity > 0).map((dish, index) => (
                        <div key={index} className='summary-order-item'>
                          <p className='summary-order-qty'>{dish.quantity}</p>
                          <p className='summary-dish-name'>{dish.name}</p>
                          <p className='summary-order-price'>₱{(dish.price * dish.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='summary-total'>
                    <hr className='summary-total-line'/>
                    <p className='summary-total-text'>
                      Total: <span className='summary-total-value'>
                        ₱{Dishes.reduce((total, dish) => total + dish.price * dish.quantity, 0).toFixed(2)}
                      </span>
                    </p>
                  </div>

                  <div className='summary-checkout'>
                    <button className='summary-checkout-btn'>Checkout</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

    </>
  )
}

export default POS