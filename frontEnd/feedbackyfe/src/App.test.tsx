import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('App component', () => {
    render(<App />);
    const modalButton = screen.getByRole('button', {
      name: /comment/i
    })
    expect(modalButton).toBeInTheDocument();
  });
})

