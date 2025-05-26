import {useLocation, Link} from 'react-router-dom'
import { useState } from 'react'
import logoAdmin from '../assets/El_Calejon.jpg'
import '../Admin/admin-css/Setting.css'
import { FaThLarge, FaCog } from 'react-icons/fa';              
import { TbLogout2, TbReportSearch } from 'react-icons/tb';   
import { MdDeliveryDining } from 'react-icons/md'; 



function Settings() { 
  // const [activeNav, setActiveNav] = useState('dashboard');
  const location = useLocation();
  const pathname = location.pathname;

  const [menuItems, setMenuItems] = useState([]);
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [portion, setPortion] = useState("");
  const [image, setImage] = useState(null);

  const addMenuItem = () => {
    if (menuName && price && category && portion && image) {
      const newItem = { menuName, price, category, portion, image };
      setMenuItems([...menuItems, newItem]);
      setMenuName("");
      setPrice("");
      setCategory("");
      setPortion("");
      setImage(null);
    }
  };

  return(
    <>
      <div className="whole-page">
        <div className="side-bar">
          <img className="Logo-Dashboard" src={logoAdmin} />
          <ul className='List'>
            <li className='navigations'>
              <Link to="/Admin-Dashboard"
                className={`nav ${pathname === '/Admin-Dashboard' ? 'dashboard-active' : ''}`}>
              <FaThLarge className='nav-icons'/></Link> </li>
        
              <li className='navigations'>
                <Link to="/Admin-Reports"
                className={`nav ${pathname === '/Admin-Reports' ? 'reports-active' : ''}`}>
              <TbReportSearch className='nav-icons' /></Link> </li>
                    
              <li className='navigations'>
                <Link to="/Admin-OnlineOrders"
                className={`nav ${pathname === '/Admin-OnlineOrders' ? 'online-orders-active' : ''}`}>
                  <MdDeliveryDining className='nav-icons'/></Link> </li>
              
              <li className='navigations'>
                <Link to="/Admin-Settings"
                className={`nav ${pathname === '/Admin-Settings' ? 'settings-active' : ''}`}>
                  <FaCog className='nav-icons'/></Link> </li>
              
              <hr className='line'/>
              
              <Link to="/Admin-Login">
                <TbLogout2 style={{ marginLeft: '-1px', marginTop: '8px', height: '43px', width: '43px', color: 'black'}} /></Link>
          </ul>
        </div>
          
        <div className='part'>
            <div className='nav-section'>
              <div className="navbar">
              <h1 className='settings-text'><FaCog style={{ marginTop: '-9px', marginRight: '0px', height: '43px', width: '43px', }} />Configurations and Preferences</h1>
            </div>
          </div>
          
          <div className='main-content-dashboard'>
            <div className='overview-container'>
              <div className="config">
                <div className='switchd'>
                  <button className='Manage'>manage menu</button>
                  <button className='info'>business info</button>
                </div>
                <div className="options">
                  <input className='add-menu' type="text" placeholder="Menu Name" value={menuName} onChange={(e) => setMenuName(e.target.value)} />
                  <input className='add-Price' type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                  <select className='add-category' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="Bilao">Bilao</option>
                    <option value="Main Course">Dessert</option>
                  </select>
                  <select className='select-portion' value={portion} onChange={(e) => setPortion(e.target.value)}>
                    <option value="">Select Portion</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                  </select>
                  <input className='add-file' type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                  <div className='add-new-menu'>
                    <button className='add-menu-btn' onClick={addMenuItem}>ADD</button>
                  </div>
                </div>
                <table className="menu-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Portion</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.length === 0 ? (
                      <tr className="empty-row">
                        <td colSpan="5">No menu items added yet.</td>
                      </tr>
                    ) : (
                      menuItems.map((item, index) => (
                        <tr key={index}>
                          <td>{item.menuName}</td>
                          <td>{item.price}</td>
                          <td>{item.category}</td>
                          <td>{item.portion}</td>
                          <td>
                            <img src={URL.createObjectURL(item.image)} alt={item.menuName} width="50" height="50"/>
                          </td>
                        </tr>
                      ))
                    )}
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

export default Settings