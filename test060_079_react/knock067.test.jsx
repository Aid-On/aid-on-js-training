import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Knock067 } from '../src060_079_react/Knock067';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock067 React test', () => {
  it('renders a grid of circles with default props', () => {
    expect(() => {
      render(<Knock067 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(25); // 5x5 grid
  });

  it('accepts custom grid size', () => {
    render(<Knock067 gridSize={3} />);
    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(9); // 3x3 grid
  });

  it('toggles circle color on click', () => {
    render(<Knock067 />);
    const firstCircle = document.querySelector('circle');
    
    const initialFill = firstCircle.getAttribute('fill');
    fireEvent.click(firstCircle);
    
    expect(firstCircle.getAttribute('fill')).not.toBe(initialFill);
    
    // Click again to toggle back
    fireEvent.click(firstCircle);
    expect(firstCircle.getAttribute('fill')).toBe(initialFill);
  });

  it('calls onCircleToggle handler when provided', () => {
    const onCircleToggle = jest.fn();
    render(<Knock067 gridSize={2} onCircleToggle={onCircleToggle} />);
    
    const circles = document.querySelectorAll('circle');
    
    // Click first circle (0,0)
    fireEvent.click(circles[0]);
    expect(onCircleToggle).toHaveBeenCalledWith(0, 0);
    
    // Click last circle (1,1)
    fireEvent.click(circles[3]);
    expect(onCircleToggle).toHaveBeenCalledWith(1, 1);
    
    expect(onCircleToggle).toHaveBeenCalledTimes(2);
  });

  it('accepts custom circle properties', () => {
    const customProps = {
      circleRadius: 15,
      spacing: 40,
      startX: 100,
      startY: 80
    };
    
    render(<Knock067 gridSize={2} {...customProps} />);
    const circles = document.querySelectorAll('circle');
    
    // Check first circle (0,0)
    expect(circles[0].getAttribute('r')).toBe('15');
    expect(circles[0].getAttribute('cx')).toBe('100');
    expect(circles[0].getAttribute('cy')).toBe('80');
    
    // Check second circle (0,1) - should be spaced 40px to the right
    expect(circles[1].getAttribute('cx')).toBe('140');
    expect(circles[1].getAttribute('cy')).toBe('80');
  });
});
