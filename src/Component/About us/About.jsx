import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Medicina from '../../assets/Medicina.jpg';
import Mission from '../../assets/Mission.jpg';
import Vision from '../../assets/Vision.jpg';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="container px-4 py-10 mx-auto bg-blue-50" id="about">
      {/* Header Section */}
      <div className="text-center" data-aos="fade-down">
        <h1 className="mb-8 text-4xl font-bold text-blue-600 uppercase">About Us</h1>
        <p className="text-lg text-gray-600">
          Discover our commitment to excellence in healthcare, guided by our mission and vision.
        </p>
      </div>

      {/* About Sections (Mission, Vision, About Us in one row) */}
      <div className="flex flex-col justify-center gap-8 mt-10 md:flex-row">
        {/* Our Mission */}
        <div
          className="flex flex-col items-center p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:rotate-2 hover:bg-blue-50"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">Our Mission</h2>
          <img
            src={Mission}
            className="object-cover w-full h-48 mb-4 transition duration-300 transform rounded-lg hover:scale-105 hover:rotate-2"
            alt="Mission"
          />
          <p className="text-center text-gray-700">
            Our mission is to provide high-quality, compassionate healthcare services to our community.
          </p>
        </div>

        {/* Our Vision */}
        <div
          className="flex flex-col items-center p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:rotate-2 hover:bg-blue-50"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">Our Vision</h2>
          <img
            src={Vision}
            className="object-cover w-full h-48 mb-4 transition duration-300 transform rounded-lg hover:scale-105 hover:rotate-2"
            alt="Vision"
          />
          <p className="text-center text-gray-700">
            Our vision is to be a leader in healthcare, creating healthier lives in a connected community.
          </p>
        </div>

        {/* About Us */}
        <div
          className="flex flex-col items-center p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:rotate-2 hover:bg-blue-50"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">About</h2>
          <img
            src={Medicina}
            className="object-cover w-full h-48 mb-4 transition duration-300 transform rounded-lg hover:scale-105 hover:rotate-2"
            alt="About Us"
          />
          <p className="text-center text-gray-700">
            We are a trusted healthcare provider dedicated to delivering comprehensive care and improving lives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
