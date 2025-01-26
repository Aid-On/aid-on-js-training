import React from 'react';
import { render, act } from '@testing-library/react';
import { Knock063 } from '../src060_079_react/Knock063';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock063 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders a circle moving in a circular path with default parameters', () => {
    expect(() => {
      render(<Knock063 />);
    }).not.toThrow(TrainingSkipError);

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const orbitPath = document.querySelector('[data-testid="orbit-path"]');
    const movingCircle = document.querySelector('[data-testid="moving-circle"]');
    
    expect(orbitPath).toBeInTheDocument();
    expect(movingCircle).toBeInTheDocument();

    // Verify default parameters
    expect(Number(orbitPath.getAttribute('r'))).toBe(100); // Default orbit radius
    expect(Number(movingCircle.getAttribute('r'))).toBe(30); // Default circle radius

    // Test default animation
    const initialX = movingCircle.getAttribute('cx');
    const initialY = movingCircle.getAttribute('cy');

    act(() => {
      jest.advanceTimersByTime(50); // Default interval
    });

    // Position should change after time advancement
    expect(movingCircle.getAttribute('cx')).not.toBe(initialX);
    expect(movingCircle.getAttribute('cy')).not.toBe(initialY);
  });

  it('supports custom animation parameters', () => {
    const customProps = {
      angleIncrement: 10,
      interval: 100,
      orbitRadius: 50,
      circleRadius: 15,
      centerX: 200,
      centerY: 150
    };
    
    render(<Knock063 {...customProps} />);
    
    const orbitPath = document.querySelector('[data-testid="orbit-path"]');
    const movingCircle = document.querySelector('[data-testid="moving-circle"]');

    // Verify custom parameters
    expect(Number(orbitPath.getAttribute('r'))).toBe(customProps.orbitRadius);
    expect(Number(movingCircle.getAttribute('r'))).toBe(customProps.circleRadius);
    expect(Number(orbitPath.getAttribute('cx'))).toBe(customProps.centerX);
    expect(Number(orbitPath.getAttribute('cy'))).toBe(customProps.centerY);

    const initialX = movingCircle.getAttribute('cx');
    const initialY = movingCircle.getAttribute('cy');

    act(() => {
      jest.advanceTimersByTime(customProps.interval);
    });

    // Position should change according to custom parameters
    expect(movingCircle.getAttribute('cx')).not.toBe(initialX);
    expect(movingCircle.getAttribute('cy')).not.toBe(initialY);
  });
});
