import React from 'react';
import { TreePine, Flower, Sprout } from 'lucide-react';
import type { GardenItem } from '../../types';

interface PlantItemProps {
  item: GardenItem;
}

const PlantItem: React.FC<PlantItemProps> = ({ item }) => {
  const IconComponent = {
    tree: TreePine,
    flower: Flower,
    plant: Sprout
  }[item.type];

  return (
    <div 
      className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm"
      style={{ transform: `translate(${item.position.x}px, ${item.position.y}px)` }}
    >
      <IconComponent className="h-8 w-8 text-emerald-600" />
      <span className="text-sm font-medium text-gray-600">{item.name}</span>
      <span className="text-xs text-gray-400">Level {item.level}</span>
    </div>
  );
};

export default PlantItem;