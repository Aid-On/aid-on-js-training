import React from "react";
import { render, act } from "@testing-library/react";
import { Knock076 } from "../src060_079_react/Knock076";
import { TrainingSkipError } from "../src/common/TrainingSkipError";

describe("Knock76 React test", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders Monte Carlo π calculation visualization with default behavior", () => {
    expect(() => {
      render(<Knock076 />);
    }).not.toThrow(TrainingSkipError);

    // Check initial state
    expect(document.querySelector("circle")).toBeInTheDocument();
    expect(document.querySelector("rect")).toBeInTheDocument();

    // Run simulation for a while
    for (let i = 0; i < 20; i++) {
      act(() => {
        jest.advanceTimersByTime(50);
      });
    }

    // Check that points have been added
    const points = document.querySelectorAll("circle");
    expect(points.length).toBeGreaterThan(1);

    // Check that pi estimate is displayed
    const piText = document.querySelector("div").textContent;
    expect(piText).toMatch(/π ≈ \d+\.\d{4}/);
  });

  it("uses custom point generation and notifies on point added", () => {
    const mockCreatePoint = jest
      .fn()
      .mockReturnValueOnce({ x: 0, y: 0 }) // Point at center (inside circle)
      .mockReturnValueOnce({ x: 200, y: 0 }); // Point outside circle

    const onPointAdded = jest.fn();

    render(
      <Knock076 createPoint={mockCreatePoint} onPointAdded={onPointAdded} />
    );

    // Advance timer twice to add two points
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(mockCreatePoint).toHaveBeenCalledTimes(1);
    expect(onPointAdded).toHaveBeenCalledTimes(1);
    expect(onPointAdded).toHaveBeenCalledWith(
      expect.objectContaining({
        x: 0,
        y: 0,
        isInside: true,
      })
    );

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(mockCreatePoint).toHaveBeenCalledTimes(2);
    expect(onPointAdded).toHaveBeenCalledTimes(2);
    expect(onPointAdded).toHaveBeenLastCalledWith(
      expect.objectContaining({
        x: 200,
        y: 0,
        isInside: false,
      })
    );

    // Verify points are rendered
    const points = document.querySelectorAll("circle");
    expect(points.length).toBe(3); // Including the main circle
  });
});
