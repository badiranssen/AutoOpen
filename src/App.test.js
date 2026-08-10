// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoOpenSource title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoOpenSource/i);
    expect(titleElement).toBeInTheDocument();
});
