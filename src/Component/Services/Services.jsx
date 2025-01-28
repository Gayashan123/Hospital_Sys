import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import ConsultationImage from '../../assets/Consultation.jpg';
import SurgeryImage from '../../assets/Surgery.jpg';
import PharmacyImage from '../../assets/Pharmacy.jpg';
import EmergencyImage from '../../assets/Emergency.jpg';

function Services() {
  return (
    <div className="container mx-auto text-center" id="services">
      {/* Header Section */}
      <div className="w-full px-8 py-10 mt-5 transition-all duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 hover:scale-105">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="mt-2 text-lg text-gray-200">
          Providing exceptional care for your health and well-being
        </p>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center gap-12 py-12 mt-10 rounded-lg bg-blue-50">
        {[
          {
            title: "Consultation",
            image: ConsultationImage,
            description:
              "Our experienced doctors provide comprehensive consultations across various specialties, ensuring personalized care for each patient.",
          },
          {
            title: "Surgery",
            image: SurgeryImage,
            description:
              "We offer advanced surgical services with state-of-the-art technology, performed by skilled surgeons for a variety of medical conditions.",
          },
          {
            title: "Pharmacy",
            image: PharmacyImage,
            description:
              "Our in-house pharmacy offers a wide range of medications and health products, ensuring quick access to prescribed treatments.",
          },
          
        ].map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-full p-6 transition-transform duration-500 ease-in-out transform bg-white rounded-lg shadow-xl sm:w-1/2 md:w-1/4 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            initial={{ opacity: 0, y: 50 }}    // Initial state (before animation)
            animate={{ opacity: 1, y: 0 }}     // Final state (after animation)
            transition={{ delay: index * 0.2, duration: 0.6 }} // Delay based on index for stagger effect
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-t from-blue-600 to-transparent group-hover:opacity-40"></div>

            <motion.h2
              className="mb-4 text-2xl font-semibold text-blue-700 transition-all duration-300 group-hover:text-white"
              whileHover={{ scale: 1.1, color: '#fff' }} // Scale and color change on hover
            >
              {service.title}
            </motion.h2>

            <motion.img
              src={service.image}
              className="object-cover w-full h-48 mb-4 transition-all duration-500 ease-in-out rounded-lg group-hover:scale-105 group-hover:rotate-2"
              alt={service.title}
              whileHover={{ scale: 1.05, rotate: 2 }} // Image zoom and rotate effect on hover
            />

            <motion.p
              className="text-gray-700 transition-all duration-300 group-hover:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}  // Slight delay for description fade-in
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
