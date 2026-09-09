import { useCallback, useEffect, useState } from 'react';
import '../crm.css';

const API = import.meta.env.VITE_API_URL || '';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [recentLeads, setRecentLeads] = useState([]);
  const [recentTickets, setRecentTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [barWidths, setBarWidths] = useState({ leads: '0%', customers: '0%', tickets: '0%' });

  const token = localStorage.getItem('crm_token');
  const headers = { Authorization: `Bearer ${token}` };

  const fetchDashboard = useCallback(async () => {
    try {
      const [statsRes, leadsRes, ticketsRes] = await Promise.all([
        fetch(`${API}/api/dashboard`, { headers }),
        fetch(`${API}/api/leads?limit=5`, { headers }),
        fetch(`${API}/api/tickets?limit=5`, { headers }),
      ]);
      const [statsData, leadsData, ticketsData] = await Promise.all([
        statsRes.json(),
        leadsRes.json(),
        ticketsRes.json(),
      ]);
      if (statsData) setStats(statsData);
      if (Array.isArray(leadsData)) setRecentLeads(leadsData.slice(0, 5));
      if (Array.isArray(ticketsData)) setRecentTickets(ticketsData.slice(0, 5));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  // Animate bar widths after stats load
  useEffect(() => {
    if (!stats) return;
    const timer = setTimeout(() => {
      setBarWidths({
        leads: `${Math.min((stats.newLeads / 100) * 100, 100)}%`,
        customers: `${Math.min((stats.totalCustomers / 200) * 100, 100)}%`,
        tickets: `${Math.min((stats.openTickets / 50) * 100, 100)}%`,
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [stats]);

  const statusColors = { Open: '#ef4444', 'In Progress': '#f59e0b', Closed: '#10b981' };
  const leadStatusColors = { New: '#016FE2', Contacted: '#8b5cf6', Qualified: '#10b981', Lost: '#ef4444' };

  return (
    <div className="crm-container">
      <div className="crm-header">
        <h1 className="crm-title">Dashboard</h1>
      </div>

      {loading ? (
        <p style={{ color: 'var(--crm-text-muted)' }}>Loading dashboard…</p>
      ) : (
        <>
          {/* KPI Cards */}
          <div className="crm-stats-grid">
            <div className="crm-card">
              <p className="crm-stat-label">New Leads</p>
              <p className="crm-stat-value" style={{ color: '#016FE2' }}>{stats?.newLeads ?? '—'}</p>
            </div>
            <div className="crm-card">
              <p className="crm-stat-label">Total Customers</p>
              <p className="crm-stat-value" style={{ color: '#10b981' }}>{stats?.totalCustomers ?? '—'}</p>
            </div>
            <div className="crm-card">
              <p className="crm-stat-label">Open Tickets</p>
              <p className="crm-stat-value" style={{ color: '#f59e0b' }}>{stats?.openTickets ?? '—'}</p>
            </div>
            <div className="crm-card">
              <p className="crm-stat-label">Messages</p>
              <p className="crm-stat-value" style={{ color: '#8b5cf6' }}>{stats?.totalMessages ?? '—'}</p>
            </div>
          </div>

          {/* Overview Chart */}
          <div className="crm-card crm-chart-section">
            <h2 className="crm-chart-title">Overview</h2>
            <div className="crm-bar-chart">
              <div className="crm-bar-row">
                <span className="crm-bar-label">New Leads</span>
                <div className="crm-bar-track">
                  <div className="crm-bar-fill" style={{ width: barWidths.leads, background: '#016FE2' }}>
                    {stats?.newLeads ?? 0}
                  </div>
                </div>
              </div>
              <div className="crm-bar-row">
                <span className="crm-bar-label">Customers</span>
                <div className="crm-bar-track">
                  <div className="crm-bar-fill" style={{ width: barWidths.customers, background: '#10b981' }}>
                    {stats?.totalCustomers ?? 0}
                  </div>
                </div>
              </div>
              <div className="crm-bar-row">
                <span className="crm-bar-label">Open Tickets</span>
                <div className="crm-bar-track">
                  <div className="crm-bar-fill" style={{ width: barWidths.tickets, background: '#f59e0b' }}>
                    {stats?.openTickets ?? 0}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
            {/* Recent Leads */}
            <div className="crm-card">
              <h2 className="crm-chart-title">Recent Leads</h2>
              {recentLeads.length === 0 ? (
                <p style={{ color: 'var(--crm-text-muted)', fontSize: '0.9rem' }}>No leads yet.</p>
              ) : (
                <div className="crm-table-container">
                  <table className="crm-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentLeads.map(lead => (
                        <tr key={lead.id}>
                          <td style={{ fontWeight: 500 }}>{lead.name}</td>
                          <td>
                            <span className="crm-badge" style={{ background: leadStatusColors[lead.status] || '#64748b' }}>
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Recent Tickets */}
            <div className="crm-card">
              <h2 className="crm-chart-title">Recent Tickets</h2>
              {recentTickets.length === 0 ? (
                <p style={{ color: 'var(--crm-text-muted)', fontSize: '0.9rem' }}>No tickets yet.</p>
              ) : (
                <div className="crm-table-container">
                  <table className="crm-table">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTickets.map(ticket => (
                        <tr key={ticket.id}>
                          <td style={{ fontWeight: 500 }}>{ticket.customer_name}</td>
                          <td>
                            <span className="crm-badge" style={{ background: statusColors[ticket.status] || '#64748b' }}>
                              {ticket.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
