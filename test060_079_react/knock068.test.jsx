import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Knock068 } from '../src060_079_react/Knock068';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock068 React test', () => {
  it('renders a circle that changes size based on mouse distance with default behavior', () => {
    expect(() => {
      render(<Knock068 />);
    }).not.toThrow(TrainingSkipError);

    const container = document.querySelector('div');
    const circle = document.querySelector('circle');
    expect(circle).toBeInTheDocument();

    // Check default center position
    expect(Number(circle.getAttribute('cx'))).toBe(300);
    expect(Number(circle.getAttribute('cy'))).toBe(200);

    const initialRadius = Number(circle.getAttribute('r'));
    expect(initialRadius).toBe(20); // Should be minRadius initially

    // Move mouse far from center
    fireEvent.mouseMove(container, {
      clientX: 600,
      clientY: 400,
      bubbles: true
    });

    expect(Number(circle.getAttribute('r'))).toBeGreaterThan(initialRadius);

    // Move mouse near center
    fireEvent.mouseMove(container, {
      clientX: 300,
      clientY: 200,
      bubbles: true
    });

    expect(Number(circle.getAttribute('r'))).toBeLessThanOrEqual(initialRadius);
  });

  it('accepts custom center position and radius values', () => {
    render(<Knock068 
      centerX={150} 
      centerY={100} 
      minRadius={10} 
      maxRadius={50} 
      distanceNorm={100}
    />);

    const circle = document.querySelector('circle');
    
    // Check custom center position
    expect(Number(circle.getAttribute('cx'))).toBe(150);
    expect(Number(circle.getAttribute('cy'))).toBe(100);
    
    // Check initial radius (should be minRadius)
    expect(Number(circle.getAttribute('r'))).toBe(10);
  });

  it('calls custom movement handler when provided', () => {
    const onMouseMove = jest.fn();
    
    render(<Knock068 onMouseMove={onMouseMove} />);
    
    const container = document.querySelector('div');
    
    // Trigger mouse movement
    fireEvent.mouseMove(container, {
      clientX: 400,
      clientY: 300,
      bubbles: true
    });

    expect(onMouseMove).toHaveBeenCalledTimes(1);
  });
});
