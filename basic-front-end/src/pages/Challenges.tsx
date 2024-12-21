import React from 'react';
import { useStore } from '../store/useStore';
import ChallengeList from '../components/challenges/ChallengeList';
import ChallengeFilters from '../components/challenges/ChallengeFilters';

const Challenges = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Challenges</h1>
      <ChallengeFilters />
      <ChallengeList />
    </div>
  );
};

export default Challenges;