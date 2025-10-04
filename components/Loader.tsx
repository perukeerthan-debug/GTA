
import React from 'react';

const Loader: React.FC = () => (
  <div className="flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-white delay-200"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-white delay-400"></div>
  </div>
);

export default Loader;
