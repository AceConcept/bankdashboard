import React from 'react';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export const MobileHeader = ({ onMenuClick }: MobileHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 flex items-center justify-between px-5 py-5 lg:hidden z-30">
      <h1 className="font-prosto-one text-2xl">Lunastra</h1>
      
      <div className="flex items-center gap-2">
        {/* Search Icon */}
        <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg border border-[#D0D5DD]">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M12.9092 12.7792L15.5141 15.2992M14.6741 8.57922C14.6741 11.8267 12.0415 14.4592 8.79406 14.4592C5.54663 14.4592 2.91406 11.8267 2.91406 8.57922C2.91406 5.33178 5.54663 2.69922 8.79406 2.69922C12.0415 2.69922 14.6741 5.33178 14.6741 8.57922Z" stroke="#1D1C20" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        {/* Action Icons */}
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
        {/* Menu Button */}
        <button 
          onClick={onMenuClick}
          className="flex items-center justify-center w-9 h-9 hover:bg-gray-100 rounded-lg border border-[#D0D5DD]"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 4.5H15.75M2.25 9H15.75M2.25 13.5H15.75" stroke="#1D1C20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}; 