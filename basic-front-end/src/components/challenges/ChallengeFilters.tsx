import React from 'react';

const categories = ['all', 'transport', 'energy', 'waste', 'food'];
const types = ['daily', 'weekly', 'special'];

const ChallengeFilters = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">Type</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
            {types.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ChallengeFilters;