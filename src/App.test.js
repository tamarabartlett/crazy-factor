import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getByTestId('Header');
  expect(header).toBeInTheDocument();

  const body = screen.getByTestId('Body');
  expect(body).toBeInTheDocument();
});
