import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Knock72 } from '../src060_079_react/Knock72';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock72 React test', () => {
  it('creates trail effect on mouse movement with default settings', () => {
    expect(() => {
      render(<Knock72 />);
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

    // Should have maximum 10 circles in trail by default
    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(10);

    // Check opacity progression
    const opacities = Array.from(circles).map(circle => 
      parseFloat(circle.getAttribute('opacity'))
    );
    
    // First circle should be most transparent
    expect(opacities[0]).toBeLessThan(opacities[opacities.length - 1]);
  });

  it('accepts custom maxTrailLength and circleRadius', () => {
    render(<Knock72 maxTrailLength={5} circleRadius={20} />);
    
    const container = document.querySelector('div');
    
    // Create more circles than maxTrailLength
    for (let i = 0; i < 8; i++) {
      fireEvent.mouseMove(container, {
        clientX: 100 + i * 20,
        clientY: 100 + i * 10,
        bubbles: true
      });
    }

    // Should respect custom maxTrailLength
    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(5);

    // Should use custom radius
    expect(circles[0].getAttribute('r')).toBe('20');
  });

  it('calls custom onMouseMove handler when provided', () => {
    const onMouseMove = jest.fn();
    render(<Knock72 onMouseMove={onMouseMove} />);
    
    const container = document.querySelector('div');
    
    fireEvent.mouseMove(container, {
      clientX: 150,
      clientY: 150,
      bubbles: true
    });

    expect(onMouseMove).toHaveBeenCalledTimes(1);
    const call = onMouseMove.mock.calls[0][0];
    expect(call).toHaveProperty('x');
    expect(call).toHaveProperty('y');
    expect(call).toHaveProperty('event');
  });
});
