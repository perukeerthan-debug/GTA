
import React from 'react';
import { GameConcept } from '../types';
import MissionCard from './MissionCard';
import VehicleCard from './VehicleCard';
import { FeatureIcon, MissionIcon, VehicleIcon } from './Icons';

interface GameConceptDisplayProps {
  concept: GameConcept;
}

const GameConceptDisplay: React.FC<GameConceptDisplayProps> = ({ concept }) => {
  return (
    <div className="space-y-12 animate-fade-in">
      <section className="text-center bg-black/20 p-8 rounded-xl border border-gray-700 shadow-2xl shadow-cyan-500/10">
        <h2 className="text-5xl font-extrabold text-cyan-400 tracking-wide">{concept.title}</h2>
        <p className="mt-4 text-xl text-gray-400 italic">{concept.logline}</p>
        <p className="mt-6 max-w-4xl mx-auto text-left text-gray-300 whitespace-pre-line leading-relaxed">{concept.synopsis}</p>
      </section>

      <section>
        <h3 className="flex items-center text-3xl font-bold mb-6 text-pink-500">
            <FeatureIcon className="w-8 h-8 mr-3" />
            Key Features
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {concept.keyFeatures.map((feature, index) => (
            <li key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-start">
              <span className="text-cyan-400 font-bold mr-3">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="flex items-center text-3xl font-bold mb-6 text-pink-500">
            <MissionIcon className="w-8 h-8 mr-3" />
            Sample Missions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concept.missions.map((mission, index) => (
            <MissionCard key={index} mission={mission} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="flex items-center text-3xl font-bold mb-6 text-pink-500">
            <VehicleIcon className="w-8 h-8 mr-3" />
            Iconic Vehicles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concept.vehicles.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameConceptDisplay;
