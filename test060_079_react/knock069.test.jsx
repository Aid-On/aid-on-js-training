import React from 'react';
import { render, act } from '@testing-library/react';
import { Knock69 } from '../src060_079_react/Knock69';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock69 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders multiple circles with default parameters', () => {
    expect(() => {
      render(<Knock69 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(10); // Default circleCount

    // Store initial positions
    const initialPositions = Array.from(circles).map(circle => ({
      x: circle.getAttribute('cx'),
      y: circle.getAttribute('cy')
    }));

    // Advance time to test animation
    act(() => {
      jest.advanceTimersByTime(50); // Default intervalMs
    });

    // Verify positions have changed
    circles.forEach((circle, index) => {
      expect(circle.getAttribute('cy')).not.toBe(initialPositions[index].y);
    });
  });

  it('accepts custom parameters for circle count and animation', () => {
    const customCircleCount = 5;
    const customAmplitude = 30;
    const customIntervalMs = 100;
    
    render(<Knock69 
      circleCount={customCircleCount}
      amplitude={customAmplitude}
      intervalMs={customIntervalMs}
    />);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(customCircleCount);

    // Store initial positions
    const initialPositions = Array.from(circles).map(circle => ({
      x: Number(circle.getAttribute('cx')),
      y: Number(circle.getAttribute('cy'))
    }));

    // Advance time and check movement
    act(() => {
      jest.advanceTimersByTime(customIntervalMs);
    });

    // Verify positions have changed within amplitude bounds
    circles.forEach((circle, index) => {
      const newY = Number(circle.getAttribute('cy'));
      const deltaY = Math.abs(newY - initialPositions[index].y);
      expect(deltaY).toBeLessThanOrEqual(customAmplitude);
      expect(deltaY).toBeGreaterThan(0); // Ensure movement occurred
    });
  });
});
