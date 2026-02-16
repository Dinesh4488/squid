import React, { useEffect, useState } from 'react';
import './Settings.css';

const STORAGE_KEY = 'app_settings';

function applyTheme(theme) {
  if (theme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
}

const Settings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // default to dark theme
  const [theme, setTheme] = useState('dark');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        setName(s.name || '');
        setEmail(s.email || '');
        setTheme(s.theme || 'dark');
        applyTheme(s.theme || 'dark');
      } else {
        // no saved settings: default to dark
        setTheme('dark');
        applyTheme('dark');
      }
    } catch (e) {
      setTheme('dark');
      applyTheme('dark');
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const obj = { name, email, theme };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    applyTheme(theme);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleToggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  };

  return (
    <div style={{ padding: '2.5rem 1rem' }} className="container">
      <h1 style={{ marginTop: 0 }}>Settings</h1>
      <form className="settings-form" onSubmit={handleSave}>
        <label>Profile name</label>
        <input className="input" value={name} onChange={(e) => setName(e.target.value)} />

        <label style={{ marginTop: 12 }}>Profile email</label>
        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div>
            <div style={{ fontSize: 13, color: '#9ca3af' }}>Theme</div>
            <strong>{theme === 'dark' ? 'Dark' : 'Light'}</strong>
          </div>
          <button type="button" onClick={handleToggleTheme}>Toggle theme</button>
        </div>

        <div className="actions">
          <button className="btn btn-primary" type="submit">Save</button>
          <button type="button" onClick={() => { setName(''); setEmail(''); setTheme('dark'); applyTheme('dark'); localStorage.removeItem(STORAGE_KEY); }}>Reset</button>
        </div>

        {saved && <div style={{ marginTop: 8, color: '#34d399' }}>Saved ✓</div>}
      </form>
    </div>
  );
};

export default Settings;
