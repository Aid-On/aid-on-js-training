import React from 'react';
import { render } from '@testing-library/react';
import { Knock74 } from '../src060_079_react/Knock74';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock74 React test', () => {
  const calculateDistance = (x, y, centerX, centerY) => {
    return Math.sqrt(
      Math.pow(x - centerX, 2) + 
      Math.pow(y - centerY, 2)
    );
  };

  it('renders a spiral pattern of circles with default props', () => {
    expect(() => {
      render(<Knock74 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(50); // Default circleCount

    // Check that circles form a spiral pattern
    const positions = Array.from(circles).map(circle => ({
      x: Number(circle.getAttribute('cx')),
      y: Number(circle.getAttribute('cy'))
    }));

    const centerX = 300; // Default centerX
    const centerY = 200; // Default centerY

    for (let i = 1; i < positions.length; i++) {
      const prevDistance = calculateDistance(positions[i-1].x, positions[i-1].y, centerX, centerY);
      const currDistance = calculateDistance(positions[i].x, positions[i].y, centerX, centerY);
      expect(currDistance).toBeGreaterThan(prevDistance);
    }
  });

  it('accepts custom circle count and positioning parameters', () => {
    const customProps = {
      circleCount: 30,
      angleIncrement: 0.8,
      distanceIncrement: 10,
      radius: 5,
      centerX: 100,
      centerY: 100
    };
    
    render(<Knock74 {...customProps} />);
    
    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(customProps.circleCount);

    // Verify custom radius
    const firstCircle = circles[0];
    expect(Number(firstCircle.getAttribute('r'))).toBe(customProps.radius);

    // Verify custom center position
    const positions = Array.from(circles).map(circle => ({
      x: Number(circle.getAttribute('cx')),
      y: Number(circle.getAttribute('cy'))
    }));

    // First circle should be at or near the custom center
    expect(positions[0].x).toBeCloseTo(customProps.centerX);
    expect(positions[0].y).toBeCloseTo(customProps.centerY);

    // Verify spiral pattern with custom parameters
    for (let i = 1; i < positions.length; i++) {
      const prevDistance = calculateDistance(
        positions[i-1].x, 
        positions[i-1].y, 
        customProps.centerX, 
        customProps.centerY
      );
      const currDistance = calculateDistance(
        positions[i].x, 
        positions[i].y, 
        customProps.centerX, 
        customProps.centerY
      );
      expect(currDistance).toBeGreaterThan(prevDistance);
    }
  });
});
