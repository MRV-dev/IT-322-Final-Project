import { useLocation, Link } from 'react-router-dom';
import React, { useState } from 'react';
import logoAdmin from '../assets/El_Calejon.jpg';
import '../Admin/admin-css/reports.css'
import { TbLogout2, TbReportSearch } from 'react-icons/tb';   
import { MdDeliveryDining } from 'react-icons/md'; 
import { FaThLarge, FaTimes, FaBars, FaUtensils, FaClipboardList, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Reports() {
  const { pathname } = useLocation();
  const [showGraphsModal, setShowGraphsModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('April');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedTimeRange, setSelectedTimeRange] = useState('Jan-Dec');
  const [currentView, setCurrentView] = useState('topSelling');
  const [searchText, setSearchText] = useState('');
  const [selectedOrderType, setSelectedOrderType] = useState('All');
  const [selectedDateFilter, setSelectedDateFilter] = useState('April');

  const topSellingData = [
    { name: 'Lomi', value: 200, color: '#FF5722' },
    { name: 'Spaghetti', value: 400, color: '#FFC107' },
    { name: 'Palabok', value: 300, color: '#00D1B2' },
    { name: 'Sweet & Spicy', value: 100, color: '#7B68EE' }
  ];

  const monthlySalesData = [
    { name: 'Jan', sales: 1200 },
    { name: 'Feb', sales: 1500 },
    { name: 'Mar', sales: 1800 },
    { name: 'Apr', sales: 2100 },
    { name: 'May', sales: 2400 },
    { name: 'Jun', sales: 2700 },
    { name: 'Jul', sales: 3000 },
    { name: 'Aug', sales: 2800 },
    { name: 'Sep', sales: 2500 },
    { name: 'Oct', sales: 2200 },
    { name: 'Nov', sales: 1900 },
    { name: 'Dec', sales: 1600 }
  ];
  const PIE_COLORS = ['#FF5722', '#FFC107', '#00D1B2', '#7B68EE'];

  const orders = [
    {
      id: '00112',
      date: '2025-04-10',
      customer: 'Juan Dela Cruz',
      type: 'Online',
      items: 'Palabok (L) x1',
      amount: '₱220',
      payment: 'GCash',
      status: 'Completed',
    },
    {
      id: '0089',
      date: '2025-04-10',
      customer: '',
      type: 'Walk-in',
      items: 'Lomi x2',
      amount: '₱180',
      payment: 'Cash',
      status: 'Completed',
    },
  ];

  const handleSwitchView = () => {
    const views = ['topSelling', 'monthlySales'];
    const currentIndex = views.indexOf(currentView);
    const nextIndex = (currentIndex + 1) % views.length;
    setCurrentView(views[nextIndex]);
  };

  const renderGraphsModal = () => {
    if (!showGraphsModal) return null;

    return (
      <div className="graphs-modal-overlay">
        <div className="graphs-modal-container">
          <button className="close-btn" onClick={() => setShowGraphsModal(false)}>
            <FaTimes />
          </button>

          <button className="switch-view-btn" onClick={handleSwitchView}>Switch View</button>

          <div className="graph-content-wrapper">
            <div className="graph-header-controls">
              <h2>
                {currentView === 'topSelling' && 'Top-Selling Items'}
                {currentView === 'monthlySales' && 'Monthly Sales'}
              </h2>

              {currentView === 'topSelling' && (
                <div className="month-selector">
                  <label>Month:</label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
              )}

              {currentView === 'monthlySales' && (
                <div className="year-time-range-selectors">
                  <label>Select Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </select>
                  <label>Time Range</label>
                  <select
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                  >
                    <option value="Jan-Dec">Jan-Dec</option>
                    <option value="Jan-Jun">Jan-Jun</option>
                    <option value="Jul-Dec">Jul-Dec</option>
                  </select>
                </div>
              )}
            </div>

            <div className="graph-visualization">
              {currentView === 'topSelling' && (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topSellingData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={70}
                      fill="#8884d8"
                      dataKey="value"
                      labelLine={false}>
                      {topSellingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="vertical" verticalAlign="middle" align="left" wrapperStyle={{ paddingLeft: '20px' }} />
                  </PieChart>
                </ResponsiveContainer>
              )}

              {currentView === 'monthlySales' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlySalesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#4CAF50" name="Sales (₱)" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return(
    <>
      <div className="whole-page">

        <div className="side-bar">
          <img className="Logo-Dashboard" src={logoAdmin} alt="El Calejon Logo" />
          <ul className='List'>
            <li className='navigations'>
              <Link to="/Admin-Dashboard"
              className={`nav ${pathname === '/Admin-Dashboard' ? 'dashboard-active' : ''}`}>
                <FaThLarge className='nav-icons'/></Link>
            </li>

            <li className='navigations'>
              <Link to="/Admin-Reports"
              className={`nav ${pathname === '/Admin-Reports' ? 'reports-active' : ''}`}>
                <TbReportSearch className='nav-icons' />
              </Link>
            </li>

            <li className='navigations'>
              <Link to="/Admin-OnlineOrders"
              className={`nav ${pathname === '/Admin-OnlineOrders' ? 'online-orders-active' : ''}`}>
                <MdDeliveryDining className='nav-icons'/>
              </Link>
            </li>

            <li className='navigations'>
              <Link to="/Admin-Settings"
              className={`nav ${pathname === '/Admin-Settings' ? 'settings-active' : ''}`}>
                <FaCog className='nav-icons'/></Link>
            </li>

            <hr className='line'/>

            <Link to="/Admin-Login" className="logout-nav-item">
                <TbLogout2 style={{MarginLeft: '-70px'}} className="nav-icons" />
            </Link>
          </ul>
        </div>

          
        <div className='part'>
          <div className='nav-section'>
            <div className="navbar">
              <h1 className='Dashboard-text'><FaClipboardList style={{ marginTop: '-9px', marginRight: '10px', height: '43px', width: '43px', }} />Reports</h1>
            </div>
          </div>

          <div className="main-content-reports">
            <div className="overview-container-reports">
              <div className="filters">
                <button
                  className="view-graphs-btn"
                  onClick={() => setShowGraphsModal(true)}>View Graphs</button>

                <div className="filter-controls-container">
                  <div className="filter-group-item">
                    <label>Search:</label>
                    <input
                      type="text"
                      className="filter-input search-input"
                      placeholder=""
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>

                  <div className="filter-group-item">
                    <label>Date:</label>
                    <select
                      className="filter-select"
                      value={selectedDateFilter}
                      onChange={(e) => setSelectedDateFilter(e.target.value)}
                    >
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                  </div>

                  <div className="filter-group-item">
                    <label>Order Type:</label>
                    <select
                      className="filter-select"
                      value={selectedOrderType}
                      onChange={(e) => setSelectedOrderType(e.target.value)}
                    >
                      <option>All</option>
                      <option>Online</option>
                      <option>Walk-in</option>
                    </select>
                  </div>
                </div>

              </div>

              <div className="reports-table-container">
                <div className="table-responsive">
                  <table className="reports-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Order Placed</th>
                        <th>Customer Name</th>
                        <th>Order Type</th>
                        <th>Items</th>
                        <th>Total Amount</th>
                        <th>Payment Method</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={index}>
                          <td>{order.id}</td>
                          <td>{order.date}</td>
                          <td>{order.customer || ''}</td>
                          <td>{order.type}</td>
                          <td>{order.items}</td>
                          <td>{order.amount}</td>
                          <td>{order.payment || ''}</td>
                          <td className={`status-${order.status.toLowerCase()}`}>{order.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {renderGraphsModal()}
      </div>
    </>
  );
};

export default Reports;