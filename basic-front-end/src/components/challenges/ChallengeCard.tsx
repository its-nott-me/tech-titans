import React from 'react';
import { Timer, Leaf } from 'lucide-react';
import type { Challenge } from '../../types';

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
          {challenge.category}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{challenge.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Timer className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-500">{challenge.type}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Leaf className="h-4 w-4 text-emerald-500" />
          <span className="font-semibold text-emerald-600">+{challenge.points}</span>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;