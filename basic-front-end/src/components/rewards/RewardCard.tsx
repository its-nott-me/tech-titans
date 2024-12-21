import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

interface RewardProps {
  title: string;
  description: string;
  pointsCost: number;
  category: string;
  available: boolean;
  onRedeem: () => void;
}

const RewardCard: React.FC<RewardProps> = ({
  title,
  description,
  pointsCost,
  category,
  available,
  onRedeem,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <Gift className="h-6 w-6 text-emerald-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <span className="text-sm text-gray-500">{category}</span>
          </div>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
          {pointsCost} points
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onRedeem}
        disabled={!available}
        className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md ${
          available
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <span>{available ? 'Redeem Reward' : 'Not Enough Points'}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default RewardCard;