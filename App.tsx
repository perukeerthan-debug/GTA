
import React, { useState, useCallback } from 'react';
import { GameConcept } from './types';
import { generateGameConcept } from './services/geminiService';
import Header from './components/Header';
import Loader from './components/Loader';
import ErrorDisplay from './components/ErrorDisplay';
import GameConceptDisplay from './components/GameConceptDisplay';
import { SparklesIcon } from './components/Icons';

const App: React.FC = () => {
  const [gameConcept, setGameConcept] = useState<GameConcept | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateConcept = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGameConcept(null);

    try {
      const concept = await generateGameConcept();
      setGameConcept(concept);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Welcome to the bleeding edge of game design. Based on the classic open-world crime genre, our advanced AI will generate a unique game concept, complete with a compelling story, key features, missions, and iconic vehicles. Click below to forge the next legend in digital underworlds.
          </p>
          <button
            onClick={handleGenerateConcept}
            disabled={isLoading}
            className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white font-bold text-lg rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:scale-100"
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <SparklesIcon className="w-6 h-6 mr-3" />
                Generate New Game Concept
              </>
            )}
          </button>
        </div>

        <div className="mt-12">
          {error && <ErrorDisplay message={error} />}
          {gameConcept && <GameConceptDisplay concept={gameConcept} />}
        </div>
      </main>
    </div>
  );
};

export default App;
