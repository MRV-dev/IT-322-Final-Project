import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Orders from '../pages/Customers/OrdersPage.jsx';
import Login from '../pages/Admin/Login.jsx'
import Dashboard from '../pages/Admin/Dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Routes>
          {/* Redirect from / to /dashboard */}
          <Route path="/" element={<Navigate to="/orders" />} />
          
          <Route path="/Login" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />

          {/* Main routes */}
          <Route path="/orders" element={<Orders />} />


          {/* 404 fallback route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    </>
  );
}

export default App;
