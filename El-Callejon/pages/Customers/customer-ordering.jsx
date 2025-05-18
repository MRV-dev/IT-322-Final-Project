import Logo from '../assets/El_Calejon.jpg'
import '../Customers/customer-css/customer-ordering.css'
import {Link} from 'react-router-dom'

function CustomerOrder() {
  return(
    <>
      <div className="OnlineOrder">
        <div className="customer-nav">
          <img className='Logo' src={Logo}  />
          <ul className=''>
            <li className=''><Link to='/Home'>dwdad</Link></li>
            
          </ul>
        </div>

      </div>
    
    </>
  )
}

export default CustomerOrder