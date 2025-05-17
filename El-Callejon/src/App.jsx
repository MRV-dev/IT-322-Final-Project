import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Orders from '../pages/Customers/OrdersPage.jsx';
import Login from '../pages/Admin/Login.jsx'
import Dashboard from '../pages/Admin/Dashboard.jsx';
import Reports from '../pages/Admin/Reports.jsx'
import OnlineOrders from '../pages/Admin/OnlineOrders.jsx'
import Settings from '../pages/Admin/settings.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Routes>
          {}
          <Route path="" element={<Navigate to="/Login" />} />
          
          <Route path="/Login" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Reports" element={<Reports/>} />
          <Route path="/OnlineOrders" element={<OnlineOrders/>} />
          <Route path="/Settings" element={<Settings/>} />

          {/* Main routes */}
          <Route path="/orders" element={<Orders />} />


          {/* 404 fallback route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    </>
  );
}

export default App;
