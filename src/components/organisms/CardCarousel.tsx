import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../molecules/Card";

const employeeData = [
  {
    name: "Abhishek Gupta",
    role: "마케팅",
    yearsExperience: "2+",
    imageUrl: "/images/user1.png",
    countryFlagUrl: "/images/flag.png",
  },
  {
    name: "Jane Doe",
    role: "디자인",
    yearsExperience: "3+",
    imageUrl: "/images/user2.png",
    countryFlagUrl: "/images/flag.png",
  },
  {
    name: "John Smith",
    role: "개발자",
    yearsExperience: "5+",
    imageUrl: "/images/user2.png",
    countryFlagUrl: "/images/flag.png",
  },
];

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % employeeData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? employeeData.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative ml-auto flex justify-center items-center px-4 lg:pt-5 h-full lg:h-auto lg:max-w-[620px] lg:min-h-[300px]">
      {/* Previous Button */}
      <button
        className="lg:absolute left-4 z-10 hidden lg:block text-white p-2 transition text-5xl my-auto"
        onClick={handlePrev}
      >
        &#8249;
      </button>

      {/* Main Carousel */}
      <div className="flex justify-center lg:absolute top-0 ">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute z-[999]"
          >
            {/* Active card */}
            <Card {...employeeData[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Left Card (partially visible, scaled down) */}
        <motion.div
          className="lg:absolute -left-[260px] opacity-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            {...employeeData[
            (currentIndex - 1 + employeeData.length) % employeeData.length
            ]}
          />
        </motion.div>

        {/* Right Card (partially visible, scaled down) */}
        <motion.div
          className="lg:absolute -right-[260px] opacity-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            {...employeeData[(currentIndex + 1) % employeeData.length]}
          />
        </motion.div>
      </div>

      {/* Next Button */}
      <button
        className="lg:absolute right-4 z-10 hidden lg:block text-white p-2 transition text-5xl my-auto"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </div>
  );
};

export default CardCarousel;
