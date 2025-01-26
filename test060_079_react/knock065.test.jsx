import React from 'react';
import { render, act } from '@testing-library/react';
import { Knock065 } from '../src060_079_react/Knock065';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock065 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders a diagonally bouncing circle with default parameters', () => {
    expect(() => {
      render(<Knock065 />);
    }).not.toThrow(TrainingSkipError);

    const circle = document.querySelector('circle');
    expect(circle).toBeInTheDocument();

    // Check default initial position
    expect(Number(circle.getAttribute('cx'))).toBe(30);
    expect(Number(circle.getAttribute('cy'))).toBe(30);

    // Test diagonal movement with default velocity
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(Number(circle.getAttribute('cx'))).toBe(35); // 30 + 5 (default velocityX)
    expect(Number(circle.getAttribute('cy'))).toBe(35); // 30 + 5 (default velocityY)
  });

  it('accepts custom initial position and velocity', () => {
    render(<Knock065 initialX={100} initialY={200} velocityX={10} velocityY={15} />);
    const circle = document.querySelector('circle');
    
    // Check custom initial position
    expect(Number(circle.getAttribute('cx'))).toBe(100);
    expect(Number(circle.getAttribute('cy'))).toBe(200);

    // Test movement with custom velocity
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(Number(circle.getAttribute('cx'))).toBe(110); // 100 + 10
    expect(Number(circle.getAttribute('cy'))).toBe(215); // 200 + 15
  });

  it('calls collision handlers when hitting boundaries', () => {
    const onCollideX = jest.fn();
    const onCollideY = jest.fn();
    
    // Start near right boundary to trigger X collision
    render(<Knock065 
      initialX={560} 
      initialY={200} 
      velocityX={50} 
      velocityY={5}
      onCollideX={onCollideX}
      onCollideY={onCollideY}
    />);
    
    // Advance time to trigger collision
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(onCollideX).toHaveBeenCalledTimes(1);
    expect(onCollideY).not.toHaveBeenCalled();

    // Reset mocks and rerender near bottom boundary
    jest.clearAllMocks();
    render(<Knock065 
      initialX={200} 
      initialY={360} 
      velocityX={5} 
      velocityY={50}
      onCollideX={onCollideX}
      onCollideY={onCollideY}
    />);

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(onCollideX).not.toHaveBeenCalled();
    expect(onCollideY).toHaveBeenCalledTimes(1);
  });

  it('stays within window bounds', () => {
    render(<Knock065 />);
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
