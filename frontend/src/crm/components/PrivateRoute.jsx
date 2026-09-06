import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('crm_token');
  return token ? <Outlet /> : <Navigate to="/crm/login" replace />;
};

export default PrivateRoute;
