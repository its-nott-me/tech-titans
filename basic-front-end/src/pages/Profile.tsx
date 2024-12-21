import React from 'react';
import { useStore } from '../store/useStore';
import BadgesList from '../components/profile/BadgesList';
import Stats from '../components/profile/Stats';
import ActivityHistory from '../components/profile/ActivityHistory';

const Profile = () => {
  const user = useStore((state) => state.user);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user?.username || 'User'}</h1>
            <p className="text-gray-500">Level {user?.level || 1}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityHistory />
        </div>
        <div className="space-y-6">
          <Stats />
          <BadgesList />
        </div>
      </div>
    </div>
  );
};

export default Profile;