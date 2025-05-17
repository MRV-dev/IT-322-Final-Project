import {Link} from 'react-router-dom'
import { useState } from 'react'
import logoAdmin from '../assets/El_Calejon.jpg'
import '../Admin/Dashboard.css'
import { FaThLarge } from 'react-icons/fa';
import Lomi from '../assets/Lomi.png'
import Palabok from '../assets/Palabok.png'
import Tapsilog from '../assets/Tapsilog.png'
import Bihon from '../assets/Bihon.png'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


const data = [
  { name: 'Mon', sales: 400 },
  { name: 'Tue', sales: 300 },
  { name: 'Wed', sales: 500 },
  { name: 'Thu', sales: 700 },
  { name: 'Fri', sales: 600 },
  { name: 'Sat', sales: 800 },
  { name: 'Sun', sales: 750 },
];



function Dashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');
  return(
    <>
      <div className="whole-page">
        <div className="side-bar">
          <img className="Logo-Admin" src={logoAdmin} />
          <ul className='List'>
            <li className='navigations'>
              <a 
              onClick={() => setActiveNav('dashboard')}
              className={activeNav === 'dashboard' ? 'nav active' : 'nav'}>
                <FaThLarge style={{ marginRight: '0px', height: '43px', width: '43px', color: 'black'}} /></a></li>

            <li className='navigations'>
              <a 
              onClick={() => setActiveNav('Reports')}
              className={activeNav === 'reports' ? 'nav active' : 'nav'}>
                <FaThLarge style={{ marginRight: '0px', height: '43px', width: '43px', color: 'black' }} /></a></li>
            
            <li className='navigations'>
              <a 
              onClick={() => setActiveNav('Online-Orders')}
              className={activeNav === 'Online-Orders' ? 'nav active' : 'nav'}>
                <FaThLarge style={{ marginRight: '0px', height: '43px', width: '43px', color: 'black'}} /></a></li>
            
            <li className='navigations'>
              <a
              onClick={() => setActiveNav('Settings')}
              className={activeNav === 'Settings' ? 'nav active' : 'nav'}>
                <FaThLarge style={{ marginLeft: '13px', marginTop: '8px', height: '43px', width: '43px', color: 'black'}} /></a></li>
            
            <hr className='line'/>
            
            <a 
              onClick={() => setActiveNav('Logout')}
              className={activeNav === 'Logout' ? 'nav active' : 'nav'}>
                <FaThLarge style={{ marginRight: '0px', height: '43px', width: '43px', color: 'black'}} /></a>
          </ul>
        </div>
          
        <div className='part'>
            <div className='nav-section'>
              <div className="navbar">
              <FaThLarge style={{ marginRight: '0px', height: '43px', width: '43px', }} />
              <h1 className='Dashboard-text'>DASHBOARD</h1>
            </div>
          </div>
          
          <div className='main-content-dashboard'>
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

              <div className='dashboard-top-section'>
                <div className='left-side'>
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

                  <div className='LineChart' style={{ width: '101.7%', height: 330, marginTop: '10px' }}>
                    <ResponsiveContainer>
                      <LineChart data={data} margin={{ top: 50, right: 30, left: 0, bottom: 0 }}>
                        {/* <CartesianGrid strokeDasharray="0" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="Linear" dataKey="sales" stroke="#007bff" strokeWidth={2.4} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className='right-side'>
                  <div className='Best-Selling'>
                    <h6 className='best-selling-text'>Best Selling</h6>
                    <div className='Best-selling-List'> 
                      <div className='Sold-items'>
                        <img className='Lomi' src={Lomi}/>
                        <p className='Dish-name1'>Lomi</p>
                      </div>
                      <div className='Sold-items'>
                        <img className='Palabok' src={Palabok}/>
                        <p className='Dish-name2'>Palabok</p>
                      </div>
                      <div className='Sold-items'>
                        <img className='Tapsilog' src={Tapsilog}/>
                        <p className='Dish-name3'>Tapsilog</p>
                      </div>
                      <div className='Sold-items'>
                        <img className='Bihon' src={Bihon}/>
                        <p className='Dish-name4'>Bihon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-table">
                <h3 className="recent-orders-title">Recent Orders</h3>
                <table className="recent-orders-table">
                  <thead>
                    <tr>
                      <th>Date and Time</th>
                      <th>Order Type</th>
                      <th>Item</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Apr 13, 11:23 AM</td>
                      <td>Walk-in</td>
                      <td><strong>1x Spaghetti (Medium)</strong></td>
                      <td>₱240</td>
                      <td className="status-completed">Completed</td>
                    </tr>
                    <tr>
                      <td>Apr 13, 10:45 AM</td>
                      <td>Online</td>
                      <td><strong>1x Spaghetti (Medium)</strong></td>
                      <td>₱160</td>
                      <td className="status-delivered">Delivered</td>
                    </tr>
                    {}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Dashboard