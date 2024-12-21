import React from 'react';
import { useStore } from '../../store/useStore';
import PlantItem from './PlantItem';

const GardenGrid = () => {
  const garden = useStore((state) => state.user?.garden || []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-6 gap-4 min-h-[400px] bg-emerald-50 p-4 rounded-lg">
        {garden.map((item) => (
          <PlantItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GardenGrid;