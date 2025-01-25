import React from 'react';
import { render, screen } from '@testing-library/react';
import { knock60 } from '../src060_079_react/knock60';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock60 React test', () => {
  it('renders a circle with default center coordinates', () => {
    expect(() => {
      render(<knock60 />);
    }).not.toThrow(TrainingSkipError);

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const circle = svg.querySelector('circle');
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveAttribute('cx', '200');
    expect(circle).toHaveAttribute('cy', '150');
    expect(circle).toHaveAttribute('r', '50');
  });

  it('renders a circle with custom center coordinates', () => {
    render(<knock60 cx={300} cy={250} />);
    
    const circle = document.querySelector('circle');
    expect(circle).toHaveAttribute('cx', '300');
    expect(circle).toHaveAttribute('cy', '250');
  });
});
