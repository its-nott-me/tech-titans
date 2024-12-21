import React from 'react';
import { useStore } from '../../store/useStore';
import { Award } from 'lucide-react';

const BadgesList = () => {
  const badges = useStore((state) => state.user?.badges || []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Badges</h2>
      <div className="grid grid-cols-3 gap-4">
        {badges.map((badge) => (
          <div key={badge.id} className="flex flex-col items-center">
            <Award className="h-8 w-8 text-emerald-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">{badge.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgesList;