import React from 'react';
import { render, act } from '@testing-library/react';
import { knock75 } from '../src060_079_react/knock75';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock75 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders expanding/contracting circles in a pattern', () => {
    expect(() => {
      render(<knock75 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(6);

    // Store initial radii
    const initialRadii = Array.from(circles).map(circle => 
      Number(circle.getAttribute('r'))
    );

    // Advance time
    act(() => {
      jest.advanceTimersByTime(50);
    });

    // Check that radii have changed
    circles.forEach((circle, index) => {
      expect(Number(circle.getAttribute('r'))).not.toBe(initialRadii[index]);
    });
  });
});
