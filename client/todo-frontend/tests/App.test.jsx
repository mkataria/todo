import { describe, it, expect } from 'vitest';
import { render, screen } from './testUtils';
import App from '../src/App';

describe('App', () => {
  it('renders Current Time', () => {
    render(<App />);
    expect(screen.getByText(/Current Time/i)).toBeInTheDocument();
  });
});