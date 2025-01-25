import React from 'react';
import { render, act } from '@testing-library/react';
import { Knock65 } from '../src060_079_react/Knock65';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock65 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders a diagonally bouncing circle', () => {
    expect(() => {
      render(<Knock65 />);
    }).not.toThrow(TrainingSkipError);

    const circle = document.querySelector('circle');
    expect(circle).toBeInTheDocument();

    const initialX = circle.getAttribute('cx');
    const initialY = circle.getAttribute('cy');

    // Test diagonal movement
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(circle.getAttribute('cx')).not.toBe(initialX);
    expect(circle.getAttribute('cy')).not.toBe(initialY);
  });

  it('stays within window bounds', () => {
    render(<Knock65 />);
    const circle = document.querySelector('circle');
    
    // Run animation for a while
    for (let i = 0; i < 100; i++) {
      act(() => {
        jest.advanceTimersByTime(50);
      });
    }

    const x = Number(circle.getAttribute('cx'));
    const y = Number(circle.getAttribute('cy'));
    const r = Number(circle.getAttribute('r'));

    expect(x).toBeGreaterThanOrEqual(r);
    expect(x).toBeLessThanOrEqual(600 - r);
    expect(y).toBeGreaterThanOrEqual(r);
    expect(y).toBeLessThanOrEqual(400 - r);
  });
});
