import React from 'react';
import { render, screen } from '@testing-library/react';
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

})

