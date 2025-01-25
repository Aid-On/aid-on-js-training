import React from 'react';
import { render } from '@testing-library/react';
import { Knock79 } from '../src060_079_react/Knock79';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock79 React test', () => {
  it('renders Mandelbrot set visualization', () => {
    expect(() => {
      render(<Knock79 />);
    }).not.toThrow(TrainingSkipError);

    const rect = document.querySelector('rect');
    expect(rect).toBeInTheDocument();
    expect(rect).toHaveAttribute('width', '600');
    expect(rect).toHaveAttribute('height', '400');

    // Check that points are rendered
    const points = document.querySelectorAll('circle');
    expect(points.length).toBeGreaterThan(0);

    // Verify that points have different colors (hsl values)
    const colors = new Set(Array.from(points).map(p => p.getAttribute('fill')));
    expect(colors.size).toBeGreaterThan(1);
  });
});
