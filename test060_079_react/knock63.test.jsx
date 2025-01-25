import React from 'react';
import { render, act } from '@testing-library/react';
import { Knock63 } from '../src060_079_react/Knock63';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock63 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders a circle moving in a circular path', () => {
    expect(() => {
      render(<Knock63 />);
    }).not.toThrow(TrainingSkipError);

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const circles = svg.querySelectorAll('circle');
    expect(circles.length).toBe(2); // One for orbit path, one for moving circle

    // Test animation
    const movingCircle = circles[1];
    const initialX = movingCircle.getAttribute('cx');
    const initialY = movingCircle.getAttribute('cy');

    act(() => {
      jest.advanceTimersByTime(50);
    });

    // Position should change after time advancement
    expect(movingCircle.getAttribute('cx')).not.toBe(initialX);
    expect(movingCircle.getAttribute('cy')).not.toBe(initialY);
  });
});
