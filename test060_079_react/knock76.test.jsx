import React from 'react';
import { render, act } from '@testing-library/react';
import { knock76 } from '../src060_079_react/knock76';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock76 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders Monte Carlo π calculation visualization', () => {
    expect(() => {
      render(<knock76 />);
    }).not.toThrow(TrainingSkipError);

    // Check initial state
    expect(document.querySelector('circle')).toBeInTheDocument();
    expect(document.querySelector('rect')).toBeInTheDocument();

    // Run simulation for a while
    for (let i = 0; i < 20; i++) {
      act(() => {
        jest.advanceTimersByTime(50);
      });
    }

    // Check that points have been added
    const points = document.querySelectorAll('circle');
    expect(points.length).toBeGreaterThan(1);

    // Check that pi estimate is displayed
    const piText = document.querySelector('div').textContent;
    expect(piText).toMatch(/π ≈ \d+\.\d{4}/);
  });
});
