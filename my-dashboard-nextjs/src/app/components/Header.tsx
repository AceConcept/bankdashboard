import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-[18px] font-semibold">Dashboard</h1>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search Bar */}
          <div className="relative flex w-[249px] h-[36px] items-center border border-[#D0D5DD] rounded-lg px-3 bg-white">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
              <path d="M12.9092 12.7792L15.5141 15.2992M14.6741 8.57922C14.6741 11.8267 12.0415 14.4592 8.79406 14.4592C5.54663 14.4592 2.91406 11.8267 2.91406 8.57922C2.91406 5.33178 5.54663 2.69922 8.79406 2.69922C12.0415 2.69922 14.6741 5.33178 14.6741 8.57922Z" stroke="#1D1C20" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full outline-none text-sm"
            />
          </div>
          
          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg border border-[#D0D5DD]">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M4.38021 5.84559L10.2135 9.65074L16.4635 5.84559M5.21354 15C4.29307 15 3.54688 14.2428 3.54688 13.3088V6.69118C3.54688 5.75717 4.29307 5 5.21354 5H15.2135C16.134 5 16.8802 5.75717 16.8802 6.69118V13.3088C16.8802 14.2428 16.134 15 15.2135 15H5.21354Z" stroke="#1D1C20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg border border-[#D0D5DD]">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M7.99132 16.7424C8.58105 17.2135 9.35981 17.5 10.2135 17.5C11.0673 17.5 11.846 17.2135 12.4358 16.7424M3.9699 14.3182C3.61856 14.3182 3.42233 13.7662 3.63485 13.4595C4.12801 12.7479 4.604 11.7043 4.604 10.4475L4.62434 8.62638C4.62434 5.24288 7.12671 2.5 10.2135 2.5C13.3458 2.5 15.8851 5.28328 15.8851 8.71662L15.8647 10.4475C15.8647 11.7129 16.3243 12.7623 16.7974 13.4742C17.0017 13.7816 16.805 14.3182 16.458 14.3182H3.9699Z" stroke="#1D1C20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Team Members & Invite */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-gray-200 shadow-sm border-2 border-white" />
              ))}
            </div>
            <button className="h-9 px-4 flex items-center justify-center gap-2 bg-white text-sm border border-[#D0D5DD] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path d="M0.75 13.9999C0.749953 14.4141 1.0857 14.75 1.49992 14.75C1.91413 14.75 2.24995 14.4143 2.25 14.0001L0.75 13.9999ZM1.50025 11.7497L2.25025 11.7498L1.50025 11.7497ZM7.875 10.25C8.28921 10.25 8.625 9.91421 8.625 9.5C8.625 9.08579 8.28921 8.75 7.875 8.75V10.25ZM13.5 11C13.9142 11 14.25 10.6642 14.25 10.25C14.25 9.83578 13.9142 9.5 13.5 9.5V11ZM10.125 9.5C9.71078 9.5 9.375 9.83578 9.375 10.25C9.375 10.6642 9.71078 11 10.125 11V9.5ZM11.0625 11.9374C11.0625 12.3516 11.3983 12.6874 11.8125 12.6874C12.2267 12.6874 12.5625 12.3516 12.5625 11.9374H11.0625ZM12.5625 8.56241C12.5625 8.1482 12.2267 7.81241 11.8125 7.81241C11.3983 7.81241 11.0625 8.1482 11.0625 8.56241H12.5625ZM8.25 4.25C8.25 5.07843 7.57843 5.75 6.75 5.75V7.25C8.40685 7.25 9.75 5.90685 9.75 4.25H8.25ZM6.75 5.75C5.92157 5.75 5.25 5.07843 5.25 4.25H3.75C3.75 5.90685 5.09314 7.25 6.75 7.25V5.75ZM5.25 4.25C5.25 3.42157 5.92157 2.75 6.75 2.75V1.25C5.09314 1.25 3.75 2.59315 3.75 4.25H5.25ZM6.75 2.75C7.57843 2.75 8.25 3.42157 8.25 4.25H9.75C9.75 2.59315 8.40685 1.25 6.75 1.25V2.75ZM2.25 14.0001L2.25025 11.7498L0.750253 11.7497L0.75 13.9999L2.25 14.0001ZM3.75025 8.75C2.09353 8.75 0.750439 10.0929 0.750253 11.7497L2.25025 11.7498C2.25035 10.9215 2.92189 10.25 3.75025 10.25V8.75ZM3.75025 10.25H7.875V8.75H3.75025V10.25ZM13.5 9.5H11.8125V11H13.5V9.5ZM11.8125 9.5H10.125V11H11.8125V9.5ZM12.5625 11.9374V10.25H11.0625V11.9374H12.5625ZM12.5625 10.25V8.56241H11.0625V10.25H12.5625Z" fill="#1D1C20"/>
              </svg>
              Invite
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};