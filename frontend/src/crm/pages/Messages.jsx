import { useCallback, useState, useEffect } from 'react';
import '../crm.css';

const API = import.meta.env.VITE_API_URL || '';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const token = localStorage.getItem('crm_token');

  const fetchMessages = useCallback(async () => {
    try {
      const response = await fetch(`${API}/api/contacts`);
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    } catch {
      setError('Failed to load messages');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${API}/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (!response.ok) throw new Error('Failed to update status');
      
      setMessages(messages.map(m => m.id === id ? { ...m, status: newStatus } : m));
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, status: newStatus });
      }
    } catch {
      alert('Failed to update status');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'var(--crm-primary)';
      case 'read': return '#8b5cf6';
      case 'replied': return 'var(--crm-success)';
      case 'closed': return 'var(--crm-text-muted)';
      default: return 'var(--crm-text-muted)';
    }
  };

  if (loading) return <div className="crm-container"><p className="crm-empty-state">Loading messages...</p></div>;

  return (
    <div className="crm-container">
      <div className="crm-header">
        <h1 className="crm-title">📬 Contact Messages</h1>
      </div>
      
      {error && <div className="crm-alert crm-alert-error">{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        {/* Messages List */}
        <div className="crm-card" style={{ padding: '0', overflow: 'hidden', maxHeight: '600px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {messages.length === 0 ? (
              <p className="crm-empty-state">No messages yet</p>
            ) : (
              messages.map(msg => (
                <div
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  style={{
                    padding: '20px',
                    borderBottom: '1px solid var(--crm-border)',
                    cursor: 'pointer',
                    backgroundColor: selectedMessage?.id === msg.id ? 'rgba(2, 162, 240, 0.04)' : 'transparent',
                    borderLeft: `4px solid ${getStatusColor(msg.status)}`,
                    transition: 'background-color 0.2s'
                  }}
                >
                  <div style={{ fontWeight: '700', marginBottom: '6px', color: 'var(--crm-text)' }}>{msg.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--crm-text-muted)', marginBottom: '8px' }}>{msg.email}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--crm-text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {msg.subject}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--crm-text-muted)', marginTop: '8px', fontWeight: '600' }}>
                    {new Date(msg.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="crm-card">
          {selectedMessage ? (
            <>
              <div style={{ marginBottom: '24px', borderBottom: '1px solid var(--crm-border)', paddingBottom: '20px' }}>
                <h2 style={{ margin: '0 0 16px 0', fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>{selectedMessage.subject}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '0.9rem' }}>
                  <div>
                    <strong style={{ color: 'var(--crm-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Name</strong><br/>
                    {selectedMessage.name}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--crm-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Email</strong><br/>
                    {selectedMessage.email}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--crm-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Phone</strong><br/>
                    {selectedMessage.phone}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--crm-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Date</strong><br/>
                    {new Date(selectedMessage.created_at).toLocaleString()}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <strong style={{ color: 'var(--crm-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Message</strong>
                <div style={{ backgroundColor: 'var(--crm-bg)', padding: '20px', borderRadius: '12px', border: '1px solid var(--crm-border)', lineHeight: '1.7', whiteSpace: 'pre-wrap', fontSize: '0.95rem' }}>
                  {selectedMessage.message}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => updateStatus(selectedMessage.id, 'read')}
                  className="crm-btn"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', boxShadow: '0 4px 12px rgba(139, 92, 246, 0.25)' }}
                >
                  Mark as Read
                </button>
                <button
                  onClick={() => updateStatus(selectedMessage.id, 'replied')}
                  className="crm-btn crm-btn-success"
                >
                  Mark as Replied
                </button>
                <button
                  onClick={() => updateStatus(selectedMessage.id, 'closed')}
                  className="crm-btn"
                  style={{ background: 'var(--crm-text-muted)', boxShadow: 'none' }}
                >
                  Close
                </button>
              </div>
            </>
          ) : (
            <div className="crm-empty-state" style={{ paddingTop: '100px' }}>
              <div className="crm-empty-icon">✉️</div>
              <p className="crm-empty-text">Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
