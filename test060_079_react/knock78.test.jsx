import React from 'react';
import { render } from '@testing-library/react';
import { Knock78 } from '../src060_079_react/Knock78';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock78 React test', () => {
  it('renders binary tree fractal with default parameters', () => {
    expect(() => {
      render(<Knock78 />);
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

  it('adjusts tree depth based on initialDepth parameter', () => {
    const { container: deepTree } = render(<Knock78 initialDepth={8} />);
    const { container: shallowTree } = render(<Knock78 initialDepth={3} />);
    
    const deepLines = deepTree.querySelectorAll('line');
    const shallowLines = shallowTree.querySelectorAll('line');
    
    expect(deepLines.length).toBeGreaterThan(shallowLines.length);
  });

  it('adjusts branch size based on branchRatio parameter', () => {
    const { container } = render(<Knock78 initialDepth={3} branchRatio={0.5} initialLength={100} />);
    const lines = Array.from(container.querySelectorAll('line'));
    
    // Get lengths of branches at different depths
    const lengths = lines.map(line => {
      const x1 = Number(line.getAttribute('x1'));
      const y1 = Number(line.getAttribute('y1'));
      const x2 = Number(line.getAttribute('x2'));
      const y2 = Number(line.getAttribute('y2'));
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    });
    
    // First branch should be approximately initialLength
    expect(Math.round(lengths[0])).toBe(100);
    
    // Second level branches should be approximately half the length (0.5 ratio)
    const secondLevelLength = Math.round(lengths[3]); // Index 3 should be a second-level branch
    expect(secondLevelLength).toBe(50);
  });
});
