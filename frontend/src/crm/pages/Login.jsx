import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../crm.css';

const API = import.meta.env.VITE_API_URL || '';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('crm_token', data.token);
        navigate('/crm');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
  };

  return (
    <div className="crm-login-container">
      <div className="crm-login-card">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Stromex CRM Login</h2>
        {error && <div style={{ color: 'var(--crm-danger)', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="crm-input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="crm-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="crm-btn" style={{ width: '100%', marginTop: '10px' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
