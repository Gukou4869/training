import React from 'react';

  import { render, screen } from '@testing-library/react';

  import LoginModal from '.';

  test('renders learn react link', () => {
    render(<LoginModal />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  