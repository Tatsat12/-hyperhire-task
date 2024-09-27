import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CardCarousel from './CardCarousel';
import Image from 'next/image';
const arr: any = [
  {
    name: '해외 마케팅',
    image: '/images/icon-marketing.svg',
  },
  {
    name: '퍼블리셔',
    image: '/images/Frame 5031.svg',
  },
  {
    name: '캐드원(제도사)',
    image: '/images/icon-box.svg',
  },
  {
    name: '해외 세일즈',
    image: '/images/icon-target.svg',
  },
  {
    name: '해외 세일즈',
    image: '/images/icon-call.svg',
  },
  {
    name: '해외 세일즈',
    image: '/images/icon-call.svg',
  },
];

const HeroSection: React.FC = () => {
  const duplicateArray = [...arr, ...arr];

  return (
    <section className="w-full lg:p-10 p-4 pb-10 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Left Section - Titles and Info */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="relative rounded-lg px-3 py-1 bg-white text-blue-500 inline-block font-semibold mb-4 arrow-bottom-left">
                풀타임, 파트타임
              </span>

              <h1 className="text-3xl font-bold mt-4 mb-4">
                최고의 실력을 가진
                <br />
                외국인 인재를 찾고 계신가요?
              </h1>
              <p className="text-lg mb-0 lg:mb-6">
                법률 및 인사관리 부담없이
                <br />
                1주일 이내에 원격으로 채용해보세요.
              </p>
              <a href="#" className="hidden lg:block text-white underline">
                개발자가 필요하신가요?
              </a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-[3rem] mt-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-white border-t py-4">
                <h2 className="text-xl font-bold">평균 월 120만원</h2>
                <p className="text-sm ">
                  임금을 해당 국가를 기준으로 계산합니다.
                </p>
              </div>

              <div className="text-white border-t py-4">
                <h2 className="text-xl font-bold">최대 3회 인력교체</h2>
                <p className="text-sm ">
                  막상 채용해보고 맞지 않으면 교체가 가능합니다.
                </p>
              </div>

              <div className="text-white border-t py-4">
                <h2 className="text-xl font-bold">평균 3일, 최대 10일</h2>
                <p className="text-sm ">
                  급하게 사람이 필요한 경우에도 빠르게 채용 가능합니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Card Carousel */}
          <div className="lg:w-1/2 lg:mt-10 mt-5 lg:mt-0 flex justify-end">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex justify-center lg:max-w-[620px] ml-auto">
                <div className="relative rounded-lg px-3 py-1 bg-white text-blue-500 lg:mb-4 arrow-bottom-center flex items-center">
                  <div className="flex items-center content-center w-[25px] h-[25px] rounded-full p-[10px] bg-[#BBF3D2] me-3">
                    <span className="text-[#00C696] text-[14px]">$</span>
                  </div>
                  <div className="text-[#00C696] text-[14px] font-semibold">
                    월 100만원
                  </div>
                </div>
              </div>
              <CardCarousel />
            </motion.div>
          </div>
        </div>

        {/* Hero section footer cards */}
        <div className="hidden lg:flex lg:mt-10 mt-5 lg:mt-0 justify-center">
          <motion.div className="w-full">
            {/* Hero section footer cards with marquee effect */}
            <div className="relative overflow-hidden">
              <div
                className="flex items-center marquee animate-marquee"
                style={{
                  whiteSpace: 'nowrap',
                }}
              >
                {duplicateArray.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="card min-w-[330px] bg-[rgba(255,255,255,0.2)] rounded-[12px] flex items-center p-4 mb-4 mr-4"
                  >
                    {/* Left side */}
                    <div className="w-[56px] h-[56px] bg-[rgba(255,255,255,0.4)] flex items-center content-center rounded-[8px]">
                      <Image
                        src={item.image}
                        alt={`${item.name}'s photo`}
                        width={32}
                        height={32}
                        className="rounded-full mx-auto"
                      />
                    </div>
                    {/* Right side */}
                    <div>
                      <h2 className="text-center text-[20px] font-semibold ml-4">
                        {item.name}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
