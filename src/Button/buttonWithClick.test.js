import { render, screen, fireEvent } from '@testing-library/react';
import ButtonWithClick from './buttonWithClick';

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  render(<ButtonWithClick onClick={handleClick} label="Click Me" />);

  const button = screen.getByText(/Click Me/i);
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
