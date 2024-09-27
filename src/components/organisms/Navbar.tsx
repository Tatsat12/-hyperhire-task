import React from 'react';
import Logo from '../atoms/Logo';

const Header: React.FC = () => {
  return (
    <header className="p-4 text-white">
      {/* Left side - Logo */}
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className="flex items-center">
            <Logo />
            <span className="text-lg font-bold">hyperhire</span>
          </div>

          {/* Center - Navigation */}
          <nav className='hidden sm:block'>
            <ul className="flex space-x-8 text-lg">
              <li className="cursor-pointer">채용</li>
              <li className="cursor-pointer">해외 개발자 활용 서비스</li>
            </ul>
          </nav>

          {/* Right side - Button */}
          <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100 transition">
            문의하기
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
