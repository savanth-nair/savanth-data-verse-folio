
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  percentage: number;
  label: string;
  className?: string;
}

const ProgressBar = ({ percentage, label, className }: ProgressBarProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
