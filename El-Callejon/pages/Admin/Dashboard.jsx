import {Link} from 'react-router-dom'
import logoAdmin from '../assets/El_Calejon.jpg'

function Dashboard() {
  return(
    <>
      <div className="Dashboard-page">
        <div className="side-bar">
          <img className="Logo-Admin" src={logoAdmin} />
          <ul className='List'>
            <li className='navigations'><a href="">awddw</a></li>
            <li className='navigations'>adawadw</li>
            <li className='navigations'>adwd</li>
            <li className='navigations'>awdawd</li>
            <li className='navigations'>awda</li>
            <li className='navigations'>awdawd</li>
          </ul>
          <div className="navbar">
            <h1 className='Dashboard-text'>DASHBOARD</h1>
          </div>
          <div className='outer-box'>
            <div className='notif-box'>
              <Link to="/POS" className="Link-to-pos">
                <div className='notif'>
                  <span className='new-order-text'>New Orders:</span> You have 4 new online orders. Check the Orders section to prepare them!
                </div>
              </Link> 
            </div>
          </div>
            
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard