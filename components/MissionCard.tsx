
import React from 'react';
import { Mission } from '../types';

interface MissionCardProps {
  mission: Mission;
}

const MissionCard: React.FC<MissionCardProps> = ({ mission }) => {
  return (
    <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300 h-full flex flex-col">
        <div className="flex-grow">
            <span className="inline-block bg-pink-500/20 text-pink-400 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{mission.type}</span>
            <h4 className="text-xl font-bold text-gray-100 mb-2">{mission.title}</h4>
            <p className="text-gray-400 text-sm">{mission.description}</p>
        </div>
    </div>
  );
};

export default MissionCard;
