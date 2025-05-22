import {Link} from 'react-router-dom'
import {useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import '../Customers/customer-css/Customer-Login.css'
import Logo from '../assets/El_Calejon.jpg'

function CustomerLogin(){

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev); 
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Please enter a valid email address.');
      return false;
    }
  };

  const validatePassword = (password) => {
    // Password validation (minimum length, etc.)  Adjust as needed.
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidEmail && isValidPassword) {
      // Proceed with login logic here...  (e.g., API call)
      console.log('Email:', email, 'Password:', password);
    }
  };

  return(
    <>
      <div className='login-page'>
        <div className='logo-row'>
          <img className='logo' src={Logo} alt="" />
        </div>
        <div className="Customer-Login">
          <div className="container">
            <h2 className='Login-Text'>LomiHub</h2>
            <input className="username" type="text" placeholder="Email"/>
            <div className="password-wrapper">
              <input className="password" type={showPassword ? "text" : 'password'} placeholder="Enter Password"/>
              <span onClick={togglePasswordVisibility} className="eye-icon">{showPassword ? <FaEyeSlash/> : <FaEye/>}</span>
            </div>
            <Link to="/Admin-Login" className="nav-to-admin">Admin</Link> 
            <Link to="/Customers-LandingPage" className="link"><button className="btn-Login" >Log In</button></Link> 
        <div className='customer-register'>
            <p >Don't have an account? <Link to="/Customers-CustomerSignup"className='account-register'>Register</Link></p>
            </div>
          </div>    
        </div>
      </div>
    </>
  )
}

export default CustomerLogin