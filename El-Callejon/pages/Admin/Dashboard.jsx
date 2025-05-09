import logoAdmin from '../assets/El_Calejon.jpg'

function Dashboard() {
  return(
    <>
      <div className="Dashboard-page">
        <div className="side-bar">
          <img className="Logo-Admin" src={logoAdmin} />
          <div className="navbar">
            <h1 className='Dashboard-text'>DASHBOARD</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard