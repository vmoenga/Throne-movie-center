import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Throne Movie Center title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Throne Movie Center/i);
  expect(titleElement).toBeInTheDocument();
});
