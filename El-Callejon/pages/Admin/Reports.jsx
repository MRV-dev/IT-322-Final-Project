import { useLocation, Link } from 'react-router-dom';
import React, { useState } from 'react';
import logoAdmin from '../assets/El_Calejon.jpg';
import '../Admin/admin-css/reports.css'; // Make sure this CSS file is styled to match the image
import { FaThLarge, FaTimes, FaBars, FaUtensils, FaClipboardList, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa'; // Added FaUtensils, FaClipboardList, FaCog, FaSignOutAlt, FaSearch for better icon representation based on the image, though exact icons aren't clear from the image.
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Reports() {
  const { pathname } = useLocation();
  const [showGraphsModal, setShowGraphsModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('April');
  const [currentView, setCurrentView] = useState('topSelling');
  const [searchText, setSearchText] = useState(''); // Added state for search input
  const [selectedOrderType, setSelectedOrderType] = useState('All'); // State for Order Type filter
  const [selectedDateFilter, setSelectedDateFilter] = useState('April'); // State for Date filter

  // Data for the graphs - keeping as is, styling will make them look like the image if a modal is implemented
  const topSellingData = [
    { name: 'Spaghetti', value: 400 },
    { name: 'Palabok', value: 300 },
    { name: 'Lomi', value: 200 },
    { name: 'Sisig & Spicy', value: 100 }
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

  const COLORS = ['#4CAF50', '#FFC107', '#FF5722', '#9C27B0'];

  const orders = [
    {
      id: '00112',
      date: '2025-04-10',
      customer: 'Juan Dela Cruz', // Changed to "Dela Cruz" as in image
      type: 'Online',
      items: 'Palabok (L) x1', // Changed to "Palabok (L) x1" as in image
      amount: '₱220', // Changed to "₱" as in image
      payment: 'GCash',
      status: 'Completed',
    },
    {
      id: '0089',
      date: '2025-04-10',
      customer: '',
      type: 'Walk-in',
      items: 'Lomi x2',
      amount: '₱180', // Changed to "₱" as in image
      payment: '',
      status: 'Completed',
    },
    // Add more order data here to fill the table as in the image if necessary
  ];

  const handleSwitchView = () => {
    const views = ['topSelling', 'monthlySales'];
    const currentIndex = views.indexOf(currentView);
    const nextIndex = (currentIndex + 1) % views.length;
    setCurrentView(views[nextIndex]);
  };

  const renderGraphsModal = () => {
    // The image doesn't show the graphs modal, but your current code includes it.
    // I'll keep the modal functionality as is, assuming it will pop up.
    // The styling of this modal is critical for it to look good.
    if (!showGraphsModal) return null;

    return (
      <div className="graphs-modal-overlay">
        <div className="graphs-modal-container">
          <div className="graphs-modal-header">
            <h2>
              {currentView === 'topSelling' && 'Top Selling Items'}
              {currentView === 'monthlySales' && 'Monthly Sales'}
            </h2>
            <button className="close-btn" onClick={() => setShowGraphsModal(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="graphs-modal-body">
            <button className="switch-view-btn" onClick={handleSwitchView}>Switch View</button>

            <div className="month-selector">
              <label>Month:</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
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

            <div className="graph-visualization">
              {currentView === 'topSelling' && (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={topSellingData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {topSellingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}

              {currentView === 'monthlySales' && (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={monthlySalesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#4CAF50" name="Sales (₱)" /> {/* Changed to ₱ */}
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            <p className="graph-footer">Showing data for {selectedMonth} 2025</p>
          </div>
        </div>
      </div>
    );
  };

  return(
    <>
      <div className="whole-page">
        {/* Left Sidebar - Yellow background as in the image */}
        <div className="side-bar">
          <img className="Logo-Dashboard" src={logoAdmin} alt="El Calejon Logo" />
          <ul className='List'>
            {/* Dashboard Icon */}
            <li className='navigations'>
              <Link to="/Admin-Dashboard"
              className={`nav ${pathname === '/Admin-Dashboard' ? 'dashboard-active' : ''}`}>
                <FaThLarge className='nav-icons'/></Link>
            </li>

            {/* Reports Icon - Highlighted in the image */}
            <li className='navigations'>
              <Link to="/Admin-Reports"
              className={`nav ${pathname === '/Admin-Reports' ? 'reports-active' : ''}`}>
                <FaClipboardList className='nav-icons' /> {/* Assuming this icon for reports */}
              </Link>
            </li>

            {/* Online Orders Icon */}
            <li className='navigations'>
              <Link to="/Admin-OnlineOrders"
              className={`nav ${pathname === '/Admin-OnlineOrders' ? 'online-orders-active' : ''}`}>
                <FaUtensils className='nav-icons'/> {/* Assuming this icon for orders */}
              </Link>
            </li>

            {/* Settings Icon */}
            <li className='navigations'>
              <Link to="/Admin-Settings"
              className={`nav ${pathname === '/Admin-Settings' ? 'settings-active' : ''}`}>
                <FaCog className='nav-icons'/></Link>
            </li>

            <hr className='line'/> {/* Separator line */}

            {/* Logout Icon */}
            <Link to="/Admin-Login" className="logout-nav-item"> {/* Added class for potential styling */}
                <FaSignOutAlt className="nav-icons" /> {/* Assuming this icon for logout */}
            </Link>
          </ul>
        </div>

        {/* Right Content Area */}
        <div className='part'>
          {/* Top Navbar Section - Dark Yellow/Orange as in the image */}
          <div className='nav-section'>
            <div className="navbar">
              {/* Reports Title */}
              <h1 className='Dashboard-text'><FaClipboardList style={{ marginTop: '-9px', marginRight: '10px', height: '43px', width: '43px', }} />Reports</h1> {/* Icon should match the sidebar reports icon */}
            </div>
          </div>

          {/* Main Content Area - White background as in the image */}
          <div className="main-content-reports">
            <div className="overview-container-reports">
              <div className="filters">
                {/* View Graphs Button - Yellow background as in the image */}
                <button
                  className="view-graphs-btn"
                  onClick={() => setShowGraphsModal(true)}
                >
                  View Graphs
                </button>

                {/* Search and Filter Section */}
                <div className="search-and-filters-container"> {/* New container for search and filters */}
                  <div className="search-section">
                    <strong>Search:</strong>
                    <input
                      type="text"
                      className="search-input"
                      placeholder=""
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>

                  <div className="date-and-order-type-filters"> {/* New container for date and order type */}
                    <div className="filter-group">
                      <label>Date:</label>
                      <select
                        className="filter-select"
                        value={selectedDateFilter}
                        onChange={(e) => setSelectedDateFilter(e.target.value)}
                      >
                        <option>April</option>
                        <option>May</option>
                        {/* Add more months/dates as needed */}
                      </select>
                    </div>

                    <div className="filter-group">
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
              </div>

              {/* Reports Table Container */}
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
                          <td>{order.customer || ''}</td> {/* Display empty string if no customer */}
                          <td>{order.type}</td>
                          <td>{order.items}</td>
                          <td>{order.amount}</td>
                          <td>{order.payment || ''}</td> {/* Display empty string if no payment method */}
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

        {/* Render Graphs Modal if showGraphsModal is true */}
        {renderGraphsModal()}
      </div>
    </>
  );
};

export default Reports;