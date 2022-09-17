import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('App component render modal button', () => {
    render(<App domElement={null}/>);
    const modalButton = screen.getByRole('button');
    expect(modalButton).toBeInTheDocument();
  });
})