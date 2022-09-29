import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Login from './Login';

test('renders label', () => {
  render(<Login />);
  const labelEmail = screen.getByText(/email/i);
  const labelPass = screen.getByText(/password/i)
  expect(labelEmail).toBeInTheDocument()
  expect(labelPass).toBeInTheDocument()
})

test('render inputs', () => {
  render(<Login/>)
  const inputEmail = screen.getByTestId('email')
  const inputPass = screen.getByTestId('password')
  expect(inputEmail).toBeInTheDocument()
  expect(inputPass).toBeInTheDocument()
})

test('input events', () => {
  cleanup()
  render(<Login/>)
  const inputEmail = screen.getByTestId('email')
  fireEvent.change(inputEmail, {target: {value: 'julian@gmail.com'}})
  expect(inputEmail.value).toBe('julian@gmail.com')
})