import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const {getByRole} = render(<App />);
  // const linkElement = screen.getByRole('heading');
  expect(getByRole('heading')).toBeInTheDocument();
});
