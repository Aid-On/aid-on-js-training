import React from 'react';
import { render, act } from '@testing-library/react';
import { Knock73 } from '../src060_079_react/Knock73';
import { TrainingSkipError } from '../src/common/TrainingSkipError';

describe('Knock73 React test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('デフォルトパラメータで3つの円が正しく描画され、アニメーションする', () => {
    expect(() => {
      render(<Knock73 />);
    }).not.toThrow(TrainingSkipError);

    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(3);

    // 初期位置を記録
    const initialPositions = Array.from(circles).map(circle => ({
      x: circle.getAttribute('cx'),
      y: circle.getAttribute('cy')
    }));

    // デフォルトの更新間隔（50ms）でアニメーションを進める
    act(() => {
      jest.advanceTimersByTime(50);
    });

    // 位置が更新されていることを確認
    circles.forEach((circle, index) => {
      expect(circle.getAttribute('cx')).not.toBe(initialPositions[index].x);
      expect(circle.getAttribute('cy')).not.toBe(initialPositions[index].y);
    });
  });

  it('円が描画領域内に収まり続けることを確認', () => {
    const width = 600;
    const height = 400;
    const radius = 20;

    render(<Knock73 width={width} height={height} radius={radius} />);
    const circles = document.querySelectorAll('circle');

    // しばらくアニメーションを実行
    for (let i = 0; i < 100; i++) {
      act(() => {
        jest.advanceTimersByTime(50);
      });
    }

    // すべての円が領域内に収まっていることを確認
    circles.forEach(circle => {
      const x = Number(circle.getAttribute('cx'));
      const y = Number(circle.getAttribute('cy'));
      
      expect(x).toBeGreaterThanOrEqual(radius);
      expect(x).toBeLessThanOrEqual(width - radius);
      expect(y).toBeGreaterThanOrEqual(radius);
      expect(y).toBeLessThanOrEqual(height - radius);
    });
  });

  it('カスタムの更新間隔でアニメーションが動作する', () => {
    const intervalMs = 20;
    render(<Knock73 intervalMs={intervalMs} />);
    const circles = document.querySelectorAll('circle');

    const initialPositions = Array.from(circles).map(circle => ({
      x: Number(circle.getAttribute('cx')),
      y: Number(circle.getAttribute('cy'))
    }));

    // カスタム間隔でアニメーションを進める
    act(() => {
      jest.advanceTimersByTime(intervalMs);
    });

    // 指定した間隔で位置が更新されていることを確認
    circles.forEach((circle, index) => {
      const newX = Number(circle.getAttribute('cx'));
      const newY = Number(circle.getAttribute('cy'));
      expect(newX).not.toBe(initialPositions[index].x);
      expect(newY).not.toBe(initialPositions[index].y);
    });
  });

  it('カスタムの初期位置と速度で円が動作する', () => {
    const customCircles = [
      { x: 50, y: 50, dx: 2, dy: 2 },
      { x: 150, y: 150, dx: -2, dy: -2 }
    ];

    render(<Knock73 initialCircles={customCircles} />);
    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBe(customCircles.length);

    // 初期位置を確認
    circles.forEach((circle, index) => {
      expect(Number(circle.getAttribute('cx'))).toBe(customCircles[index].x);
      expect(Number(circle.getAttribute('cy'))).toBe(customCircles[index].y);
    });

    // アニメーションを進めて、設定した速度で動くことを確認
    act(() => {
      jest.advanceTimersByTime(50);
    });

    circles.forEach((circle, index) => {
      const newX = Number(circle.getAttribute('cx'));
      const newY = Number(circle.getAttribute('cy'));
      expect(newX).toBe(customCircles[index].x + customCircles[index].dx);
      expect(newY).toBe(customCircles[index].y + customCircles[index].dy);
    });
  });
});
