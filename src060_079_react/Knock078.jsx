import React, { useMemo } from 'react';
import './index.css';

/**
 * 二分木フラクタルを描画するコンポーネント
 * @param {Object} props
 * @param {number} [props.initialDepth=5] 再帰の深さ
 * @param {number} [props.initialLength=50] 初期の枝の長さ
 * @param {number} [props.branchRatio=0.7] 枝の長さの比率
 * @param {Function} [props.onBranchesGenerated] 枝が生成された時のコールバック関数
 * @returns {JSX.Element} 二分木フラクタルを表示するSVGコンポーネント
 */
export function Knock078({
  initialDepth = 5,
  initialLength = 50,
  branchRatio = 0.7,
  onBranchesGenerated
}) {
  const branches = useMemo(() => {
    const result = [];
    
    // 枝を生成する再帰関数
    const generateBranch = (x, y, len, angle, level) => {
      if (level <= 0) return;
      
      // Calculate branch length based on level
      const currentLength = level === initialDepth ? initialLength : Math.round(initialLength * Math.pow(branchRatio, initialDepth - level));
      
      // Calculate endpoint using trigonometry
      const angleRad = angle * Math.PI / 180;
      const endX = x + currentLength * Math.sin(angleRad);
      const endY = y - currentLength * Math.cos(angleRad);
      
      // Add branch to result array with rounded coordinates
      result.push({
        x1: Math.round(x),
        y1: Math.round(y),
        x2: Math.round(endX),
        y2: Math.round(endY)
      });
      
      // Generate child branches if not at leaf level
      if (level > 1) {
        generateBranch(endX, endY, currentLength, angle - 45, level - 1);
        generateBranch(endX, endY, currentLength, angle + 45, level - 1);
      }
    };
    
    // Start with initial branch at center bottom, pointing up
    generateBranch(300, 350, initialLength, -90, initialDepth);
    
    if (onBranchesGenerated) {
      onBranchesGenerated(result);
    }
    
    return result;
  }, [initialDepth, initialLength, branchRatio, onBranchesGenerated]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400" data-testid="container">
        {branches.map((branch, index) => (
          <line
            key={index}
            x1={branch.x1}
            y1={branch.y1}
            x2={branch.x2}
            y2={branch.y2}
            stroke="black"
            strokeWidth="1"
            data-testid={`branch-${index}`}
          />
        ))}
      </svg>
    </div>
  );
}
