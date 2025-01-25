import React from 'react';
import { render, screen } from '@testing-library/react';
import { Knock61 } from '../src060_079_react/Knock61';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock61 React test', () => {
  it('renders a square with inscribed circle using default values', () => {
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

  it('accepts custom square size and position', () => {
    expect(() => {
      render(<Knock61 squareSize={300} squareX={100} squareY={50} />);
    }).not.toThrow(TrainingSkipError);

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const rect = svg.querySelector('rect[data-testid="square"]');
    expect(rect).toBeInTheDocument();
    expect(rect).toHaveAttribute('width', '300');
    expect(rect).toHaveAttribute('height', '300');
    expect(rect).toHaveAttribute('x', '100');
    expect(rect).toHaveAttribute('y', '50');

    const circle = svg.querySelector('circle[data-testid="circle"]');
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveAttribute('cx', '250');  // 100 + 300/2
    expect(circle).toHaveAttribute('cy', '200');  // 50 + 300/2
    expect(circle).toHaveAttribute('r', '150');   // 300/2
  });
});
