import React from 'react';
import { useStore } from '../../store/useStore';
import { format } from 'date-fns';

const ActivityHistory = () => {
  const activities = useStore((state) => state.activities);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity History</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="font-medium text-gray-900">
                {activity.type === 'challenge' ? 'Completed Challenge' : 'Achievement Unlocked'}
              </p>
              <p className="text-sm text-gray-500">
                {format(new Date(activity.completedAt), 'PPP')}
              </p>
            </div>
            <div className="text-right">
              <span className="text-emerald-600 font-semibold">+{activity.points} points</span>
              <p className="text-sm text-gray-500">{activity.carbonSaved}kg CO₂ saved</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityHistory;