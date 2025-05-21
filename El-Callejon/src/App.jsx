import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Admin/Login.jsx'
import Dashboard from '../pages/Admin/Dashboard.jsx';
import Reports from '../pages/Admin/Reports.jsx'
import OnlineOrders from '../pages/Admin/OnlineOrders.jsx'
import Settings from '../pages/Admin/settings.jsx'
import POS from '../pages/Admin/POS.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerLogin from '../pages/Customers/CustomerLogin.jsx'
import CustomerSignup from '../pages/Customers/customerSignup.jsx';
import LandingPage from '../pages/Customers/LandingPage.jsx';
import OrderNow from '../pages/Customers/OrderNow.jsx'
import Contact from '../pages/Customers/Contact.jsx'
import Account from '../pages/Customers/Account.jsx';
import Password from '../pages/Customers/Password.jsx';
import Orders from '../pages/Customers/Orders.jsx';
import Orderhistory from '../pages/Customers/Orderhistory.jsx';
import Notification from '../pages/Customers/Notification.jsx';



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
          <Route path="/Admin-POS" element={<POS/>} />


          {/* Customer */}
          <Route path="/Customers-CustomerLogin" element={<CustomerLogin />} />
          <Route path="/Customers-CustomerSignup" element={<CustomerSignup />} />
          <Route path="/Customers-LandingPage" element={<LandingPage />} />
          <Route path="/Customers-OrderNow" element={<OrderNow />} />
          <Route path="/Customers-Contact" element={<Contact />} />
          <Route path="/Customers-Account" element={<Account />} />
          <Route path="/Customers-Password" element={<Password />} />
          <Route path="/Customers-Orders" element={<Orders />} />
          <Route path="/Customers-Orderhistory" element={<Orderhistory />} />
          <Route path="/Customers-Notification" element={<Notification />} />

          {/* 404 fallback route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    </>
  );
}

export default App;
