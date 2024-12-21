import React from 'react';
import { useStore } from '../store/useStore';
import GardenGrid from '../components/garden/GardenGrid';
import PlantSelector from '../components/garden/PlantSelector';

const Garden = () => {
  const user = useStore((state) => state.user);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Garden</h1>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="text-emerald-600 font-semibold">{user?.points || 0} points available</span>
        </div>
      </div>
      
      <PlantSelector />
      <GardenGrid />
    </div>
  );
};

export default Garden;