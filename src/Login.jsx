import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { isAuthenticated, login } from './auth';
import './Input.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated()) navigate('/', { replace: true });
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // fake auth: store token in localStorage
    login('demo-token');
    navigate('/');
  };

  return (
    <div className="container" style={{ padding: '6rem 1rem' }}>
      <div style={{ maxWidth: 480, margin: '0 auto', background: '#0b0b0c', padding: 32, borderRadius: 12 }}>
        <h1 style={{ margin: 0, marginBottom: 12 }}>Sign in</h1>
        <p style={{ marginTop: 0, color: '#9ca3af' }}>Use any values — this is a demo login.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="login-email" style={{ display: 'block', marginTop: 16 }}>Email</label>
          <input id="login-email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" aria-required="true" aria-invalid={error ? true : undefined} />

          <label htmlFor="login-password" style={{ display: 'block', marginTop: 12 }}>Password</label>
          <input id="login-password" className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" aria-required="true" aria-invalid={error ? true : undefined} />

          {error && <div role="alert" style={{ color: '#ff6b6b', marginTop: 12 }}>{error}</div>}

          <div style={{ marginTop: 20, display: 'flex', gap: 8 }}>
            <Button type="submit" variant="primary" size="medium" disabled={!email.trim() || !password.trim()}>Sign in</Button>
            <Button variant="secondary" size="medium" onClick={() => { setEmail(''); setPassword(''); setError(''); }}>Clear</Button>
          </div>
        </form>

        
      </div>
    </div>
  );
};

export default Login;
