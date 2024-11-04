'use client';

import React, { useState, useEffect } from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Graph } from './Graph';
import { CardGrid } from './CardGrid';
import { CustomButton } from './CustomButton';
import { Calendar } from './Calendar';
import { format } from 'date-fns';
import Table from './Table';

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path 
      d="M17.5 8.33464H2.5M13.3333 1.66797V5.0013M6.66667 1.66797V5.0013M6.5 18.3346H13.5C14.9001 18.3346 15.6002 18.3346 16.135 18.0622C16.6054 17.8225 16.9878 17.44 17.2275 16.9696C17.5 16.4348 17.5 15.7348 17.5 14.3346V7.33464C17.5 5.9345 17.5 5.23444 17.2275 4.69966C16.9878 4.22925 16.6054 3.8468 16.135 3.60712C15.6002 3.33464 14.9001 3.33464 13.5 3.33464H6.5C5.09987 3.33464 4.3998 3.33464 3.86502 3.60712C3.39462 3.8468 3.01217 4.22925 2.77248 4.69966C2.5 5.23444 2.5 5.9345 2.5 7.33464V14.3346C2.5 15.7348 2.5 16.4348 2.77248 16.9696C3.01217 17.44 3.39462 17.8225 3.86502 18.0622C4.3998 18.3346 5.09987 18.3346 6.5 18.3346Z" 
      stroke="#344054" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path 
      d="M5 10H15M2.5 5H17.5M7.5 15H12.5" 
      stroke="#344054" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

type TimePeriod = '12 months' | '30 days' | '7 days' | '24 hours';
type GraphType = 'bar' | 'line';

const timePeriodsMap: Record<TimePeriod, string> = {
  '12 months': 'last year',
  '30 days': 'last 30 days',
  '7 days': 'last week',
  '24 hours': 'yesterday'
};

const generateGraphData = (period: TimePeriod) => {
  switch (period) {
    case '12 months':
      return [
        { name: 'Jan', value: 4000 }, { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 2000 }, { name: 'Apr', value: 2780 },
        { name: 'May', value: 1890 }, { name: 'Jun', value: 2390 },
        { name: 'Jul', value: 3490 }, { name: 'Aug', value: 3490 },
        { name: 'Sep', value: 2490 }, { name: 'Oct', value: 1490 },
        { name: 'Nov', value: 2490 }, { name: 'Dec', value: 3490 }
      ];
    case '30 days':
      return Array.from({ length: 30 }, (_, i) => ({
        name: `${i + 1}`,
        value: 1000 + i * 50 + Math.floor(Math.random() * 200 - 100)
      }));
    case '7 days':
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => ({ 
        name: day, 
        value: Math.floor(Math.random() * 100) + 50
      }));
    case '24 hours':
      return Array.from({ length: 24 }, (_, i) => ({ 
        name: `${i}`, 
        value: Math.floor(Math.random() * 50) + 20
      }));
  }
};

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('30 days');
  const [graphType, setGraphType] = useState<GraphType>('bar');
  const [graphData, setGraphData] = useState(generateGraphData('30 days'));

  const [cardData] = useState<Record<TimePeriod, Array<{ title: string; amount: string; percentage: number }>>>({
    '12 months': [
      { title: "Revenue", amount: "$678,345.67", percentage: 12.5 },
      { title: "Subscriptions", amount: "28,345", percentage: 8.2 },
      { title: "Conversions", amount: "15,678", percentage: -3.4 },
      { title: "Visitors", amount: "1,234,567", percentage: 5.7 }
    ],
    '30 days': [
      { title: "Revenue", amount: "$45,231.89", percentage: 20.1 },
      { title: "Subscriptions", amount: "2,450", percentage: -5.4 },
      { title: "Conversions", amount: "1,234", percentage: 8.2 },
      { title: "Visitors", amount: "10,234", percentage: -2.3 }
    ],
    '7 days': [
      { title: "Revenue", amount: "$12,345.67", percentage: -1.5 },
      { title: "Subscriptions", amount: "567", percentage: 3.8 },
      { title: "Conversions", amount: "234", percentage: -2.1 },
      { title: "Visitors", amount: "2,345", percentage: 7.6 }
    ],
    '24 hours': [
      { title: "Revenue", amount: "$1,234.56", percentage: 15.3 },
      { title: "Subscriptions", amount: "45", percentage: -8.9 },
      { title: "Conversions", amount: "12", percentage: 6.7 },
      { title: "Visitors", amount: "345", percentage: 4.2 }
    ]
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null; preset?: string } | null>(null);

  useEffect(() => {
    setGraphData(generateGraphData(selectedPeriod));
  }, [selectedPeriod]);

  const handlePeriodChange = (period: TimePeriod) => {
    setSelectedPeriod(period);
  };

  const handleGraphTypeChange = (newType: GraphType) => {
    setGraphType(newType);
  };

  const handleDateRangeApply = (range: { start: Date | null; end: Date | null; preset?: string }) => {
    setDateRange(range);
    setIsCalendarOpen(false);
  };

  return (
    <div className="flex-1 p-4 xl:p-8 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#344054]">Dashboard</h1>
        </div>
        <div className="mb-8">
          <ButtonGroup selectedPeriod={selectedPeriod} onPeriodChange={handlePeriodChange} />
        </div>
        <div className="mb-8">
          <CardGrid
            selectedPeriod={selectedPeriod}
            cardData={cardData}
            timePeriodsMap={timePeriodsMap}
          />
        </div>
        <div className="mb-8">
          <Table />
        </div>
      </div>
    </div>
  );
}
