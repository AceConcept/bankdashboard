import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

// Helper function to generate random dates
const generateRandomDate = (start: Date, end: Date) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit' });
};

// Updated helper function for categories with correct styling
const getRandomCategory = () => {
  const categories = [
    { 
      name: 'Subscription', 
      color: 'border border-[#B2DDFF] bg-[#EFF8FF] text-blue-800',
      dotColor: '#1570EF'
    },
    { 
      name: 'Food & Drinks', 
      color: 'border border-[#ABEFC6] bg-[#ECFDF3] text-green-800',
      dotColor: '#12B76A'
    },
    { 
      name: 'Income', 
      color: 'border border-[#FCCEEE] bg-[#FDF2FA] text-pink-800',
      dotColor: '#EE46BC'
    }
  ];
  return categories[Math.floor(Math.random() * categories.length)];
};

// Updated dummy data
const dummyData = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  transaction: ['Payment', 'Refund', 'Purchase', 'Salary', 'Subscription', 'Dining', 'Transfer'][i % 7],
  amount: Math.random() > 0.5 ? `+$${(Math.random() * 1000).toFixed(2)}` : `-$${(Math.random() * 500).toFixed(2)}`,
  date: generateRandomDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()),
  category: getRandomCategory()
})).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path 
      d="M2.3954 15.0953C2.43368 14.7507 2.45283 14.5784 2.50496 14.4174C2.55121 14.2745 2.61656 14.1386 2.69923 14.0132C2.79241 13.8719 2.91499 13.7493 3.16014 13.5042L14.1654 2.49895C15.0859 1.57847 16.5782 1.57848 17.4987 2.49895C18.4192 3.41942 18.4192 4.91181 17.4987 5.83228L6.49347 16.8375C6.24832 17.0827 6.12574 17.2052 5.98444 17.2984C5.85907 17.3811 5.72311 17.4464 5.58024 17.4927C5.4192 17.5448 5.24691 17.564 4.90234 17.6023L2.08203 17.9156L2.3954 15.0953Z" 
      stroke="#475467" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path 
      d="M6.66797 14.1667L10.0013 17.5M10.0013 17.5L13.3346 14.1667M10.0013 17.5V10M16.668 13.9524C17.6859 13.1117 18.3346 11.8399 18.3346 10.4167C18.3346 7.88536 16.2826 5.83333 13.7513 5.83333C13.5692 5.83333 13.3989 5.73833 13.3064 5.58145C12.2197 3.73736 10.2133 2.5 7.91797 2.5C4.46619 2.5 1.66797 5.29822 1.66797 8.75C1.66797 10.4718 2.36417 12.0309 3.49043 13.1613" 
      stroke="#344054" 
      strokeWidth="1.66667" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function Table() {
  return (
    <div className="overflow-hidden bg-white rounded-lg border border-[#E4E7EC]">
      <div className="p-4 sm:p-6 border-b border-[#E4E7EC]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#344054]">Recent Activity</h2>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg border border-[#D0D5DD] bg-white text-sm font-semibold text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <DownloadIcon />
              Download
            </button>
            <button className="inline-flex items-center justify-center px-[14px] py-[10px] rounded-lg border border-[#D0D5DD] bg-white text-sm font-semibold text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              View Report
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="min-w-[600px] sm:min-w-0">
          <table className="w-full">
            <thead className="bg-white sticky top-0 z-10">
              <tr>
                <th className="py-3 px-6 border-b text-left text-xs font-medium font-inter text-[#475467] w-[40%]">
                  Transaction
                </th>
                <th className="py-3 px-6 border-b text-left text-xs font-medium font-inter text-[#475467] w-[15%]">
                  Amount
                </th>
                <th className="py-3 px-6 border-b text-left text-xs font-medium font-inter text-[#475467] w-[20%]">
                  Date
                </th>
                <th className="py-3 px-6 border-b text-left text-xs font-medium font-inter text-[#475467] w-[20%]">
                  Category
                </th>
                <th className="py-3 px-6 border-b text-xs font-medium font-inter text-[#475467] w-[5%]">
                  {/* Actions */}
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item) => (
                <tr key={item.id} className="group hover:bg-gray-50">
                  <td className="py-4 px-6 border-b">
                    <div className="flex items-center gap-3 min-w-[200px]">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/[0.08] flex-shrink-0">
                        <FaDollarSign className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="text-[14px] font-medium font-inter text-[#101828] leading-5 truncate">
                        {item.transaction}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-b text-[14px] font-normal font-inter text-[#475467] leading-5 whitespace-nowrap">
                    {item.amount}
                  </td>
                  <td className="py-4 px-6 border-b text-[14px] font-normal font-inter text-[#475467] leading-5 whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="py-4 px-6 border-b">
                    <div className="min-w-[120px]">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 pl-1.5 rounded-2xl text-xs font-medium ${item.category.color}`}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="8" 
                          height="8" 
                          viewBox="0 0 8 8" 
                          fill="none"
                          className="w-2 h-2 flex-shrink-0"
                        >
                          <circle cx="4" cy="4" r="3" fill={item.category.dotColor} />
                        </svg>
                        {item.category.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-b text-center">
                    <button className="hover:opacity-80">
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
