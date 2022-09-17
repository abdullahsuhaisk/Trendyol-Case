import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Check all Modal elements exist', () => {

  test("render modal's header element", () => {
    render(<Modal show={true} setShow={() => { }} />);
    const headerElement = screen.queryByText(/send your feedback/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("render modal's textInput element", () => {
    render(<Modal show={true} setShow={() => { }} />);
    const textBoxElement = screen.queryByRole('textbox');
    expect(textBoxElement).toBeInTheDocument();
  });

  test("render modal's send button element", () => {
    render(<Modal show={true} setShow={() => { }} />);
    const sendButtonElement = screen.queryByRole('button', { name: 'Send' })
    expect(sendButtonElement).toBeInTheDocument();
  });

  test("render modal's cancel button element", () => {
    render(<Modal show={true} setShow={() => { }} />);
    // screen.debug();
    const cancelButtonElement = screen.queryByTestId('cancel');
    expect(cancelButtonElement).toBeInTheDocument();
  });

  test("do NOT render modal's header element", () => {
    render(<Modal show={false} setShow={() => { }} />);
    const headerElement = screen.queryByText(/send your feedback/i);
    expect(headerElement).not.toBeInTheDocument();
  });

});
