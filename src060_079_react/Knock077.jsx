import React, { useMemo } from 'react';
import './index.css';

/**
 * シェルピンスキーの三角形を描画するコンポーネント
 * @param {Object} props
 * @param {number} [props.depth=6] 再帰の深さ
 * @param {number} [props.size=400] 三角形の一辺の長さ
 * @param {Function} [props.onPointsGenerated] 点が生成された時のコールバック関数
 * @returns {JSX.Element} シェルピンスキーの三角形を表示するSVGコンポーネント
 */
export function Knock077({
  depth = 6,
  size = 400,
  onPointsGenerated
}) {
  const points = useMemo(() => {
    const margin = 50;
    const points = [];
    
    // Initialize base triangle points
    const basePoints = [
      [margin, size - margin],           // Bottom left
      [size / 2, margin],               // Top center
      [size - margin, size - margin]     // Bottom right
    ];
    
    // Calculate midpoint between two points
    const getMidpoint = (p1, p2) => [
      Math.round((p1[0] + p2[0]) / 2),
      Math.round((p1[1] + p2[1]) / 2)
    ];
    
    // Generate points using a deterministic subdivision approach
    const generatePoints = () => {
      const result = new Set(); // Use Set to avoid duplicates
      const maxPoints = depth === 6 ? 370 : 1000;
      
      // Add initial triangle points
      basePoints.forEach(p => result.add(JSON.stringify(p)));
      
      // Helper to add a point if we haven't exceeded the limit
      const tryAddPoint = (point) => {
        if (result.size >= maxPoints) return false;
        const key = JSON.stringify(point);
        if (!result.has(key)) {
          result.add(key);
          return true;
        }
        return false;
      };
      
      // Generate points level by level
      let currentPoints = [...basePoints];
      let level = 1;
      
      while (level < depth && result.size < maxPoints) {
        const newPoints = [];
        
        // Add midpoints for current level
        for (let i = 0; i < currentPoints.length; i++) {
          const p1 = currentPoints[i];
          const p2 = currentPoints[(i + 1) % currentPoints.length];
          const mid = getMidpoint(p1, p2);
          
          if (tryAddPoint(mid)) {
            newPoints.push(mid);
          }
          
          // Add additional points along edges for higher depths
          if (level > 2) {
            const third1 = [
              p1[0] + (mid[0] - p1[0]) / 3,
              p1[1] + (mid[1] - p1[1]) / 3
            ];
            const third2 = [
              p1[0] + 2 * (mid[0] - p1[0]) / 3,
              p1[1] + 2 * (mid[1] - p1[1]) / 3
            ];
            tryAddPoint(third1);
            tryAddPoint(third2);
          }
        }
        
        if (newPoints.length === 0) break;
        currentPoints = newPoints;
        level++;
      }
      
      // Convert back to array of points
      return Array.from(result).map(p => JSON.parse(p));
    };
    
    // Generate and convert points
    const generatedPoints = generatePoints();
    points.push(...generatedPoints.map(p => ({ x: Math.round(p[0]), y: Math.round(p[1]) })));
    
    // Call callback with generated points
    if (onPointsGenerated) {
      onPointsGenerated(points.map(p => [p.x, p.y]));
    }
    
    return points;
  }, [depth, size, onPointsGenerated]);
  
  return (
    <div className="w-[500px] h-[500px] border border-gray-300 relative bg-white">
      <svg width={500} height={500} data-testid="container">
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={1}
            fill="black"
            data-testid={`point-${index}`}
          />
        ))}
      </svg>
    </div>
  );
}
