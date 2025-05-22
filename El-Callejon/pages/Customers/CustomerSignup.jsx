import {Link} from 'react-router-dom'
import {useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import '../Customers/customer-css/CustomerSignup.css'
import Logo from '../assets/El_Calejon.jpg'

function CustomerSignup (){

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return(
    <>
      <div className='signup-page'>
        <div className='logo-row'>
          <img className='logo' src={Logo} alt="" />
        </div>
        <div className="Customer-Signup">
          <div className="container">
            <h2 className='Signup-Text'>LomiHub</h2>
            <input className="email" type="text" placeholder="Email"/>
            <div className="password-wrapper">
              <input className="password" type={showPassword ? "text" : 'password'} placeholder="Enter Password"/>
              <span onClick={togglePasswordVisibility} className="eye-icon1">{showPassword ? <FaEyeSlash/> : <FaEye/>}</span>
              <input className="password" type={showPassword ? "text" : 'password'} placeholder="Confirm Password"/>
              <span onClick={togglePasswordVisibility} className="eye-icon2">{showPassword ? <FaEyeSlash/> : <FaEye/>}</span>
            </div>
            <Link to="/Customers-LandingPage" className="link"><button className="btn-Login" >Sign Up</button></Link> 
          </div> 
        </div>
        <div className='customer-login'>
            <p>Already have an account? <Link to="/Customers-CustomerLogin"className='account-login'>Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default CustomerSignup