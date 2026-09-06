import { useCallback, useEffect, useState, useMemo } from 'react';
import '../crm.css';

const API = 'http://localhost:5000';
const PAGE_SIZE = 10;

const TICKET_STATUSES = ['Open', 'In Progress', 'Closed'];

const statusColors = {
  Open: '#ef4444',
  'In Progress': '#f59e0b',
  Closed: '#10b981',
};

const emptyForm = {
  customer_name: '',
  issue: '',
  assigned_to: '',
  status: 'Open',
};

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [page, setPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  const [deletingId, setDeletingId] = useState(null);

  const token = localStorage.getItem('crm_token');
  const headers = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };

  const fetchTickets = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/tickets`, { headers: { 'Authorization': `Bearer ${token}` } });
      const data = await res.json();
      if (Array.isArray(data)) setTickets(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { fetchTickets(); }, [fetchTickets]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return tickets.filter(t => {
      const matchSearch = !q || t.customer_name?.toLowerCase().includes(q) || t.issue?.toLowerCase().includes(q) || t.assigned_to?.toLowerCase().includes(q);
      const matchStatus = !filterStatus || t.status === filterStatus;
      return matchSearch && matchStatus;
    });
  }, [tickets, search, filterStatus]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const openAdd = () => {
    setEditingTicket(null);
    setForm(emptyForm);
    setFormError('');
    setShowModal(true);
  };

  const openEdit = (ticket) => {
    setEditingTicket(ticket);
    setForm({
      customer_name: ticket.customer_name || '',
      issue: ticket.issue || '',
      assigned_to: ticket.assigned_to || '',
      status: ticket.status || 'Open',
    });
    setFormError('');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingTicket(null);
    setFormError('');
  };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.customer_name.trim() || !form.issue.trim()) {
      setFormError('Customer name and issue description are required.');
      return;
    }
    setSaving(true);
    setFormError('');
    try {
      const url = editingTicket ? `${API}/api/tickets/${editingTicket.id}` : `${API}/api/tickets`;
      const method = editingTicket ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers, body: JSON.stringify(form) });
      if (!res.ok) throw new Error('Save failed');
      closeModal();
      fetchTickets();
    } catch {
      setFormError('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API}/api/tickets/${id}`, { method: 'DELETE', headers });
      setTickets(prev => prev.filter(t => t.id !== id));
      setDeletingId(null);
    } catch {
      alert('Delete failed');
    }
  };

  // Quick status update directly from table (without opening modal)
  const quickStatus = async (ticket, newStatus) => {
    try {
      const res = await fetch(`${API}/api/tickets/${ticket.id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ ...ticket, status: newStatus }),
      });
      if (!res.ok) throw new Error();
      setTickets(prev => prev.map(t => t.id === ticket.id ? { ...t, status: newStatus } : t));
    } catch {
      alert('Status update failed');
    }
  };

  return (
    <div>
      <div className="crm-header">
        <h1 className="crm-title">Service Tickets</h1>
        <button className="crm-btn" onClick={openAdd}>+ Create Ticket</button>
      </div>

      {/* Search + Filter */}
      <div className="crm-search-row">
        <input
          className="crm-search-input"
          placeholder="🔍  Search by customer, issue, assigned to..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
        />
        <select
          className="crm-select"
          style={{ width: 'auto', minWidth: 160, marginBottom: 0 }}
          value={filterStatus}
          onChange={e => { setFilterStatus(e.target.value); setPage(1); }}
        >
          <option value="">All Statuses</option>
          {TICKET_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="crm-card">
        {loading ? (
          <p style={{ color: 'var(--crm-text-muted)' }}>Loading tickets...</p>
        ) : paginated.length === 0 ? (
          <div className="crm-empty-state">
            <div className="crm-empty-icon">🎫</div>
            <div className="crm-empty-text">{search || filterStatus ? 'No tickets match your search.' : 'No tickets yet. Create one to get started!'}</div>
            {!search && !filterStatus && <button className="crm-btn" onClick={openAdd}>+ Create First Ticket</button>}
          </div>
        ) : (
          <>
            <div className="crm-table-container">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Issue</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map(ticket => (
                    <tr key={ticket.id}>
                      <td style={{ fontWeight: 500 }}>{ticket.customer_name}</td>
                      <td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {ticket.issue}
                      </td>
                      <td>{ticket.assigned_to || <span style={{ color: 'var(--crm-text-muted)' }}>Unassigned</span>}</td>
                      <td>
                        <select
                          value={ticket.status}
                          onChange={e => quickStatus(ticket, e.target.value)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            color: statusColors[ticket.status] || 'inherit',
                            padding: 0,
                          }}
                        >
                          {TICKET_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td>{new Date(ticket.created_at).toLocaleDateString()}</td>
                      <td style={{ display: 'flex', gap: '8px' }}>
                        <button className="crm-btn crm-btn-sm" onClick={() => openEdit(ticket)}>Edit</button>
                        {deletingId === ticket.id ? (
                          <>
                            <button className="crm-btn crm-btn-sm crm-btn-danger" onClick={() => handleDelete(ticket.id)}>Confirm</button>
                            <button className="crm-btn crm-btn-sm crm-btn-ghost" onClick={() => setDeletingId(null)}>Cancel</button>
                          </>
                        ) : (
                          <button className="crm-btn crm-btn-sm crm-btn-danger" onClick={() => setDeletingId(ticket.id)}>Delete</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="crm-pagination">
              <button className="crm-pagination-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>← Prev</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} className={`crm-pagination-btn${page === p ? ' active' : ''}`} onClick={() => setPage(p)}>{p}</button>
              ))}
              <button className="crm-pagination-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>Next →</button>
              <span className="crm-pagination-info">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
            </div>
          </>
        )}
      </div>

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="crm-modal-overlay" onClick={e => e.target === e.currentTarget && closeModal()}>
          <div className="crm-modal">
            <div className="crm-modal-header">
              <h2 className="crm-modal-title">{editingTicket ? 'Edit Ticket' : 'Create New Ticket'}</h2>
              <button className="crm-modal-close" onClick={closeModal}>✕</button>
            </div>
            {formError && <div className="crm-alert crm-alert-error">{formError}</div>}
            <form onSubmit={handleSave}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                <div className="crm-form-group">
                  <label className="crm-form-label">Customer Name *</label>
                  <input name="customer_name" className="crm-input" value={form.customer_name} onChange={handleChange} placeholder="Customer or company name" />
                </div>
                <div className="crm-form-group">
                  <label className="crm-form-label">Assigned To</label>
                  <input name="assigned_to" className="crm-input" value={form.assigned_to} onChange={handleChange} placeholder="Engineer / team member" />
                </div>
                <div className="crm-form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="crm-form-label">Status</label>
                  <select name="status" className="crm-select" value={form.status} onChange={handleChange}>
                    {TICKET_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="crm-form-group">
                <label className="crm-form-label">Issue Description *</label>
                <textarea name="issue" className="crm-textarea" value={form.issue} onChange={handleChange} placeholder="Describe the issue in detail..." style={{ minHeight: '110px' }} />
              </div>
              <div className="crm-modal-footer">
                <button type="button" className="crm-btn crm-btn-ghost" onClick={closeModal}>Cancel</button>
                <button type="submit" className="crm-btn" disabled={saving}>{saving ? 'Saving...' : (editingTicket ? 'Update Ticket' : 'Create Ticket')}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;
