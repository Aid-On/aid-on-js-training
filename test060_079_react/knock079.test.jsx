import React from "react";
import { render } from "@testing-library/react";
import { Knock079 } from "../src060_079_react/Knock079";
import { TrainingSkipError } from "../src/common/TrainingSkipError";

describe("Knock79 React test", () => {
  it("renders Mandelbrot set visualization with default parameters", () => {
    expect(() => {
      render(<Knock079 />);
    }).not.toThrow(TrainingSkipError);

    const rect = document.querySelector("rect");
    expect(rect).toBeInTheDocument();
    expect(rect).toHaveAttribute("width", "600");
    expect(rect).toHaveAttribute("height", "400");

    // Check that points are rendered
    const points = document.querySelectorAll("circle");
    expect(points.length).toBeGreaterThan(0);

    // Verify that points have different colors (hsl values)
    const colors = new Set(
      Array.from(points).map((p) => p.getAttribute("fill"))
    );
    expect(colors.size).toBeGreaterThan(1);
  });

  it("accepts custom dimensions", () => {
    render(<Knock079 width={300} height={200} />);

    const rect = document.querySelector("rect");
    expect(rect).toHaveAttribute("width", "300");
    expect(rect).toHaveAttribute("height", "200");

    const svg = document.querySelector("svg");
    expect(svg).toHaveAttribute("width", "300");
    expect(svg).toHaveAttribute("height", "200");
  });

  it("renders with custom sampling rate and iterations", () => {
    render(<Knock079 samplingRate={4} maxIterations={50} />);

    // With larger sampling rate, we should have fewer points
    const points = document.querySelectorAll("circle");
    const defaultPoints = document.querySelectorAll("circle").length;

    // Re-render with default sampling rate to compare
    render(<Knock079 />);
    const pointsWithDefaultSampling =
      document.querySelectorAll("circle").length;

    // Should have fewer points with larger sampling rate
    expect(points.length).toBeLessThan(pointsWithDefaultSampling);
  });
});
