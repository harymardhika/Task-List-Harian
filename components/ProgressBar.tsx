
import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Progress</span>
        <span className="text-sm font-medium text-blue-700 dark:text-blue-400">{`${completed} / ${total} Selesai`}</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
