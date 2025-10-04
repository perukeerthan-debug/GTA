
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm py-6 border-b border-cyan-500/20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-gray-200">AI Game Concept</span>{' '}
          <span className="text-cyan-400">Generator</span>
        </h1>
        <p className="text-md text-gray-500 mt-2">Powered by Google Gemini</p>
      </div>
    </header>
  );
};

export default Header;
