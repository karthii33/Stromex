import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../crm.css';

const CRMLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('crm_token');
    navigate('/crm/login');
  };

  return (
    <div className="crm-layout">
      <aside className="crm-sidebar">
        <div className="crm-brand">Stromex CRM</div>
        <nav className="crm-nav">
          <NavLink to="/crm" end className={({isActive}) => isActive ? 'crm-nav-link active' : 'crm-nav-link'}>Dashboard</NavLink>
          <NavLink to="/crm/leads" className={({isActive}) => isActive ? 'crm-nav-link active' : 'crm-nav-link'}>Leads</NavLink>
          <NavLink to="/crm/customers" className={({isActive}) => isActive ? 'crm-nav-link active' : 'crm-nav-link'}>Customers</NavLink>
          <NavLink to="/crm/tickets" className={({isActive}) => isActive ? 'crm-nav-link active' : 'crm-nav-link'}>Tickets</NavLink>
          <NavLink to="/crm/messages" className={({isActive}) => isActive ? 'crm-nav-link active' : 'crm-nav-link'}>📬 Messages</NavLink>
        </nav>
        <div style={{ marginTop: 'auto', padding: '0 16px' }}>
          <button onClick={handleLogout} className="crm-btn crm-btn-danger" style={{ width: '100%' }}>Logout</button>
        </div>
      </aside>
      <main className="crm-content">
        <Outlet />
      </main>
    </div>
  );
};

export default CRMLayout;
