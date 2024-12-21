import React from 'react';
import { TreePine, Flower, Sprout } from 'lucide-react';

const plantTypes = [
  { type: 'tree', name: 'Tree', icon: TreePine, cost: 100 },
  { type: 'flower', name: 'Flower', icon: Flower, cost: 50 },
  { type: 'plant', name: 'Plant', icon: Sprout, cost: 75 },
];

const PlantSelector = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Plant Something New</h2>
      <div className="grid grid-cols-3 gap-4">
        {plantTypes.map(({ type, name, icon: Icon, cost }) => (
          <button
            key={type}
            className="flex flex-col items-center p-4 border-2 border-emerald-100 rounded-lg hover:border-emerald-500 transition-colors"
          >
            <Icon className="h-8 w-8 text-emerald-600 mb-2" />
            <span className="font-medium text-gray-900">{name}</span>
            <span className="text-sm text-emerald-600">{cost} points</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlantSelector;