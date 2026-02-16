export async function fetchUsers() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';
  const res = await fetch(`${API_BASE}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}
