import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

const Logo: React.FC = () => {
  return<div className="w-[75px] h-[35px] relative">
  <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
</div>;
};

export default Logo;
