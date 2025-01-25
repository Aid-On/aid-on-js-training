import React from 'react';
import { render } from '@testing-library/react';
import { knock74 } from '../src060_079_react/knock74';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock74 React test', () => {
  it('renders a spiral pattern of circles', () => {
    expect(() => {
      render(<knock74 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(50);

    // Check that circles form a spiral pattern
    // Each circle should be further from center than the previous one
    const positions = Array.from(circles).map(circle => ({
      x: Number(circle.getAttribute('cx')),
      y: Number(circle.getAttribute('cy'))
    }));

    const centerX = 300;
    const centerY = 200;

    for (let i = 1; i < positions.length; i++) {
      const prevDistance = Math.sqrt(
        Math.pow(positions[i-1].x - centerX, 2) + 
        Math.pow(positions[i-1].y - centerY, 2)
      );
      const currDistance = Math.sqrt(
        Math.pow(positions[i].x - centerX, 2) + 
        Math.pow(positions[i].y - centerY, 2)
      );
      expect(currDistance).toBeGreaterThan(prevDistance);
    }
  });
});
