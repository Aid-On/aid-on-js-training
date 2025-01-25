import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { knock67 } from '../src060_079_react/knock67';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock67 React test', () => {
  it('renders a grid of circles', () => {
    expect(() => {
      render(<knock67 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(25); // 5x5 grid
  });

  it('toggles circle color on click', () => {
    render(<knock67 />);
    const firstCircle = document.querySelector('circle');
    
    const initialFill = firstCircle.getAttribute('fill');
    fireEvent.click(firstCircle);
    
    expect(firstCircle.getAttribute('fill')).not.toBe(initialFill);
    
    // Click again to toggle back
    fireEvent.click(firstCircle);
    expect(firstCircle.getAttribute('fill')).toBe(initialFill);
  });
});
