import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Knock68 } from '../src060_079_react/Knock68';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock68 React test', () => {
  it('renders a circle that changes size based on mouse distance', () => {
    expect(() => {
      render(<Knock68 />);
    }).not.toThrow(TrainingSkipError);

    const container = document.querySelector('div');
    const circle = document.querySelector('circle');
    expect(circle).toBeInTheDocument();

    const initialRadius = circle.getAttribute('r');

    // Move mouse far from center
    fireEvent.mouseMove(container, {
      clientX: 600,
      clientY: 400,
      bubbles: true
    });

    expect(Number(circle.getAttribute('r'))).toBeGreaterThan(Number(initialRadius));

    // Move mouse near center
    fireEvent.mouseMove(container, {
      clientX: 300,
      clientY: 200,
      bubbles: true
    });

    expect(Number(circle.getAttribute('r'))).toBeLessThanOrEqual(Number(initialRadius));
  });
});
