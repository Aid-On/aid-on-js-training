import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Knock062 } from '../src060_079_react/Knock062';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock062 React test', () => {
  it('renders a movable circle and responds to keyboard input with default behavior', () => {
    expect(() => {
      render(<Knock062 />);
    }).not.toThrow(TrainingSkipError);

    const container = document.querySelector('div');
    const circle = document.querySelector('circle');
    
    expect(circle).toBeInTheDocument();
    expect(Number(circle.getAttribute('cx'))).toBe(-270); // Check default initial position

    // Test left arrow movement
    act(() => {
      fireEvent.keyDown(container, { key: 'ArrowLeft', bubbles: true });
    });
    expect(Number(circle.getAttribute('cx'))).toBe(-280); // Default move distance is 10

    // Test right arrow movement
    act(() => {
      fireEvent.keyDown(container, { key: 'ArrowRight', bubbles: true });
      fireEvent.keyDown(container, { key: 'ArrowRight', bubbles: true });
    });
    expect(Number(circle.getAttribute('cx'))).toBe(-260);
  });

  it('accepts custom initial position and move distance', () => {
    render(<Knock062 initialX={0} moveDistance={20} />);
    
    const container = document.querySelector('div');
    const circle = document.querySelector('circle');
    
    expect(Number(circle.getAttribute('cx'))).toBe(0);

    act(() => {
      fireEvent.keyDown(container, { key: 'ArrowLeft', bubbles: true });
    });
    expect(Number(circle.getAttribute('cx'))).toBe(-20);
  });

  it('calls custom movement handlers when provided', () => {
    const onMoveLeft = jest.fn();
    const onMoveRight = jest.fn();
    
    render(<Knock062 onMoveLeft={onMoveLeft} onMoveRight={onMoveRight} />);
    
    const container = document.querySelector('div');
    
    act(() => {
      fireEvent.keyDown(container, { key: 'ArrowLeft', bubbles: true });
    });
    expect(onMoveLeft).toHaveBeenCalledTimes(1);
    
    act(() => {
      fireEvent.keyDown(container, { key: 'ArrowRight', bubbles: true });
    });
    expect(onMoveRight).toHaveBeenCalledTimes(1);
  });
});
