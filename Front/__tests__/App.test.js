// __tests__/App.test.js
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders ChatBot Sport header', () => {
  render(<App />);
  const headerElement = screen.getByText(/ChatBot Sport/i);
  expect(headerElement).toBeInTheDocument();
});
