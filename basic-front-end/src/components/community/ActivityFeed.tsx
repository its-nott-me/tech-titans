import React from 'react';
import { useStore } from '../../store/useStore';
import { formatDistanceToNow } from 'date-fns';

const ActivityFeed = () => {
  const activities = useStore((state) => state.activities);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Community Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 border-b pb-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0" />
            <div className="flex-1">
              <p className="text-gray-900">
                <span className="font-medium">User</span> completed a {activity.type}
              </p>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(activity.completedAt), { addSuffix: true })}
              </p>
            </div>
            <span className="text-emerald-600 font-semibold">+{activity.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;