// very small fake auth helper using localStorage
export const TOKEN_KEY = 'fake_auth_token';

export const isAuthenticated = () => {
  return Boolean(localStorage.getItem(TOKEN_KEY));
};

export const login = (token = 'demo-token') => {
  localStorage.setItem(TOKEN_KEY, token);
  // Dispatch event to notify components of auth change
  window.dispatchEvent(new Event('auth-change'));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  // Dispatch event to notify components of auth change
  window.dispatchEvent(new Event('auth-change'));
};
