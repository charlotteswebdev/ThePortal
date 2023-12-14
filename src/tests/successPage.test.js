// SuccessPage.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SuccessPage from './SuccessPage';

describe('SuccessPage Component', () => {
  it('renders success message and username', () => {
    const username = 'testUser';
    const { getByText } = render(<SuccessPage username={username} />);

    expect(getByText('Login Successful!')).toBeInTheDocument();
    expect(getByText(`Welcome, ${username}!`)).toBeInTheDocument();
  });

  it('renders default username as "Guest"', () => {
    const { getByText } = render(<SuccessPage />);

    expect(getByText('Login Successful!')).toBeInTheDocument();
    expect(getByText('Welcome, Guest!')).toBeInTheDocument();
  });

  it('calls onLogout when Logout button is clicked', () => {
    const onLogoutMock = jest.fn();
    const { getByText } = render(<SuccessPage onLogout={onLogoutMock} />);

    fireEvent.click(getByText('Logout'));

    expect(onLogoutMock).toHaveBeenCalled();
  });
});
