import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Body from './Body';

describe('<Body />', () => {
  test('it should mount', () => {
    render(<Body />);

    const body = screen.getByTestId('Body');
    const input = screen.getByTestId('Input');

    expect(body).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});