import {Link} from 'react-router-dom'
import logoAdmin from '../assets/El_Calejon.jpg'

function Dashboard() {
  return(
    <>
      <div className="whole-page">
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
          <hr className='line'/>
        </div>

        <div className='main-content-dashboard'>
          <div className="navbar">
            <h1 className='Dashboard-text'>DASHBOARD</h1>
          </div>
          <div className='overview-container'>
            <div className='notif-position'>
              <div className='outer-box'>
                <div className='notif-box'>
                  <Link to="/POS" className="Link-to-pos">
                    <div className='notif'>
                      <span className='new-order-text'>New Orders:</span> You have 4 new online orders. Check the Orders section to prepare them!
                    </div>
                  </Link> 
                </div>
              </div>
            </div>
            
            <div className='summary-cards'>
              <div className='total-sales-today'>
                <p className='total-sales-text'>Total Sales Today</p>
                <h2 className='total-sales'>₱12,340</h2>
              </div>
              <div className='total-orders-today'>
                <p className='total-orders-text'>Total Orders Today</p>
                <h2 className='total-orders'>55</h2>
              </div>
              <div className='peak-sales-hour'>
                <p className='peak-sales-text'>Peak Sales Hour</p>
                <h2 className='peak-sales'>12PM</h2>
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </>
  )
}

export default Dashboard