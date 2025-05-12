import logoAdmin from '../assets/El_Calejon.jpg'

const reportData = [
  {
    orderId: '00112',
    orderPlaced: '2025-04-10',
    customerName: 'Juan Dela Cruz',
    orderType: 'Online',
    items: 'Palabok (L) x1',
    totalAmount: '₱220',
    paymentMethod: 'GCash',
    status: 'Completed',
  },
  {
    orderId: '0089',
    orderPlaced: '2025-04-10',
    customerName: '',
    orderType: 'Walk-in',
    items: 'Lomi x2',
    totalAmount: '₱180',
    paymentMethod: '',
    status: 'Completed',
  },
];

function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <img className="Logo-Admin" src={logoAdmin} />
      <button style={sidebarButtonStyle}>Icon 1</button>
      <button style={sidebarButtonStyle}>Icon 2</button>
      <button style={sidebarButtonStyle}>Icon 3</button>
      <button style={sidebarButtonStyle}>Icon 4</button>
      <button style={sidebarButtonStyle}>Icon 5</button>
      <button style={logoutButtonStyle}>Logout Icon</button>
    </div>
  );
}

function TopNav() {
  return (
    <div style={topNavStyle}>
      <div style={reportsTitleStyle}>Reports</div>
    </div>
  );
}

function Header() {
  return (
    <div style={headerStyle}>
      <button style={viewGraphsButtonStyle}>View Graphs</button>
    </div>
  );
}

function Filters() {
  return (
    <div style={filtersStyle}>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" style={inputStyle} />
      <label htmlFor="date">Date:</label>
      <select id="date" style={selectStyle}>
        <option>April</option>
        {}
      </select>
      <label htmlFor="orderType">Order Type:</label>
      <select id="orderType" style={selectStyle}>
        <option>All</option>
        <option>Online</option>
        <option>Walk-in</option>
        {}
      </select>
    </div>
  );
}

function TableRow({ order }) {
  return (
    <tr style={tableRowStyle}>
      <td style={tableCellStyle}>{order.orderId}</td>
      <td style={tableCellStyle}>{order.orderPlaced}</td>
      <td style={tableCellStyle}>{order.customerName}</td>
      <td style={tableCellStyle}>{order.orderType}</td>
      <td style={tableCellStyle}>{order.items}</td>
      <td style={tableCellStyle}>{order.totalAmount}</td>
      <td style={tableCellStyle}>{order.paymentMethod}</td>
      <td style={tableCellStyle}>{order.status}</td>
    </tr>
  );
}

function ReportTable({ data }) {
  return (
    <table style={tableStyle}>
      <thead>
        <tr style={tableHeaderRowStyle}>
          <th style={tableHeaderCellStyle}>Order ID</th>
          <th style={tableHeaderCellStyle}>Order Placed</th>
          <th style={tableHeaderCellStyle}>Customer Name</th>
          <th style={tableHeaderCellStyle}>Order Type</th>
          <th style={tableHeaderCellStyle}>Items</th>
          <th style={tableHeaderCellStyle}>Total Amount</th>
          <th style={tableHeaderCellStyle}>Payment Method</th>
          <th style={tableHeaderCellStyle}>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order) => (
          <TableRow key={order.orderId} order={order} />
        ))}
      </tbody>
    </table>
  );
}

function ReportsPage() {
  return (
    <div style={pageContainerStyle}>
      <Sidebar />
      <div style={contentContainerStyle}>
        <TopNav />
        <Header />
        <Filters />
        <ReportTable data={reportData} />
      </div>
    </div>
  );
}

const pageContainerStyle = {
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0',
};

const contentContainerStyle = {
  flex: 1,
  padding: '20px',
};

const sidebarStyle = {
  width: '80px',
  backgroundColor: '#f8f8f8',
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const sidebarButtonStyle = {
  padding: '15px',
  marginBottom: '10px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const logoutButtonStyle = {
  marginTop: 'auto',
  padding: '15px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const topNavStyle = {
  backgroundColor: '#ffda63',
  padding: '15px 20px',
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
};

const reportsTitleStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '20px',
};

const viewGraphsButtonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#ffed4a',
  color: '#333',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const filtersStyle = {
  marginBottom: '20px',
  padding: '15px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const selectStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const tableHeaderRowStyle = {
  backgroundColor: '#f0f0f0',
};

const tableHeaderCellStyle = {
  padding: '12px',
  borderBottom: '2px solid #ccc',
  textAlign: 'left',
  fontWeight: 'bold',
};

const tableRowStyle = {
  '&:nth-child(even)': {
    backgroundColor: '#f9f9f9',
  },
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee',
};

export default ReportsPage;