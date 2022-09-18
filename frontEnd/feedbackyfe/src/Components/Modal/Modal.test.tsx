import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

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

  test("Click modal's X button ", () => {
    const mockFunction = jest.fn()
    render(<Modal show={true} setShow={mockFunction} />);
    const cancelButtonElement = screen.getByTestId('cancel');
    fireEvent.click(cancelButtonElement)
    expect(mockFunction).toHaveBeenCalled();
  });

  test("Click modal's send button with out type anything and show alert box", () => {
    const mockFunction = jest.fn()
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Modal show={true} setShow={mockFunction} />);
    const sendButtonElement = screen.getByRole('button', { name: 'Send' });
    fireEvent.click(sendButtonElement)
    expect(alertMock).toHaveBeenCalledTimes(1)
  });

  test("Type feedback and click send button", async () => {
    const mockFunction = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'Feedback sended' }),
      })
    );
    render(<Modal show={true} setShow={mockFunction} />);
    const sendButtonElement = screen.getByRole('button', { name: 'Send' });
    // fireEvent.click(sendButtonElement)
    const textBoxElement = screen.getByRole('textbox');
    expect(textBoxElement).toBeInTheDocument();
    await userEvent.type(textBoxElement, 'My feedback test');
    await userEvent.click(sendButtonElement)
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });

  test("See WE HAVE GOT  after send click", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'Feedback sended', status:200 }),
      })
    ) as jest.Mock;
    render(<Modal show={true} setShow={() => (false)} />);
    const sendButtonElement = screen.getByRole('button', { name: 'Send' });
    // fireEvent.click(sendButtonElement)
    const textBoxElement = screen.getByRole('textbox');
    // expect(textBoxElement).toBeInTheDocument();
    await userEvent.type(textBoxElement, 'My feedback test Unit 12345');
    await act(async () => { await userEvent.click(sendButtonElement) })
    const sendedFeedBack = await waitFor(() => (screen.getByText(/WE HAVE GOT/)))
    expect(sendedFeedBack).toBeInTheDocument();

  });

  test("Error case for send button", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject({
        json: () => Promise.reject({ error: 'Error during post request', status:404 }),
      })
    ) as jest.Mock;

    render(<Modal show={true} setShow={() => (false)} />);
    const sendButtonElement = screen.getByRole('button', { name: 'Send' });
    const textBoxElement = screen.getByRole('textbox');
    await userEvent.type(textBoxElement, 'My feedback test Unit 12345');
    await act(async () => { await userEvent.click(sendButtonElement) })
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    expect(alertMock).toHaveBeenCalledTimes(1)
  });

  test("Click outside the modal ", () => {
    const mockFunction = jest.fn()
    render(<Modal show={true} setShow={mockFunction} />);
    const modalOutside = screen.getByTestId('modal-outside');
    fireEvent.click(modalOutside)
    expect(mockFunction).toHaveBeenCalled();
  });

});
