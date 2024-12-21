import React from 'react';
import { useStore } from '../../store/useStore';
import ChallengeCard from './ChallengeCard';

const ChallengeList = () => {
  const challenges = useStore((state) => state.challenges);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengeList;