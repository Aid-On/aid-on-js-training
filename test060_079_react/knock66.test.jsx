import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { knock66 } from '../src060_079_react/knock66';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock66 React test', () => {
  it('renders a circle that follows mouse movement', () => {
    expect(() => {
      render(<knock66 />);
    }).not.toThrow(TrainingSkipError);

    const container = document.querySelector('div');
    const circle = document.querySelector('circle');
    expect(circle).toBeInTheDocument();

    const initialX = circle.getAttribute('cx');
    const initialY = circle.getAttribute('cy');

    // Simulate mouse movement
    fireEvent.mouseMove(container, {
      clientX: 400,
      clientY: 300,
      bubbles: true
    });

    expect(circle.getAttribute('cx')).not.toBe(initialX);
    expect(circle.getAttribute('cy')).not.toBe(initialY);
  });

  it('keeps circle within bounds', () => {
    render(<knock66 />);
    const container = document.querySelector('div');
    const circle = document.querySelector('circle');
    const radius = Number(circle.getAttribute('r'));

    // Test boundary at top-left
    fireEvent.mouseMove(container, {
      clientX: 0,
      clientY: 0,
      bubbles: true
    });

    expect(Number(circle.getAttribute('cx'))).toBeGreaterThanOrEqual(radius);
    expect(Number(circle.getAttribute('cy'))).toBeGreaterThanOrEqual(radius);

    // Test boundary at bottom-right
    fireEvent.mouseMove(container, {
      clientX: 1000,
      clientY: 1000,
      bubbles: true
    });

    expect(Number(circle.getAttribute('cx'))).toBeLessThanOrEqual(600 - radius);
    expect(Number(circle.getAttribute('cy'))).toBeLessThanOrEqual(400 - radius);
  });
});
