import React from 'react';
import { render } from '@testing-library/react';

import App from '@client/App';

describe('App', () => {
  test('renders brand', () => {
    const { getByText } = render(<App.component />);
    const element = getByText(/on3dd blog/i);
    expect(element).toBeInTheDocument();
  });

  test('renders header', () => {
    const { container } = render(<App.component />);
    const element = container.querySelector('.header')
    expect(element).toBeInTheDocument();
  });

  test('renders router-view', () => {
    const { container } = render(<App.component />);
    const element = container.querySelector('.router-view')
    expect(element).toBeInTheDocument();
  });
});
