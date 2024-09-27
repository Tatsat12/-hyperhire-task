import React from 'react';
import Image from 'next/image';

type CardProps = {
  name: string;
  role: string;
  yearsExperience: string;
  imageUrl: string;
  countryFlagUrl: string;
};

const Card: React.FC<CardProps> = ({ name, role, yearsExperience, imageUrl, countryFlagUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg lg:p-4 p-3 text-center w-[170px] lg:w-[240px] mx-auto">
      <div className='relative'>
        <div className='relative inline-block'>
          <Image
            src={imageUrl}
            alt={`${name}'s photo`}
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <Image
            src={countryFlagUrl}
            alt="Country flag"
            width={20}
            height={20}
            className='absolute right-2.5 bottom-0'
          />
        </div>
      </div>
      <h2 className="text-xl text-black font-bold mt-4 truncate">{name}</h2>
      <p className="text-blue-500 text-md mb-5">{role} • <strong>{yearsExperience}</strong></p>

      <ul className="flex flex-wrap gap-2 items-center text-sm justify-center">
        <li>
          <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">마케팅 콘텐츠 제작</span>
        </li>
        <li>
          <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">인스타그램 관리</span>
        </li>
        <li>
          <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">트위터 관리</span>
        </li>
        <li>
          <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">블로그 글 작성</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
