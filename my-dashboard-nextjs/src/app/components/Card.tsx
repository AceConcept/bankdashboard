import React from 'react';

interface CardProps {
  title: string;
  amount: string;
  percentage: number;
  timePeriod: string;
}

export const Card: React.FC<CardProps> = ({ title, amount, percentage, timePeriod }) => {
  const isPositive = percentage > 0;

  return (
    <div className="p-4 bg-[#F2F4F7] rounded-xl border border-[#E5E7EB]">
      <h3 className="text-sm text-[#344054] mb-6">{title}</h3>
      <div className="flex justify-between items-baseline">
        <span className="text-2xl font-semibold">{amount}</span>
        <div className="flex items-center gap-1">
          <span className={`text-sm ${isPositive ? 'text-[#12B76A]' : 'text-[#F04438]'}`}>
            {isPositive ? '+' : ''}{percentage}%
          </span>
          <span className="text-sm text-[#667085]">{timePeriod}</span>
        </div>
      </div>
    </div>
  );
};
