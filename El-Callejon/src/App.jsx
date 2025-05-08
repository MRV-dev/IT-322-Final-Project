import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/Admin/Login.jsx'
import POS from '../pages/Admin/POS.jsx'
import Dashboard from '../pages/Admin/Dashboard.jsx'
import OnlineOrders from '../pages/Admin/OnlineOrders.jsx'
import Reports from '../pages/Admin/Reports.jsx'
import Settings from '../pages/Admin/Settings.jsx'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/POS" element={<POS/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Reports" element={<Reports/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Online-Orders" element={<OnlineOrders/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
