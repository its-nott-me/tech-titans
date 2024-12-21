import React from 'react';
import { useStore } from '../store/useStore';
import { Trophy, Leaf, Flame } from 'lucide-react';

const Dashboard = () => {
  const user = useStore((state) => state.user);
  const activities = useStore((state) => state.activities);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Points</h3>
              <p className="text-2xl font-bold text-emerald-600">{user?.points || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Flame className="h-8 w-8 text-orange-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Streak</h3>
              <p className="text-2xl font-bold text-emerald-600">{user?.streakDays || 0} days</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-emerald-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Carbon Saved</h3>
              <p className="text-2xl font-bold text-emerald-600">
                {activities.reduce((acc, activity) => acc + activity.carbonSaved, 0)}kg
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.slice(0, 5).map((activity) => (
            <div key={activity.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium text-gray-900">{activity.type === 'challenge' ? 'Completed Challenge' : 'Achievement Unlocked'}</p>
                <p className="text-sm text-gray-500">{new Date(activity.completedAt).toLocaleDateString()}</p>
              </div>
              <span className="text-emerald-600 font-semibold">+{activity.points} points</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;