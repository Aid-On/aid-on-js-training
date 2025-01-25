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

  it('renders a bouncing circle with default parameters', () => {
    expect(() => {
      render(<Knock64 />);
    }).not.toThrow(TrainingSkipError);

    const circle = document.querySelector('circle');
    expect(circle).toBeInTheDocument();
    expect(Number(circle.getAttribute('cx'))).toBe(30); // Default initialX
    expect(Number(circle.getAttribute('cy'))).toBe(200); // Default initialY
  });

  it('accepts custom initial position and speed', () => {
    render(<Knock64 initialX={100} initialY={150} speed={10} />);
    const circle = document.querySelector('circle');
    
    expect(Number(circle.getAttribute('cx'))).toBe(100);
    expect(Number(circle.getAttribute('cy'))).toBe(150);

    // Test movement with custom speed
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(Number(circle.getAttribute('cx'))).toBe(110); // 100 + 10(speed)
  });

  it('calls bounce handlers when hitting edges', () => {
    const onBounceLeft = jest.fn();
    const onBounceRight = jest.fn();
    
    render(<Knock64 
      initialX={570} // Start near right edge
      speed={20}
      onBounceLeft={onBounceLeft}
      onBounceRight={onBounceRight}
    />);
    
    // Move to right edge and bounce
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(onBounceRight).toHaveBeenCalledTimes(1);
    expect(onBounceLeft).not.toHaveBeenCalled();

    // Move to left edge (multiple steps)
    for (let i = 0; i < 30; i++) {
      act(() => {
        jest.advanceTimersByTime(50);
      });
    }
    expect(onBounceLeft).toHaveBeenCalledTimes(1);
  });
});
