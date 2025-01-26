import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Knock060 } from '../src060_079_react/Knock060';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock060 React test', () => {
  it('renders a circle with default center coordinates', () => {
    expect(() => {
      render(<Knock060 />);
    }).not.toThrow(TrainingSkipError);

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const circle = svg.querySelector('circle');
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveAttribute('cx', '200');
    expect(circle).toHaveAttribute('cy', '150');
    expect(circle).toHaveAttribute('r', '50');
  });

  it('renders a circle with custom center coordinates and radius', () => {
    render(<Knock060 cx={300} cy={250} radius={30} />);
    
    const circle = document.querySelector('circle');
    expect(circle).toHaveAttribute('cx', '300');
    expect(circle).toHaveAttribute('cy', '250');
    expect(circle).toHaveAttribute('r', '30');
  });

  it('updates circle position on mouse move and calls onMove callback', () => {
    const onMoveMock = jest.fn();
    render(<Knock060 onMove={onMoveMock} />);
    
    const svg = document.querySelector('svg');
    
    // Mock getBoundingClientRect to return fixed values for testing
    const mockRect = {
      left: 0,
      top: 0,
      width: 600,
      height: 400
    };
    svg.getBoundingClientRect = jest.fn(() => mockRect);

    // Simulate mouse movement to (100, 100)
    act(() => {
      fireEvent.mouseMove(svg, {
        clientX: 100,
        clientY: 100,
        bubbles: true
      });
    });

    const circle = svg.querySelector('circle');
    expect(circle).toHaveAttribute('cx', '100');
    expect(circle).toHaveAttribute('cy', '100');
    expect(onMoveMock).toHaveBeenCalledWith(100, 100);
  });
});
