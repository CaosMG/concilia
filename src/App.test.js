import { render, screen } from '@testing-library/react';
import App from './App';
import menuFooter from './components/menuFooter/menuFooter';


test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
