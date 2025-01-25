import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Knock71 } from '../src060_079_react/Knock71';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock71 React test', () => {
  it('adds circles on click up to maximum limit', () => {
    expect(() => {
      render(<Knock71 />);
    }).not.toThrow(TrainingSkipError);

    const container = document.querySelector('div');
    
    // Initially no circles
    expect(document.querySelectorAll('circle').length).toBe(0);

    // Add circles by clicking
    for (let i = 0; i < 5; i++) {
      fireEvent.click(container, {
        clientX: 100 + i * 50,
        clientY: 100 + i * 50,
        bubbles: true
      });
    }

    expect(document.querySelectorAll('circle').length).toBe(5);

    // Try to add more than limit (10)
    for (let i = 0; i < 10; i++) {
      fireEvent.click(container, {
        clientX: 200 + i * 20,
        clientY: 200,
        bubbles: true
      });
    }

    // Should still be limited to 10 circles
    expect(document.querySelectorAll('circle').length).toBe(10);
  });
});
