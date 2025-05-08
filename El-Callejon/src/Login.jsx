import Logo from './assets/El Calejon.jpg'

function Login(){
  return(
    <>
      <img className='logo-img' src={Logo} alt="" />
      <div className="Admin-Login">
        <div className="container">
          <input className="username" type="text" placeholder="Username"/>
          <input className="password" type="text" placeholder="Enter Password"/>
          <button className="Login">Log In</button>
        </div>    
      </div>
    </>
  )
}

export default Login