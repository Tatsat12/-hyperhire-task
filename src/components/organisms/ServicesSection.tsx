import React from "react";
import { motion } from "framer-motion";

const services = [
  { id: 1, title: "서비스 1", description: "서비스 1에 대한 설명입니다." },
  { id: 2, title: "서비스 2", description: "서비스 2에 대한 설명입니다." },
  { id: 3, title: "서비스 3", description: "서비스 3에 대한 설명입니다." },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="p-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        우리가 제공하는 서비스
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
