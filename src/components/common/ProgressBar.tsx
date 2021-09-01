import React from 'react';

type ProgressBarProps = {
  max: number;
  value: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ max, value }) => {
  const style = {
    width: `${(value / max) * 100}%`,
  };
  return (
    <div className="progress" role="progressbar" aria-label="todo 완료 진행도">
      <span className="progress-bar" style={style}></span>
    </div>
  );
};

export default ProgressBar;
