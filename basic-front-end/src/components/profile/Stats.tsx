import React from 'react';
import { useStore } from '../../store/useStore';
import { Trophy, Leaf, Timer } from 'lucide-react';

const Stats = () => {
  const user = useStore((state) => state.user);
  const activities = useStore((state) => state.activities);

  const totalCarbonSaved = activities.reduce((acc, activity) => acc + activity.carbonSaved, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Stats</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-600">Total Points</span>
          </div>
          <span className="font-semibold text-emerald-600">{user?.points || 0}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-5 w-5 text-emerald-500" />
            <span className="text-gray-600">Carbon Saved</span>
          </div>
          <span className="font-semibold text-emerald-600">{totalCarbonSaved}kg</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Timer className="h-5 w-5 text-blue-500" />
            <span className="text-gray-600">Current Streak</span>
          </div>
          <span className="font-semibold text-emerald-600">{user?.streakDays || 0} days</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;