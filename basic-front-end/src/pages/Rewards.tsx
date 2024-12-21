import React from 'react';
import { useStore } from '../store/useStore';
import RewardCard from '../components/rewards/RewardCard';

const Rewards = () => {
  const user = useStore((state) => state.user);
  const userPoints = user?.points || 0;

  const rewards = [
    {
      id: '1',
      title: '10% Off Eco-friendly Products',
      description: 'Get 10% off on selected eco-friendly products from our partners',
      pointsCost: 500,
      category: 'Shopping',
      code: 'ECO10OFF',
    },
    {
      id: '2',
      title: 'Plant a Real Tree',
      description: 'We\'ll plant a real tree in your name through our forest partners',
      pointsCost: 1000,
      category: 'Impact',
      code: 'TREE2024',
    },
    {
      id: '3',
      title: 'Public Transport Voucher',
      description: '$20 voucher for public transportation',
      pointsCost: 750,
      category: 'Transport',
      code: 'TRANSIT20',
    },
  ];

  const handleRedeem = (reward: typeof rewards[0]) => {
    // Handle reward redemption logic
    console.log(`Redeeming reward: ${reward.title}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Rewards</h1>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="text-emerald-600 font-semibold">
            {userPoints} points available
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <RewardCard
            key={reward.id}
            title={reward.title}
            description={reward.description}
            pointsCost={reward.pointsCost}
            category={reward.category}
            available={userPoints >= reward.pointsCost}
            onRedeem={() => handleRedeem(reward)}
          />
        ))}
      </div>
    </div>
  );
};

export default Rewards;