import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Knock67 } from '../src060_079_react/Knock67';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock67 React test', () => {
  it('renders a grid of circles', () => {
    expect(() => {
      render(<Knock67 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(25); // 5x5 grid
  });

  it('toggles circle color on click', () => {
    render(<Knock67 />);
    const firstCircle = document.querySelector('circle');
    
    const initialFill = firstCircle.getAttribute('fill');
    fireEvent.click(firstCircle);
    
    expect(firstCircle.getAttribute('fill')).not.toBe(initialFill);
    
    // Click again to toggle back
    fireEvent.click(firstCircle);
    expect(firstCircle.getAttribute('fill')).toBe(initialFill);
  });
});
