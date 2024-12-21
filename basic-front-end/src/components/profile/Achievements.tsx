import React from 'react';
import { Award, Trophy, Target } from 'lucide-react';
import { useStore } from '../../store/useStore';

const Achievements = () => {
  const user = useStore((state) => state.user);
  const achievements = user?.achievements || [];

  const achievementTiers = {
    bronze: 'bg-amber-100 text-amber-700',
    silver: 'bg-gray-100 text-gray-700',
    gold: 'bg-yellow-100 text-yellow-700',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-xl font-semibold text-gray-900">Achievements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-4 rounded-lg ${
              achievement.unlocked
                ? achievementTiers[achievement.tier as keyof typeof achievementTiers]
                : 'bg-gray-50 text-gray-400'
            }`}
          >
            <div className="flex items-start space-x-3">
              <Award className="h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">{achievement.name}</h3>
                <p className="text-sm">{achievement.description}</p>
                {achievement.progress && (
                  <div className="mt-2">
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-full bg-emerald-600 rounded"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                    <p className="text-xs mt-1">
                      Progress: {achievement.progress}%
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;