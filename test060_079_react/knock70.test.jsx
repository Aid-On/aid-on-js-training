import React from 'react';
import { render } from '@testing-library/react';
import { Knock70 } from '../src060_079_react/Knock70';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock70 React test', () => {
  it('renders a 10x10 grid of alternating colored circles by default', () => {
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

    // Check grid positioning with default spacing
    const firstCircle = circles[0];
    expect(firstCircle).toHaveAttribute('cx', '100');
    expect(firstCircle).toHaveAttribute('cy', '50');
    expect(firstCircle).toHaveAttribute('r', '15'); // Default radius
  });

  it('accepts custom grid size and circle properties', () => {
    const customProps = {
      gridSize: 5,
      circleRadius: 20,
      spacing: 50
    };
    
    render(<Knock70 {...customProps} />);
    
    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(25); // 5x5 grid
    
    // Check first circle has custom properties
    const firstCircle = circles[0];
    expect(firstCircle).toHaveAttribute('r', '20');
    
    // Check spacing between circles
    const secondCircle = circles[1];
    const firstX = Number(firstCircle.getAttribute('cx'));
    const secondX = Number(secondCircle.getAttribute('cx'));
    expect(secondX - firstX).toBe(50); // Custom spacing
  });
});
