import { Link } from 'react-router-dom';
import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/landingpage.css'
import { FaBell, FaUser } from 'react-icons/fa';

function LandingPage() {

  return (
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

        {/* Our Services */}
      <section className="services">
        <h2>OUR SERVICES</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="/delivery.jpg" alt="Delivery" />
            <h3>Delivery</h3>
            <p>
              Our delivery service offers a convenient way to receive your items
              directly at your doorstep...
            </p>
          </div>
          <div className="service-card">
            <img src="/pickup.jpg" alt="Pickup" />
            <h3>Pickup</h3>
            <p>
              With our pickup service, you can place your order in advance and
              pick it up at your convenience...
            </p>
          </div>
          <div className="service-card">
            <img src="/reservation.jpg" alt="Reservation" />
            <h3>Reservation</h3>
            <p>
              Our reservation service allows you to secure a spot in advance...
            </p>
          </div>
        </div>
      </section>

      {/* Our Best Selling */}
      <section className="best-selling">
        <h2>Our Best Selling</h2>
        <div className="best-items">
          <div className="item highlight green">
            <span>Best Selling Dishes</span>
            <h3>Lomi</h3>
            <a href="#" className="order-link">
              Order Now →
            </a>
          </div>
          <div className="item highlight pink">
            <span>Best Selling Bilao</span>
            <h3>Palabok</h3>
            <a href="#" className="order-link">
              Order Now →
            </a>
          </div>
          <div className="item highlight blue">
            <span>Best Selling Desserts</span>
            <h3>Leche Flan</h3>
            <a href="#" className="order-link">
              Order Now →
            </a>
          </div>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="also-like">
        <h2>You Might Also Like</h2>
        <div className="suggested-items">
          <div className="card">
            <img src="/graham.jpg" alt="Graham" />
            <h3>Graham</h3>
            <a href="#" className="order-link">
              <button>Order Now</button>
            </a>
          </div>
          <div className="card">
            <img src="/bihon.jpg" alt="Bihon" />
            <h3>Bihon</h3>
            <a href="#" className="order-link">
              <button>Order Now</button>
            </a>
          </div>
          <div className="card">
            <img src="/sweetspicy.jpg" alt="Sweet & Spicy" />
            <h3>Sweet & Spicy</h3>
            <a href="#" className="order-link">
              <button>Order Now</button>
            </a>
          </div>
          <div className="card">
            <img src="/spaghetti.jpg" alt="Spaghetti" />
            <h3>Spaghetti</h3>
            <a href="#" className="order-link">
              <button>Order Now</button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <p>Home</p>
            <p>Order Now</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="footer-middle">
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Purok 2, Puting Bato East Calaca City Batangas
            </p>
            <p>
              <i className="fab fa-facebook"></i> El Callejon Lomi Hauz
            </p>
            <p>
              <i className="fas fa-envelope"></i> Elcallejonlomihauz@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> 09123456789
            </p>
          </div>
          <div className="footer-right">
            <h3>
              <em>Opening Hours</em>
            </h3>
            <p>
              <i className="fas fa-check-circle"></i> Monday–Sunday
            </p>
            <p>8:00 AM–6:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 El Callejon Lomi Hauz. All rights reserved.</p>
        </div>
      </footer>


      </div>
 
      
      
    </>
    
      
  );
}  


export default LandingPage
