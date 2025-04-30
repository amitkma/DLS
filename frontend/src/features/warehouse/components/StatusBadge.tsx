// components/StatusBadge.tsx

import React from 'react';

interface StatusBadgeProps {
  status: 'good' | 'low' | string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'good':
        return 'bg-green-500';
      case 'low':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const dotColor = getColor(status);

  return (
    <div className="flex items-center justify-center space-x-2 py-1 px-3 rounded-full text-gray-800 text-sm ">
      <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></span>
      <span className="capitalize text-gray-600">{status}</span>
    </div>
  );
};

export default StatusBadge;
