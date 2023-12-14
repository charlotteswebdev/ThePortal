import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App';

const mockStore = configureStore([]);

describe('App Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      isLoggedIn: false,
      username: '',
      error: null,
    });
  });

  it('renders without crashing', () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>);
    expect(getByText('Welcome to the Portal')).toBeInTheDocument();
  });

  it('handles login correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Provider store={store}><App /></Provider>);
    
    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testUser' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'mcknight' } });
    fireEvent.click(getByText('Login'));

    // Add expectations based on your application logic
    expect(getByText('Welcome, testUser')).toBeInTheDocument();
  });

  it('handles logout correctly', () => {
    store = mockStore({
      isLoggedIn: true,
      username: 'testUser',
      error: null,
    });

    const { getByText } = render(<Provider store={store}><App /></Provider>);
    
    fireEvent.click(getByText('Logout'));

    // Add expectations based on your application logic
    expect(getByText('Please enter your username and password to login:')).toBeInTheDocument();
  });
});
