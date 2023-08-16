import React from 'react';

  import { render, screen } from '@testing-library/react';

  import Loading from '.';

  test('renders learn react link', () => {
    render(<Loading />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  