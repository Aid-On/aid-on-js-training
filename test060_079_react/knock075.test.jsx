import React from "react";
import { render, act } from "@testing-library/react";
import { Knock075 } from "../src060_079_react/Knock075";
import { TrainingSkipError } from "../src020_039/common/TrainingSkipError";

describe("Knock075 React test", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders expanding/contracting circles with default parameters", () => {
    expect(() => {
      render(<Knock075 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll("circle");
    expect(circles.length).toBe(6); // デフォルトの円の数

    // Store initial radii
    const initialRadii = Array.from(circles).map((circle) =>
      Number(circle.getAttribute("r"))
    );

    // Advance time by default interval
    act(() => {
      jest.advanceTimersByTime(50);
    });

    // Check that radii have changed
    circles.forEach((circle, index) => {
      expect(Number(circle.getAttribute("r"))).not.toBe(initialRadii[index]);
    });
  });

  it("supports custom circle count and animation interval", () => {
    render(<Knock075 circleCount={4} animationInterval={100} />);

    const circles = document.querySelectorAll("circle");
    expect(circles.length).toBe(4); // カスタム設定の円の数

    // Store initial radii
    const initialRadii = Array.from(circles).map((circle) =>
      Number(circle.getAttribute("r"))
    );

    // Advance time by custom interval
    act(() => {
      jest.advanceTimersByTime(100);
    });

    // Check that radii have changed
    circles.forEach((circle, index) => {
      expect(Number(circle.getAttribute("r"))).not.toBe(initialRadii[index]);
    });
  });

  it("calls onAnimationTick handler with current time", () => {
    const onAnimationTick = jest.fn();
    render(<Knock075 onAnimationTick={onAnimationTick} />);

    // Advance time
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(onAnimationTick).toHaveBeenCalledTimes(1);
    expect(onAnimationTick).toHaveBeenCalledWith(0.1); // 最初の時間更新
  });
});
