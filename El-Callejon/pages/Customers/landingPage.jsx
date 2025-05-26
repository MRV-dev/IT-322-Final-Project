import { Link } from 'react-router-dom';
import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/landingPage.css'
import { FaBell, FaUser } from 'react-icons/fa';
import Dish from '../assets/Dish.png'
import Lomi from '../assets/Lomi.png'
import MJ from '../assets/Maja-Blanca.jpg'
import Bg from '../assets/Bg-carousel.png'
import Sweet from '../assets/Sweet_and_spicy.png'
import delivery from '../assets/delivery-img.png'
import Reservation from '../assets/reserve.png'
import PickUp from '../assets/pick-up.png'
import Graham from '../assets/Dessert.png'
import Bihon from '../assets/bihon2.png'
import Spaghetti from '../assets/Spaghetti.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';




function LandingPage() {


  return (
    <>
      <div className="Account">
        <div className="customer-nav">
          <img className="Logo" src={Logo} alt="Logo" />
          <ul className="nav-bar">
            <li>
              <Link className="nav-link" to="/Customers-LandingPage">
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Customers-OrderNow">
                <span className="link-text">Order Now</span>
              </Link>
            </li>
            <li>
              <a href='#footer' className="nav-link">
                <span className="link-text">Contact Us</span>
              </a>
            </li>
            <li className="icon-item">
              <Link to="/Customers-Notification" className="Nav-link">
                <FaBell size={20} color="black" />
              </Link>
            </li>
            <li className="icon-item">
              <Link to="/Customers-Account" className="Nav-link">
                <FaUser size={20} color="black" />
              </Link>
            </li>
          </ul>
        </div>

     
        <div className="hero-section">
          <div className="hero-text">
            <h1>Satisfy Your Cravings</h1>
            <p>Feel the warmth. Taste the flavor. Lomi at your doorstep.</p>
            <Link to="/OrderNow" className="order-now-btn">
              Order Now
            </Link>
          </div>
          <div class="custom-shape-divider-bottom-1748173865">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
              </svg>
          </div>
          <div className="hero-image">
            <img className='img2' src={Dish} />
          </div>
        </div>

      
        <section className="best-selling-1">
          <div
            className="best-items"
            style={{
              backgroundImage: `url(${Bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              padding: '4rem 2rem',
              color: 'white',
              height: '110vh',
            }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>
                <div className="item1">
                  <img className='item1-image' src={MJ}  />
                  <p>Maja Blanca is a creamy Filipino dessert made from coconut milk, cornstarch, and sweet corn.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item2">
                  <img className='item2-image' src={Lomi} alt="Lomi" />
                  <p>Lomi is a thick, savory noodle soup made with egg noodles, rich broth, and hearty toppings.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item3">
                  <img className='item3-image' src={Sweet}  />
                  <p>Chami Lomi is a thick noodle dish made with egg noodles, rich broth, and savory toppings.</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

      </div>
        {/* Services */}
        <section className="services">
          <h4>THIS IS WHAT WE DO</h4>
          <h2>OUR SERVICES</h2>
          <div className="service-cards">
            <div className="service-card">
              <img src={delivery} />
              <h3>Delivery</h3>
              <p>Our delivery service offers a convenient way to receive your items directly at your doorstep. We ensure fast, reliable, and contactless delivery within the designated service area. Simply place your order online or by phone, and we’ll handle the rest.</p>
            </div>
            <div className="service-card">
              <img src={PickUp}  />
              <h3>Pickup</h3>
              <p>With our pickup service, you can place your order in advance and pickup it at your convenience. This option is perfect for those who prefer to save time and avoid waiting in lines. Just choose your pickup time, and your order will be ready when you arrive.</p>
            </div>
            <div className="service-card">
              <img src={Reservation}  />
              <h3>Reservation</h3>
              <p>Our reservation service allows you to secure a spot in advance. Make your reservation online, and enjoy priority access and guaranteed availability without the hassle.</p>
            </div>
          </div>
        </section>

        {/* Best Selling Section */}
        <section className="best-selling">
          <div className='best-sell-contents'>
            <h2 className='best-selling-text'>Our Best Selling</h2>
              <div className="best-items">
                <div className="item highlight green">
                  <div className='container'>
                    <span>Best Selling Dishes</span>
                    <p className='Lomi'>Lomi</p>
                    <a href="#" className="order-link">Order Now →</a>
                  </div>
                  <img src={Lomi}  />
                </div>
                <div className="item highlight pink">
                  <div className='container'>
                   <span>Best Selling Bilao</span>
                    <p className='palabok'>Palabok</p>
                    <a href="#" className="order-link2">Order Now →</a>
                  </div>
                    <img src={Lomi} />                
                </div>
              </div>
              <div className='best-items'>
                <div className="item highlight blue">
                  <div className='container'>
                    <span>Best Selling Desserts</span>
                    <p className='Leche-Flan'>Leche Flan</p>
                    <a href="#" className="order-link3">Order Now →</a>
                  </div>
                  <img src={Lomi}  />                  
                </div>
              </div>
          </div>
          
        </section>

        {/* You Might Also Like */}
        <section className="also-like">
          <h2>You Might Also Like</h2>
          <div className="suggested-items">
            <div className="card">
              <img src={Graham} alt="Graham" />
              <h3>Graham</h3>
              <Link to='/Customers-OrderNow'><button className='button'>Order Now</button></Link>
            </div>
            <div className="card">
              <img src={Bihon} alt="Bihon" />
              <h3>Bihon</h3>
              <Link to='/Customers-OrderNow'><button className='button'>Order Now</button></Link>
            </div>
            <div className="card">
              <img src={Sweet} alt="Sweet & Spicy" />
              <h3 className='sweetspicy'>Sweet & Spicy</h3>
              <Link to='/Customers-OrderNow'><button className='button'>Order Now</button></Link>
            </div>
            <div className="card">
              <img src={Spaghetti} alt="Spaghetti" />
              <h3>Spaghetti</h3>
              <Link to='/Customers-OrderNow'><button className='button'>Order Now</button></Link>
            </div>
          </div>
        </section>

        {/* Footer */}
       <footer id="footer" style={{ position: 'relative', height: '80vh', color: 'black', fontFamily: 'sans-serif' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${Bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />
    
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
            zIndex: 1,
          }}
        />

  
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4rem 3rem 2rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
        
          <div style={{ fontSize: '17px', marginLeft: '100px', flex: '1' }}>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold', textDecoration: 'underline' }}>Home</p>
            <Link to='/Customers-OrderNow' style={{ textDecoration: 'none', color: 'black' }}><a style={{ marginBottom: '1rem' }}>Order Now</a></Link>
            <p style={{  marginTop: '10rem'}}>Terms & Conditons</p>
          </div>

          
          <div style={{marginLeft: '10px', flex: '2',  }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Contact Us</h3>

            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '0.75rem' }}></i>
              Purok 2, Puting Bato East Calaca City Batangas
            </p>

            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <i className="fab fa-facebook" style={{ marginRight: '0.75rem' }}></i>
              El Callejon Lomi Hauz
            </p>

            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <i className="fas fa-envelope" style={{ marginRight: '0.75rem' }}></i>
              Elcallejonlomihauz@gmail.com
            </p>

            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <i className="fas fa-phone" style={{ marginRight: '0.75rem' }}></i>
              09123456789
            </p>
          </div>


       
          <div style={{ flex: '1' }}>
            <h3 style={{ fontStyle: 'italic', marginBottom: '1rem' }}>Opening Hours</h3>
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
              Monday–Sunday
            </p>
            <p style={{ marginLeft: '1.5rem' }}>8:00 AM–6:00 PM</p>
          </div>
        </div>

      
        <div style={{ marginTop: '100px', position: 'relative', zIndex: 2, textAlign: 'center', paddingBottom: '1rem' }}>
          <p>© 2025 El Callejon Lomi Hauz. All rights reserved.</p>
        </div>
      </footer>


    </>
    
      
  );
}  


export default LandingPage
