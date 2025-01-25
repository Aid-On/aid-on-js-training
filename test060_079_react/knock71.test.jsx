import React, { act } from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { Knock71 } from '../src060_079_react/Knock71';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock71 React test', () => {
  afterEach(cleanup);
  it('adds circles on click up to default maximum limit', () => {
    expect(() => {
      render(<Knock71 />);
    }).not.toThrow(TrainingSkipError);

    const container = screen.getByTestId('canvas');
    
    // Mock getBoundingClientRect
    container.getBoundingClientRect = jest.fn(() => ({
      left: 0,
      top: 0,
      width: 600,
      height: 400
    }));
    
    // Initially no circles
    expect(screen.queryAllByTestId('circle').length).toBe(0);

    // Add circles by clicking
    for (let i = 0; i < 5; i++) {
      act(() => {
        fireEvent.click(container, {
          clientX: 100 + i * 50,
          clientY: 100 + i * 50,
          bubbles: true
        });
      });
    }

    expect(screen.queryAllByTestId('circle').length).toBe(5);

    // Try to add more than limit
    fireEvent.click(container, {
      clientX: 200,
      clientY: 200,
      bubbles: true
    });

    // Should still be limited to 5 circles
    expect(screen.queryAllByTestId('circle').length).toBe(5);
  });

  it('honors custom maxCircles prop', () => {
    render(<Knock71 maxCircles={2} />);
    const container = screen.getByTestId('canvas');
    
    // Mock getBoundingClientRect
    container.getBoundingClientRect = jest.fn(() => ({
      left: 0,
      top: 0,
      width: 600,
      height: 400
    }));
    
    // Add more than the custom limit
    for (let i = 0; i < 3; i++) {
      act(() => {
        fireEvent.click(container, {
          clientX: 100 + i * 50,
          clientY: 100 + i * 50,
          bubbles: true
        });
      });
    }

    // Should be capped at 2
    expect(screen.queryAllByTestId('circle').length).toBe(2);
  });

  it('calls onCircleAdd handler when circles are added', () => {
    const onCircleAdd = jest.fn();
    render(<Knock71 onCircleAdd={onCircleAdd} />);
    
    const container = screen.getByTestId('canvas');
    
    // Mock getBoundingClientRect
    container.getBoundingClientRect = jest.fn(() => ({
      left: 0,
      top: 0,
      width: 600,
      height: 400
    }));
    
    // Add two circles
    act(() => {
      fireEvent.click(container, {
        clientX: 100,
        clientY: 100,
        bubbles: true
      });
    });
    
    act(() => {
      fireEvent.click(container, {
        clientX: 150,
        clientY: 150,
        bubbles: true
      });
    });

    expect(onCircleAdd).toHaveBeenCalledTimes(2);
    expect(onCircleAdd).toHaveBeenCalledWith(expect.objectContaining({
      x: expect.any(Number),
      y: expect.any(Number)
    }));
  });
});
