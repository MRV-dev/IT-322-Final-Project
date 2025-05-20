import {Link} from 'react-router-dom'
import {useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import '../Customers/customer-css/Customer-signup.css'
import Logo from '../assets/El_Calejon.jpg'

function Customersignup (){

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return(
    <>
      <div className='logIn-page'>
        <div className='logo-row'>
          <img className='logo' src={Logo} alt="" />
        </div>
        <div className="Customer-Signup">
          <div className="container">
            <h2 className='Signup-Text'>LomiHub</h2>
            <input className="username" type="text" placeholder="Email"/>
            <div className="password-wrapper">
              <input className="password" type={showPassword ? "text" : 'password'} placeholder="Enter Password"/>
              <span onClick={togglePasswordVisibility} className="eye-icon1">{showPassword ? <FaEyeSlash/> : <FaEye/>}</span>
              <input className="password" type={showPassword ? "text" : 'password'} placeholder="Comfirm Password"/>
              <span onClick={togglePasswordVisibility} className="eye-icon2">{showPassword ? <FaEyeSlash/> : <FaEye/>}</span>
            </div>
            <a className='nav-to-customer' href="">Admin</a>
            <Link to="/LandingPage" className="link"><button className="btn-Login" >Sign Up</button></Link> 
          </div> 
        </div>
        <div >
            <p className='customer-Login'>Already have an account? <a href="" className='account-login'>Login</a></p>
        </div>
      </div>
    </>
  )
}

export default Customersignup