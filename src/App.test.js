import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/плюс вайб/i);
  expect(linkElement).toBeInTheDocument();
});
