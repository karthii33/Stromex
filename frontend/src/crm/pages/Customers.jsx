import { useCallback, useEffect, useState, useMemo } from 'react';
import '../crm.css';

const API = import.meta.env.VITE_API_URL || '';
const PAGE_SIZE = 10;

const emptyForm = {
  name: '',
  gst_number: '',
  address: '',
  contact_person: '',
  amc_details: '',
};

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  const [deletingId, setDeletingId] = useState(null);

  const token = localStorage.getItem('crm_token');
  const headers = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };

  const fetchCustomers = useCallback(async () => {
    try {
      const res = await fetch(`${API}/api/customers`, { headers: { 'Authorization': `Bearer ${token}` } });
      const data = await res.json();
      if (Array.isArray(data)) setCustomers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { fetchCustomers(); }, [fetchCustomers]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return customers.filter(c =>
      !q || c.name?.toLowerCase().includes(q) || c.contact_person?.toLowerCase().includes(q) || c.gst_number?.toLowerCase().includes(q)
    );
  }, [customers, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const openAdd = () => {
    setEditingCustomer(null);
    setForm(emptyForm);
    setFormError('');
    setShowModal(true);
  };

  const openEdit = (customer) => {
    setEditingCustomer(customer);
    setForm({
      name: customer.name || '',
      gst_number: customer.gst_number || '',
      address: customer.address || '',
      contact_person: customer.contact_person || '',
      amc_details: customer.amc_details || '',
    });
    setFormError('');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingCustomer(null);
    setFormError('');
  };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setFormError('Customer name is required.');
      return;
    }
    setSaving(true);
    setFormError('');
    try {
      const url = editingCustomer ? `${API}/api/customers/${editingCustomer.id}` : `${API}/api/customers`;
      const method = editingCustomer ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers, body: JSON.stringify(form) });
      if (!res.ok) throw new Error('Save failed');
      closeModal();
      fetchCustomers();
    } catch {
      setFormError('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API}/api/customers/${id}`, { method: 'DELETE', headers });
      setCustomers(prev => prev.filter(c => c.id !== id));
      setDeletingId(null);
    } catch {
      alert('Delete failed');
    }
  };

  return (
    <div>
      <div className="crm-header">
        <h1 className="crm-title">Customer Management</h1>
        <button className="crm-btn" onClick={openAdd}>+ Add Customer</button>
      </div>

      {/* Search */}
      <div className="crm-search-row">
        <input
          className="crm-search-input"
          placeholder="🔍  Search by name, contact person, GST number..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
        />
      </div>

      <div className="crm-card">
        {loading ? (
          <p style={{ color: 'var(--crm-text-muted)' }}>Loading customers...</p>
        ) : paginated.length === 0 ? (
          <div className="crm-empty-state">
            <div className="crm-empty-icon">🏢</div>
            <div className="crm-empty-text">{search ? 'No customers match your search.' : 'No customers yet. Add one to get started!'}</div>
            {!search && <button className="crm-btn" onClick={openAdd}>+ Add First Customer</button>}
          </div>
        ) : (
          <>
            <div className="crm-table-container">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>GST Number</th>
                    <th>Contact Person</th>
                    <th>Address</th>
                    <th>AMC Details</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map(customer => (
                    <tr key={customer.id}>
                      <td style={{ fontWeight: 500 }}>{customer.name}</td>
                      <td>{customer.gst_number || '—'}</td>
                      <td>{customer.contact_person || '—'}</td>
                      <td style={{ maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {customer.address || '—'}
                      </td>
                      <td style={{ maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {customer.amc_details || '—'}
                      </td>
                      <td style={{ display: 'flex', gap: '8px' }}>
                        <button className="crm-btn crm-btn-sm" onClick={() => openEdit(customer)}>Edit</button>
                        {deletingId === customer.id ? (
                          <>
                            <button className="crm-btn crm-btn-sm crm-btn-danger" onClick={() => handleDelete(customer.id)}>Confirm</button>
                            <button className="crm-btn crm-btn-sm crm-btn-ghost" onClick={() => setDeletingId(null)}>Cancel</button>
                          </>
                        ) : (
                          <button className="crm-btn crm-btn-sm crm-btn-danger" onClick={() => setDeletingId(customer.id)}>Delete</button>
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
              <h2 className="crm-modal-title">{editingCustomer ? 'Edit Customer' : 'Add New Customer'}</h2>
              <button className="crm-modal-close" onClick={closeModal}>✕</button>
            </div>
            {formError && <div className="crm-alert crm-alert-error">{formError}</div>}
            <form onSubmit={handleSave}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                <div className="crm-form-group">
                  <label className="crm-form-label">Customer Name *</label>
                  <input name="name" className="crm-input" value={form.name} onChange={handleChange} placeholder="Company / Person Name" />
                </div>
                <div className="crm-form-group">
                  <label className="crm-form-label">GST Number</label>
                  <input name="gst_number" className="crm-input" value={form.gst_number} onChange={handleChange} placeholder="22AAAAA0000A1Z5" />
                </div>
                <div className="crm-form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="crm-form-label">Contact Person</label>
                  <input name="contact_person" className="crm-input" value={form.contact_person} onChange={handleChange} placeholder="Primary contact name" />
                </div>
              </div>
              <div className="crm-form-group">
                <label className="crm-form-label">Address</label>
                <textarea name="address" className="crm-textarea" value={form.address} onChange={handleChange} placeholder="Full address..." style={{ minHeight: '70px' }} />
              </div>
              <div className="crm-form-group">
                <label className="crm-form-label">AMC Details</label>
                <textarea name="amc_details" className="crm-textarea" value={form.amc_details} onChange={handleChange} placeholder="Annual Maintenance Contract details, renewal dates, etc." style={{ minHeight: '70px' }} />
              </div>
              <div className="crm-modal-footer">
                <button type="button" className="crm-btn crm-btn-ghost" onClick={closeModal}>Cancel</button>
                <button type="submit" className="crm-btn" disabled={saving}>{saving ? 'Saving...' : (editingCustomer ? 'Update Customer' : 'Add Customer')}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
