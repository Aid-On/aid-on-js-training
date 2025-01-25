import React from 'react';
import { render, act } from '@testing-library/react';
import { Knock73 } from '../src060_079_react/Knock73';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock73 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders multiple bouncing circles', () => {
    expect(() => {
      render(<Knock73 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(3);

    // Store initial positions
    const initialPositions = Array.from(circles).map(circle => ({
      x: circle.getAttribute('cx'),
      y: circle.getAttribute('cy')
    }));

    // Advance time to test movement
    act(() => {
      jest.advanceTimersByTime(50);
    });

    // Check that positions have changed
    circles.forEach((circle, index) => {
      expect(circle.getAttribute('cx')).not.toBe(initialPositions[index].x);
      expect(circle.getAttribute('cy')).not.toBe(initialPositions[index].y);
    });
  });

  it('keeps circles within bounds', () => {
    render(<Knock73 />);
    const circles = document.querySelectorAll('circle');
    const radius = 20;

    // Run animation for a while
    for (let i = 0; i < 100; i++) {
      act(() => {
        jest.advanceTimersByTime(50);
      });
    }

    // Check that all circles stay within bounds
    circles.forEach(circle => {
      const x = Number(circle.getAttribute('cx'));
      const y = Number(circle.getAttribute('cy'));
      
      expect(x).toBeGreaterThanOrEqual(radius);
      expect(x).toBeLessThanOrEqual(600 - radius);
      expect(y).toBeGreaterThanOrEqual(radius);
      expect(y).toBeLessThanOrEqual(400 - radius);
    });
  });
});
