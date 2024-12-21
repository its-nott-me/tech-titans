import React from 'react';
import LeaderBoard from '../components/community/LeaderBoard';
import ActivityFeed from '../components/community/ActivityFeed';

const Community = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Community</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <div>
          <LeaderBoard />
        </div>
      </div>
    </div>
  );
};

export default Community;