import React from 'react';
import { render } from '@testing-library/react';
import { Knock70 } from '../src060_079_react/Knock70';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock70 React test', () => {
  it('renders a 10x10 grid of alternating colored circles', () => {
    expect(() => {
      render(<Knock70 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(100); // 10x10 grid

    // Check alternating colors
    circles.forEach((circle, index) => {
      const row = Math.floor(index / 10);
      const col = index % 10;
      const expectedFill = (row + col) % 2 === 0 ? "white" : "black";
      expect(circle).toHaveAttribute('fill', expectedFill);
    });

    // Check grid positioning
    const firstCircle = circles[0];
    expect(firstCircle).toHaveAttribute('cx', '100');
    expect(firstCircle).toHaveAttribute('cy', '50');
  });
});
