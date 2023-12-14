export const login = (username) => ({
  type: 'LOGIN',
  payload: username,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
});

export const clearError = () => ({
  type: 'CLEAR_ERROR',
});

export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password,
});
