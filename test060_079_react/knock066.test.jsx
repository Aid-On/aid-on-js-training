import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { Knock066 } from '../src060_079_react/Knock066';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock066 React test', () => {
  it('renders with default props and follows mouse movement', () => {
    expect(() => {
      render(<Knock066 />);
    }).not.toThrow(TrainingSkipError);

    const container = screen.getByTestId('container');
    const circle = screen.getByTestId('circle');
    expect(circle).toBeInTheDocument();

    // Check default initial position
    expect(Number(circle.getAttribute('cx'))).toBe(180);
    expect(Number(circle.getAttribute('cy'))).toBe(150);
    expect(Number(circle.getAttribute('r'))).toBe(30);

    // Simulate mouse movement
    act(() => {
      fireEvent.mouseMove(container, {
        clientX: 400,
        clientY: 300,
        bubbles: true
      });
    });

    expect(Number(circle.getAttribute('cx'))).toBe(400);
    expect(Number(circle.getAttribute('cy'))).toBe(300);
  });

  it('accepts custom initial position and radius', () => {
    render(<Knock066 initialX={100} initialY={200} radius={20} />);
    const circle = screen.getByTestId('circle');
    
    expect(Number(circle.getAttribute('cx'))).toBe(100);
    expect(Number(circle.getAttribute('cy'))).toBe(200);
    expect(Number(circle.getAttribute('r'))).toBe(20);
  });

  it('accepts custom window dimensions', () => {
    render(<Knock066 width={800} height={600} />);
    const container = screen.getByTestId('container');
    const svg = screen.getByTestId('svg-container');
    
    expect(container.style.width).toBe('800px');
    expect(container.style.height).toBe('600px');
    expect(svg.getAttribute('width')).toBe('800');
    expect(svg.getAttribute('height')).toBe('600');
  });

  it('keeps circle within bounds', () => {
    const radius = 30;
    render(<Knock066 radius={radius} width={400} height={300} />);
    const container = screen.getByTestId('container');
    const circle = screen.getByTestId('circle');

    // Test boundary at top-left
    act(() => {
      fireEvent.mouseMove(container, {
        clientX: 0,
        clientY: 0,
        bubbles: true
      });
    });

    expect(Number(circle.getAttribute('cx'))).toBe(radius);
    expect(Number(circle.getAttribute('cy'))).toBe(radius);

    // Test boundary at bottom-right
    act(() => {
      fireEvent.mouseMove(container, {
        clientX: 1000,
        clientY: 1000,
        bubbles: true
      });
    });

    expect(Number(circle.getAttribute('cx'))).toBe(400 - radius);
    expect(Number(circle.getAttribute('cy'))).toBe(300 - radius);
  });

  it('calls onMove handler when position changes', () => {
    const onMove = jest.fn();
    render(<Knock066 onMove={onMove} />);
    const container = screen.getByTestId('container');

    act(() => {
      fireEvent.mouseMove(container, {
        clientX: 200,
        clientY: 250,
        bubbles: true
      });
    });

    expect(onMove).toHaveBeenCalledWith(expect.objectContaining({
      x: 200,
      y: 250
    }));
  });
});
