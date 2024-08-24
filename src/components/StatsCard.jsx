import React from 'react';

const StatsCard = () => {
  const stats = [
    {
      icon: '📋', // Users icon
      label: 'Users',
      value: '36K',
      progress: 70,
      color: 'bg-pink-500',
    },
    {
      icon: '🚀', // Clicks icon
      label: 'Clicks',
      value: '2m',
      progress: 90,
      color: 'bg-blue-500',
    },
    {
      icon: '💳', // Sales icon
      label: 'Sales',
      value: '435$',
      progress: 40,
      color: 'bg-orange-500',
    },
    {
      icon: '🛠️', // Items icon
      label: 'Items',
      value: '43',
      progress: 60,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="flex flex-nowrap space-x-2 sm:space-x-4 overflow-x-auto">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-start w-1/4 sm:w-auto">
          <div className="flex items-center space-x-2">
            <div className={`${stat.color} rounded-lg px-1 text-sm sm:text-base`}>{stat.icon}</div>
            <div className="text-gray-700 font-semibold text-sm sm:text-lg">{stat.label}</div>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-gray-800 mt-2">{stat.value}</div>
          <div className="w-full sm:w-24 mt-2">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-gray-800 h-1.5 rounded-full"
                style={{ width: `${stat.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
