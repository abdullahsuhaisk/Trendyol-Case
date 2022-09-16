import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Check all Modal elements exist', () => {

  test("render modal's header element", () => {
    render(<Modal />);
    const headerElement = screen.getByText(/send your feedback/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("render modal's textInput element", () => {
    render(<Modal />);
    const textBoxElement = screen.getByRole('textbox')
    expect(textBoxElement).toBeInTheDocument();
  });

  test("render modal's send button element", () => {
    render(<Modal />);
    const sendButtonElement = screen.getByRole('button',{ name:'send' })
    expect(sendButtonElement).toBeInTheDocument();
  });

  test("render modal's cancel button element", () => {
    render(<Modal />);
    const cancelButtonElement = screen.getByRole('button',{ name:'cancel' })
    expect(cancelButtonElement).toBeInTheDocument();
  });

});
