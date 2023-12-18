// ErrorPage.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPage Component', () => {
  it('renders error message and "Go Back" button', () => {
    const onBackMock = jest.fn();
    const { getByText } = render(<ErrorPage onBack={onBackMock} />);

    expect(getByText('Error')).toBeInTheDocument();
    expect(getByText('Invalid username or password.')).toBeInTheDocument();
    expect(getByText('Go Back')).toBeInTheDocument();
  });

  it('calls onBack when "Go Back" button is clicked', () => {
    const onBackMock = jest.fn();
    const { getByText } = render(<ErrorPage onBack={onBackMock} />);

    fireEvent.click(getByText('Go Back'));

    expect(onBackMock).toHaveBeenCalled();
  });
});
