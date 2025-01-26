import React from "react";
import { render } from "@testing-library/react";
import { Knock077 } from "../src060_079_react/Knock077";
import { TrainingSkipError } from "../src020_039/common/TrainingSkipError";

describe("Knock077 React test", () => {
  it("renders Sierpinski triangle fractal with default depth", () => {
    expect(() => {
      render(<Knoc077 />);
    }).not.toThrow(TrainingSkipError);

    const points = document.querySelectorAll("circle");
    // With depth=6 (default), we expect around 364 points
    expect(points.length).toBeGreaterThan(350);
    expect(points.length).toBeLessThan(380);

    // Check that points form a triangular shape
    const positions = Array.from(points).map((point) => ({
      x: Number(point.getAttribute("cx")),
      y: Number(point.getAttribute("cy")),
    }));

    // Find bounding triangle vertices
    const minX = Math.min(...positions.map((p) => p.x));
    const maxX = Math.max(...positions.map((p) => p.x));
    const minY = Math.min(...positions.map((p) => p.y));
    const maxY = Math.max(...positions.map((p) => p.y));

    // Verify the triangle bounds match expected coordinates
    expect(minX).toBeCloseTo(150, 0); // leftmost point
    expect(maxX).toBeCloseTo(450, 0); // rightmost point
    expect(minY).toBeCloseTo(50, 0); // topmost point
    expect(maxY).toBeCloseTo(350, 0); // bottom points
  });

  it("accepts custom depth parameter", () => {
    render(<Knock077 depth={7} />);

    const points = document.querySelectorAll("circle");
    // With depth=7, we expect around 1093 points
    expect(points.length).toBeGreaterThan(1080);
    expect(points.length).toBeLessThan(1100);
  });

  it("calls onPointsGenerated callback when points are generated", () => {
    const onPointsGenerated = jest.fn();
    render(<Knock077 depth={6} onPointsGenerated={onPointsGenerated} />);

    expect(onPointsGenerated).toHaveBeenCalledTimes(1);
    const points = onPointsGenerated.mock.calls[0][0];
    expect(Array.isArray(points)).toBe(true);
    expect(points.length).toBeGreaterThan(350);
    expect(points.length).toBeLessThan(380);

    // Verify point structure
    const firstPoint = points[0];
    expect(Array.isArray(firstPoint)).toBe(true);
    expect(firstPoint.length).toBe(2);
    expect(typeof firstPoint[0]).toBe("number"); // x coordinate
    expect(typeof firstPoint[1]).toBe("number"); // y coordinate
  });
});
