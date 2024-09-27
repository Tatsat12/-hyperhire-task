import React from "react";
import Image from "next/image";
import ArrowIcon from "../../../public/images/icon-right-square.svg";

const footerItems = [
  {
    name: "해외 개발자",
    content: "해외 개발자 원격 채용",
    image: "images/icon-code.svg",
  },
  {
    name: "해외 개발자",
    content: "외국인 원격 채용 (비개발)",
    image: "images/icon-avatar.svg",
  },
  {
    name: "해외 개발자",
    content: "한국어 가능 외국인 채용",
    image: "images/icon-kor.svg",
  },
  {
    name: "해외 개발자",
    content: "해외 개발자 활용 서비스",
    image: "images/icon-gear.svg",
  },
];

const FooterSection: React.FC = () => {

  return (
    <footer className="bg-gray-100 py-[30px] md:py-[70px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Logo and Contact Information */}
          <div className="w-full md:w-1/3">
            <div className="flex items-center space-x-4 mb-3">
              <Image
                src="/images/logo-secondary.png"
                alt="Hyperhire Logo"
                width={60}
                height={60}
              />
              <h2 className="text-xl font-bold">Hyperhire</h2>
            </div>
            <p className="font-extrabold text-[#343741] text-sm mb-3">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>

            <p className="text-sm font-extrabold text-[#5E626F] mb-2">
              010-0000-0000
            </p>
            <p className="text-sm font-extrabold text-[#5E626F]">
              aaaaa@naver.com
            </p>
          </div>

          {/* Address and Business Information */}
          <div className="card-wrapper w-full grid grid-cols-2 gap-4 text-sm lg:grid-cols-4">
            {footerItems.map((item: any, index: number) => (
              <div key={index} className="flex flex-col w-full h-full rounded-[8px] p-4 bg-[#ffffff]">
                {/* Left side */}
                <div className="w-[40px] h-[40px] bg-[#EFF1F6] flex items-center content-center rounded-[8px] p-[7px]">
                  <Image
                    src={item.image}
                    alt={`${item.name}'s photo`}
                    width={24}
                    height={24}
                    className="rounded-full mx-auto"
                  />
                </div>
                <div className="pt-2 mt-auto">
                  <p className="text-[14px] font-semibold text-[#5E626F] truncate">{item.content}</p>
                  <div className="flex items-center gap-3 pt-2">
                    <h4 className="text-[14px] font-semibold text-[#343741]">{item.name}</h4>
                    <button>
                      <Image src={ArrowIcon} alt="Arrow icon" width={20} height={20} className="rounded-full mx-auto" />
                    </button>
                  </div>
                </div>
                {/* Right side */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 font-medium lg:mt-10 mt-8">
          <div className="flex gap-3 w-full md:w-1/3">
            <div>
              <p className="m-0 mb-1">
                상호명
              </p>
              <p className="m-0 mb-1">
                하이퍼하이어
              </p>
              <p className="font-bold">
                Hyperhire India Private Limited
              </p>
            </div>
            <div>
              <p className="m-0 mb-1">
                대표 CEO
              </p>
              <p className="m-0 mb-1">
                김주현
              </p>
              <p className="font-bold">
                Juhyun Kim
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div>
              <p className="m-0 mb-1">
                사업자등록번호 CIN
              </p>
              <p className="m-0 mb-1">
                427-86-01187
              </p>
              <p className="font-bold">
                U74110DL2016PTC290812
              </p>
            </div>
            <div>
              <p className="m-0 mb-1">
                주소 ADDRESS
              </p>
              <p className="m-0 mb-1">
                서울특별시 강남대로 479, 지하 1층 238호
              </p>
              <p className="font-bold">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
                110053 India
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-10 mt-5 text-sm text-gray-500">
          &copy; 2023 Hyperhire
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
