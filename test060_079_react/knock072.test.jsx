import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Knock072 } from "../src060_079_react/Knock072";

describe("Knock072 React test", () => {
  it("creates trail effect on mouse movement with default settings", () => {
    render(<Knock072 />);

    const container = screen.getByTestId("container");

    // 初期状態では円が 0 個
    expect(document.querySelectorAll("circle").length).toBe(0);

    // マウス移動をシミュレーション
    for (let i = 0; i < 15; i++) {
      fireEvent.mouseMove(container, {
        clientX: 100 + i * 20,
        clientY: 100 + i * 10,
        bubbles: true,
      });
    }

    // 軌跡の最大数は 10 のはず
    const circles = document.querySelectorAll("circle");
    expect(circles.length).toBe(10);

    // 軌跡の透明度が進行するか確認
    const opacities = Array.from(circles).map((circle) =>
      parseFloat(circle.getAttribute("opacity"))
    );
    expect(opacities[0]).toBeLessThan(opacities[opacities.length - 1]);
  });

  it("accepts custom maxTrailLength and circleRadius", () => {
    render(<Knock072 maxTrailLength={5} circleRadius={20} />);

    const container = screen.getByTestId("container");

    // マウス移動をシミュレーション
    for (let i = 0; i < 8; i++) {
      fireEvent.mouseMove(container, {
        clientX: 100 + i * 20,
        clientY: 100 + i * 10,
        bubbles: true,
      });
    }

    // 軌跡の最大数はカスタム値 (5) に従う
    const circles = document.querySelectorAll("circle");
    expect(circles.length).toBe(5);

    // 円の半径もカスタム値 (20) に従う
    expect(circles[0].getAttribute("r")).toBe("20");
  });
});
