import React, { useEffect, useState } from 'react';
import { fetchUsers } from './api';
import DashboardMockup from './DashboardMockup';

const StatCard = ({ title, value, color = '#6366F1' }) => (
  <div style={{ background: '#0b0b0c', padding: 16, borderRadius: 12, minWidth: 160, color: '#e6eef8' }}>
    <div style={{ fontSize: 12, color: '#9ca3af' }}>{title}</div>
    <div style={{ marginTop: 8, fontSize: 24, fontWeight: 700, color }}>{value}</div>
  </div>
);

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchUsers()
      .then((data) => { if (mounted) { setUsers(data); setError(null); } })
      .catch((err) => { if (mounted) setError(err.message || 'Failed to load'); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  const totalUsers = users.length;
  const companiesCount = new Set(users.map(u => u.company?.name)).size;
  const activeCount = users.filter(u => u.id % 2 === 0).length; // derived example

  return (
    <div style={{ padding: '2.5rem 1rem' }}>
      <div className="container">
        <h1 style={{ marginTop: 0 }}>Dashboard</h1>

        {loading && <div>Loading summary...</div>}
        {error && (
          <div style={{ color: '#ff6b6b' }}>
            Error loading summary — {error} <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}

        {!loading && !error && (
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <StatCard title="Total users" value={totalUsers} color="#FF6B4A" />
            <StatCard title="Companies (unique)" value={companiesCount} color="#FFD700" />
            <StatCard title="Derived: active users" value={activeCount} color="#6366F1" />
          </div>
        )}

        {/* Keep the existing mockup below for visual context */}
        <DashboardMockup />
      </div>
    </div>
  );
};

export default Dashboard;
