import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Orders from '../pages/Customers/OrdersPage.jsx';
import Login from '../pages/Admin/Login.jsx'
import Dashboard from '../pages/Admin/Dashboard.jsx';
import Reports from '../pages/Admin/Reports.jsx'
import OnlineOrders from '../pages/Admin/OnlineOrders.jsx'
import Settings from '../pages/Admin/settings.jsx'
import CustomerOrder from '../pages/Customers/customer-ordering.jsx'
import POS from '../pages/Admin/POS.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Routes>
          {}
          <Route path="" element={<Navigate to="/Admin-Login" />} />
          
          {/* Admin */}
          <Route path="/Admin-Login" element={<Login/>} />
          <Route path="/Admin-Dashboard" element={<Dashboard/>} />
          <Route path="/Admin-Reports" element={<Reports/>} />
          <Route path="/Admin-OnlineOrders" element={<OnlineOrders/>} />
          <Route path="/Admin-Settings" element={<Settings/>} />
          <Route path="/POS" element={<POS/>} />


          {/* Customer */}
          <Route path="/El-Callejon-Menu" element={<CustomerOrder />} />
          <Route path="/orders" element={<Orders />} />
          
          {/* 404 fallback route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    </>
  );
}

export default App;
