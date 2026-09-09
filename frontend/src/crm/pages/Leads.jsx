import { useCallback, useEffect, useState, useMemo } from 'react';
import '../crm.css';

const API = import.meta.env.VITE_API_URL || '';
const PAGE_SIZE = 10;

const LEAD_STATUSES = ['New', 'Contacted', 'Qualified', 'Lost'];

const statusColors = {
  New: '#016FE2',
  Contacted: '#8b5cf6',
  Qualified: '#10b981',
  Lost: '#ef4444',
};

const emptyForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  status: 'New',
  notes: '',
};

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [page, setPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  const [deletingId, setDeletingId] = useState(null);

  const token = localStorage.getItem('crm_token');
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

  const fetchLeads = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/leads`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (Array.isArray(data)) setLeads(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return leads.filter(l => {
      const matchSearch = !q || l.name?.toLowerCase().includes(q) || l.company?.toLowerCase().includes(q) || l.email?.toLowerCase().includes(q);
      const matchStatus = !filterStatus || l.status === filterStatus;
      return matchSearch && matchStatus;
    });
  }, [leads, search, filterStatus]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const openAdd = () => {
    setEditingLead(null);
    setForm(emptyForm);
    setFormError('');
    setShowModal(true);
  };

  const openEdit = (lead) => {
    setEditingLead(lead);
    setForm({
      name: lead.name || '',
      company: lead.company || '',
      email: lead.email || '',
      phone: lead.phone || '',
      status: lead.status || 'New',
      notes: lead.notes || '',
    });
    setFormError('');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingLead(null);
    setFormError('');
  };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setFormError('Lead name is required.');
      return;
    }
    setSaving(true);
    setFormError('');
    try {
      const url = editingLead ? `${API}/api/leads/${editingLead.id}` : `${API}/api/leads`;
      const method = editingLead ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers, body: JSON.stringify(form) });
      if (!res.ok) throw new Error('Save failed');
      closeModal();
      fetchLeads();
    } catch {
      setFormError('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API}/api/leads/${id}`, { method: 'DELETE', headers });
      setLeads(prev => prev.filter(l => l.id !== id));
      setDeletingId(null);
    } catch {
      alert('Delete failed');
    }
  };

  const quickStatus = async (lead, newStatus) => {
    try {
      const res = await fetch(`${API}/api/leads/${lead.id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ ...lead, status: newStatus }),
      });
      if (!res.ok) throw new Error();
      setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: newStatus } : l));
    } catch {
      alert('Status update failed');
    }
  };

  return (
    <div>
      <div className="crm-header">
        <h1 className="crm-title">Lead Management</h1>
        <button className="crm-btn" onClick={openAdd}>+ Add Lead</button>
      </div>

      {/* Search + Filter */}
      <div className="crm-search-row">
        <input
          className="crm-search-input"
          placeholder="🔍  Search by name, company, email..."
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
          {LEAD_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="crm-card">
        {loading ? (
          <p style={{ color: 'var(--crm-text-muted)' }}>Loading leads...</p>
        ) : paginated.length === 0 ? (
          <div className="crm-empty-state">
            <div className="crm-empty-icon">📋</div>
            <div className="crm-empty-text">{search || filterStatus ? 'No leads match your search.' : 'No leads yet. Add one to get started!'}</div>
            {!search && !filterStatus && <button className="crm-btn" onClick={openAdd}>+ Add First Lead</button>}
          </div>
        ) : (
          <>
            <div className="crm-table-container">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map(lead => (
                    <tr key={lead.id}>
                      <td style={{ fontWeight: 500 }}>{lead.name}</td>
                      <td>{lead.company || '—'}</td>
                      <td>{lead.email || '—'}</td>
                      <td>{lead.phone || '—'}</td>
                      <td>
                        <select
                          value={lead.status}
                          onChange={e => quickStatus(lead, e.target.value)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            color: statusColors[lead.status] || 'inherit',
                            padding: 0,
                          }}
                        >
                          {LEAD_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td style={{ display: 'flex', gap: '8px' }}>
                        <button className="crm-btn crm-btn-sm" onClick={() => openEdit(lead)}>Edit</button>
                        {deletingId === lead.id ? (
                          <>
                            <button className="crm-btn crm-btn-sm crm-btn-danger" onClick={() => handleDelete(lead.id)}>Confirm</button>
                            <button className="crm-btn crm-btn-sm crm-btn-ghost" onClick={() => setDeletingId(null)}>Cancel</button>
                          </>
                        ) : (
                          <button className="crm-btn crm-btn-sm crm-btn-danger" onClick={() => setDeletingId(lead.id)}>Delete</button>
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
              <h2 className="crm-modal-title">{editingLead ? 'Edit Lead' : 'Add New Lead'}</h2>
              <button className="crm-modal-close" onClick={closeModal}>✕</button>
            </div>
            {formError && <div className="crm-alert crm-alert-error">{formError}</div>}
            <form onSubmit={handleSave}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                <div className="crm-form-group">
                  <label className="crm-form-label">Full Name *</label>
                  <input name="name" className="crm-input" value={form.name} onChange={handleChange} placeholder="Lead's full name" />
                </div>
                <div className="crm-form-group">
                  <label className="crm-form-label">Company</label>
                  <input name="company" className="crm-input" value={form.company} onChange={handleChange} placeholder="Company name" />
                </div>
                <div className="crm-form-group">
                  <label className="crm-form-label">Email</label>
                  <input name="email" type="email" className="crm-input" value={form.email} onChange={handleChange} placeholder="email@example.com" />
                </div>
                <div className="crm-form-group">
                  <label className="crm-form-label">Phone</label>
                  <input name="phone" className="crm-input" value={form.phone} onChange={handleChange} placeholder="+91 99999 99999" />
                </div>
                <div className="crm-form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="crm-form-label">Status</label>
                  <select name="status" className="crm-select" value={form.status} onChange={handleChange}>
                    {LEAD_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="crm-form-group">
                <label className="crm-form-label">Notes</label>
                <textarea name="notes" className="crm-textarea" value={form.notes} onChange={handleChange} placeholder="Any additional notes about this lead..." style={{ minHeight: '80px' }} />
              </div>
              <div className="crm-modal-footer">
                <button type="button" className="crm-btn crm-btn-ghost" onClick={closeModal}>Cancel</button>
                <button type="submit" className="crm-btn" disabled={saving}>{saving ? 'Saving...' : (editingLead ? 'Update Lead' : 'Add Lead')}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
