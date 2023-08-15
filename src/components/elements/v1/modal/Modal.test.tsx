import React from 'react';

  import { render, screen } from '@testing-library/react';

  import Modal from '.';

  test('renders learn react link', () => {
    render(<Modal />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  