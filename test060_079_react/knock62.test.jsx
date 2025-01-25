import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Knock62 } from '../src060_079_react/Knock62';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock62 React test', () => {
  it('renders a movable circle and responds to keyboard input', () => {
    expect(() => {
      render(<Knock62 />);
    }).not.toThrow(TrainingSkipError);

    const container = document.querySelector('div');
    const circle = document.querySelector('circle');
    
    expect(circle).toBeInTheDocument();
    const initialX = circle.getAttribute('cx');

    // Test left arrow movement
    fireEvent.keyDown(container, { key: 'ArrowLeft' });
    expect(circle).toHaveAttribute('cx', String(Number(initialX) - 10));

    // Test right arrow movement
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    expect(circle).toHaveAttribute('cx', String(Number(initialX) + 10));
  });
});
