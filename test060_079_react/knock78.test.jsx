import React from 'react';
import { render } from '@testing-library/react';
import { knock78 } from '../src060_079_react/knock78';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock78 React test', () => {
  it('renders binary tree fractal', () => {
    expect(() => {
      render(<knock78 />);
    }).not.toThrow(TrainingSkipError);

    const lines = document.querySelectorAll('line');
    expect(lines.length).toBeGreaterThan(0);

    // Check that lines form a tree structure
    const positions = Array.from(lines).map(line => ({
      x1: Number(line.getAttribute('x1')),
      y1: Number(line.getAttribute('y1')),
      x2: Number(line.getAttribute('x2')),
      y2: Number(line.getAttribute('y2'))
    }));

    // Verify that lines connect (at least some should share endpoints)
    const endpoints = positions.flatMap(p => [[p.x1, p.y1], [p.x2, p.y2]]);
    const uniquePoints = new Set(endpoints.map(p => `${p[0]},${p[1]}`));
    expect(uniquePoints.size).toBeLessThan(endpoints.length);
  });
});
