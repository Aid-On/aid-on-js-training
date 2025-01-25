import React from 'react';
import { render, screen } from '@testing-library/react';
import { Knock61 } from '../src060_079_react/Knock61';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock61 React test', () => {
  it('renders a square with inscribed circle', () => {
    expect(() => {
      render(<Knock61 />);
    }).not.toThrow(TrainingSkipError);

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const rect = svg.querySelector('rect');
    expect(rect).toBeInTheDocument();
    expect(rect).toHaveAttribute('width', '200');
    expect(rect).toHaveAttribute('height', '200');
    expect(rect).toHaveAttribute('x', '200');
    expect(rect).toHaveAttribute('y', '100');

    const circle = svg.querySelector('circle');
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveAttribute('cx', '300');
    expect(circle).toHaveAttribute('cy', '200');
    expect(circle).toHaveAttribute('r', '100');
  });
});
