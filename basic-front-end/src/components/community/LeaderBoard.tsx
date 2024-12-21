import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderBoard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Trophy className="h-5 w-5 text-yellow-500" />
        <h2 className="text-lg font-semibold text-gray-900">Leaderboard</h2>
      </div>
      <div className="space-y-4">
        {/* Placeholder for leaderboard data */}
        {[1, 2, 3, 4, 5].map((position) => (
          <div key={position} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="font-bold text-gray-500">#{position}</span>
              <div className="w-8 h-8 bg-emerald-100 rounded-full" />
              <span className="font-medium text-gray-900">User {position}</span>
            </div>
            <span className="font-semibold text-emerald-600">
              {1000 - position * 100} pts
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;