import React, { useEffect, useMemo, useState } from 'react';
import { fetchUsers } from './api';
import UserModal from './UserModal';
import Input from './Input';
import './Users.css';

const PAGE_SIZE = 5;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchUsers()
      .then((data) => { if (mounted) { setUsers(data); setError(null); } })
      .catch((err) => { if (mounted) setError(err.message || 'Failed to load'); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let arr = users.filter(u => {
      return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
    });
    arr.sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    return arr;
  }, [users, search, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  useEffect(() => { if (page > totalPages) setPage(1); }, [totalPages]);

  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (loading) return <div style={{ padding: '2.5rem 1rem' }} className="container">Loading users...</div>;
  if (error) return (
    <div style={{ padding: '2.5rem 1rem' }} className="container">
      <div style={{ color: '#ff6b6b' }}>Error loading users — {error}</div>
      <div style={{ marginTop: 12 }}><button onClick={() => window.location.reload()}>Retry</button></div>
    </div>
  );

  return (
    <div style={{ padding: '2.5rem 1rem' }} className="container users-page">
      <h1 style={{ marginTop: 0 }}>Users</h1>

      <div className="users-controls">
        <Input
          id="users-search"
          label="Search users"
          labelHidden={true}
          className="input"
          placeholder="Search name or email"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        />

        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setSortAsc(s => !s)} title="Toggle sort">Sort: {sortAsc ? 'A–Z' : 'Z–A'}</button>
        </div>
      </div>

      <div className="users-table">
        <div className="users-row users-header">
          <div className="col col-name">Name</div>
          <div className="col col-email">Email</div>
          <div className="col col-company">Company</div>
          <div className="col col-actions">Actions</div>
        </div>

        {pageItems.map(u => (
          <div key={u.id} className="users-row">
            <div className="col col-name">{u.name}</div>
            <div className="col col-email">{u.email}</div>
            <div className="col col-company">{u.company?.name}</div>
            <div className="col col-actions"><button onClick={() => setSelectedUser(u)}>View</button></div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button key={idx} className={page === idx + 1 ? 'active' : ''} onClick={() => setPage(idx + 1)}>{idx + 1}</button>
        ))}
        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
      </div>

      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
};

export default Users;
