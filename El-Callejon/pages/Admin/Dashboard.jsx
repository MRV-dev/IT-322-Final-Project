import {Link} from 'react-router-dom'
import logoAdmin from '../assets/El_Calejon.jpg'
import '../Admin/Dashboard.css'
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
  return(
    <>
      <div className="whole-page">
        <div className="side-bar">
          <img className="Logo-Admin" src={logoAdmin} />
          <ul className='List'>
            <li className='navigations'><a href="">awddw</a></li>
            <li className='navigations'><a href="">adawadw</a></li>
            <li className='navigations'><a href=""></a> adwd</li>
            <li className='navigations'><a href="/Reports">awdawd</a></li>
            <li className='navigations'><a href=""></a> awda</li>
            <hr className='line'/>
            <a href='/Login' className='Logout'>Logout</a>
          </ul>
        </div>
          
        <div className='part'>
            <div className='nav-section'>
              <div className="navbar">
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
              <div className='LineChart' style={{ width: '67.5%', height: 300, marginTop: '10px' }}>
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
          </div>
        </div> 
      </div>
    </>
  )
}

export default Dashboard