import React from "react";
import { motion } from "framer-motion";

// Sample data for services
const services = [
  {
    title: "Service One",
    description:
      "Description for Service One. Detailed information about this service.",
    image: "https://via.placeholder.com/400x300?text=Service+One",
  },
  {
    title: "Service Two",
    description:
      "Description for Service Two. Detailed information about this service.",
    image: "https://via.placeholder.com/400x300?text=Service+Two",
  },
  {
    title: "Service Three",
    description:
      "Description for Service Three. Detailed information about this service.",
    image: "https://via.placeholder.com/400x300?text=Service+Three",
  },
  {
    title: "Service Four",
    description:
      "Description for Service Four. Detailed information about this service.",
    image: "https://via.placeholder.com/400x300?text=Service+Four",
  },
];

function ServiceCard({ title, description, image }) {
  return (
    <motion.div
      className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer group transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        src={image}
        alt={title}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <section className="bg-white dark:bg-gray-900 my-15">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
