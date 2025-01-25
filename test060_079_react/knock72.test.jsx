import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { knock72 } from '../src060_079_react/knock72';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('knock72 React test', () => {
  it('creates trail effect on mouse movement', () => {
    expect(() => {
      render(<knock72 />);
    }).not.toThrow(TrainingSkipError);

    const container = document.querySelector('div');
    
    // Initially no circles
    expect(document.querySelectorAll('circle').length).toBe(0);

    // Move mouse to create trail
    for (let i = 0; i < 15; i++) {
      fireEvent.mouseMove(container, {
        clientX: 100 + i * 20,
        clientY: 100 + i * 10,
        bubbles: true
      });
    }

    // Should have maximum 10 circles in trail
    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(10);

    // Check opacity progression
    const opacities = Array.from(circles).map(circle => 
      parseFloat(circle.getAttribute('opacity'))
    );
    
    // First circle should be most transparent
    expect(opacities[0]).toBeLessThan(opacities[opacities.length - 1]);
  });
});
