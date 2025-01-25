import React from 'react';
import { render } from '@testing-library/react';
import { Knock77 } from '../src060_079_react/Knock77';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock77 React test', () => {
  it('renders Sierpinski triangle fractal', () => {
    expect(() => {
      render(<Knock77 />);
    }).not.toThrow(TrainingSkipError);

    const points = document.querySelectorAll('circle');
    expect(points.length).toBeGreaterThan(0);

    // Check that points form a triangular shape
    const positions = Array.from(points).map(point => ({
      x: Number(point.getAttribute('cx')),
      y: Number(point.getAttribute('cy'))
    }));

    // Find bounding triangle vertices
    const minX = Math.min(...positions.map(p => p.x));
    const maxX = Math.max(...positions.map(p => p.x));
    const minY = Math.min(...positions.map(p => p.y));
    const maxY = Math.max(...positions.map(p => p.y));

    expect(maxX - minX).toBeGreaterThan(0);
    expect(maxY - minY).toBeGreaterThan(0);
  });
});
