
import React from 'react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const seed = vehicle.name.replace(/\s+/g, ''); // create a consistent seed for picsum
  return (
    <div className="bg-gray-800/60 rounded-lg border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
      <img src={`https://picsum.photos/seed/${seed}/400/200`} alt={vehicle.name} className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity" />
      <div className="p-5">
        <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{vehicle.type}</span>
        <h4 className="text-xl font-bold text-gray-100 mb-2">{vehicle.name}</h4>
        <p className="text-gray-400 text-sm">{vehicle.description}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
