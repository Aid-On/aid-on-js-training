import React from 'react';
import { render, act } from '@testing-library/react';
import { Knock64 } from '../src060_079_react/Knock64';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock64 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders a bouncing circle', () => {
    expect(() => {
      render(<Knock64 />);
    }).not.toThrow(TrainingSkipError);

    const circle = document.querySelector('circle');
    expect(circle).toBeInTheDocument();

    const initialX = circle.getAttribute('cx');

    // Test horizontal movement
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(circle.getAttribute('cx')).not.toBe(initialX);
  });

  it('bounces off window edges', async () => {
    render(<Knock64 />);
    const circle = document.querySelector('circle');
    
    // Move to right edge
    for (let i = 0; i < 100; i++) {
      act(() => {
        jest.advanceTimersByTime(50);
      });
    }

    const rightEdgeX = circle.getAttribute('cx');
    
    // Should start moving left
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(Number(circle.getAttribute('cx'))).toBeLessThan(Number(rightEdgeX));
  });
});
