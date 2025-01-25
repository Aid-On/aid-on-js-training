import React from 'react';
import { render, act } from '@testing-library/react';
import { knock69 } from '../src060_079_react/knock69';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock69 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders multiple circles in a wave pattern', () => {
    expect(() => {
      render(<knock69 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(10);

    // Store initial positions
    const initialPositions = Array.from(circles).map(circle => ({
      x: circle.getAttribute('cx'),
      y: circle.getAttribute('cy')
    }));

    // Advance time to test animation
    act(() => {
      jest.advanceTimersByTime(50);
    });

    // Verify positions have changed
    circles.forEach((circle, index) => {
      expect(circle.getAttribute('cy')).not.toBe(initialPositions[index].y);
    });
  });
});
