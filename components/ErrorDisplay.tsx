
import React from 'react';
import { WarningIcon } from './Icons';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg relative max-w-2xl mx-auto" role="alert">
      <div className="flex items-center">
        <WarningIcon className="w-6 h-6 mr-3 text-red-400" />
        <div>
          <strong className="font-bold">An error occurred:</strong>
          <span className="block sm:inline ml-2">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
