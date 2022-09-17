import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FeedBackButton from './FeedBackButton';

describe('FeedBackButton component', () => {
  test('FeedBackButton is exist when show value is false', () => {
    render(<FeedBackButton show={false} setShow={() => {}} />);
    const modalButton = screen.getByRole('button');
    expect(modalButton).toBeInTheDocument();
  });

  test('FeedBackButton is not exist when show value is true', () => {
    render(<FeedBackButton show={true} setShow={() => {}} />);
    const modalButton = screen.queryByRole('button');
    expect(modalButton).not.toBeInTheDocument();
  });

  test('FeedBackButton click', () => {
    const mockSetshow = jest.fn()
    render(<FeedBackButton show={false} setShow={mockSetshow} />);
    const modalButton = screen.getByRole('button');
    fireEvent.click(modalButton)
    expect(mockSetshow).toHaveBeenCalled(); 
  });

})

