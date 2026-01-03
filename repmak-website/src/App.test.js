import { render, screen } from '@testing-library/react';
import Appgarbage from './Appgarbage';

test('renders learn react link', () => {
  render(<Appgarbage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
