import React from 'react';
import Con from '../../assets/Contact.jpg'; // Replace with the actual image path

function Contact() {
  return (
    <div className="container py-10 mx-auto text-center" id="contact">
      {/* Header Section */}
      <div
        className="w-full px-8 py-10 mt-5 transition-all duration-300 ease-out transform rounded-lg shadow-xl cursor-pointer bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 hover:scale-105 hover:shadow-2xl hover:bg-blue-600"
      >
        <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-200">
          We are here to assist you with any questions or concerns you may have.
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-8 mt-8 sm:flex-row">
        <div className="text-xl">
          <p className="text-gray-600">Have any Questions?</p>
          <p className="text-4xl text-blue-500">Contact Us for More Information</p>
        </div>

        <div className="mt-4 text-center sm:mt-0">
          <p className="text-gray-600">
            Fill in your details below, and our team will get in touch with you.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 py-5 mt-5 rounded-lg shadow-md bg-blue-50">
        {[{ icon: 'bx-phone-call', label: 'Phone', value: '+94752069762' },
          { icon: 'bx-envelope', label: 'Email', value: 'gayak3088@gmail.com' },
          { icon: 'bx-location-plus', label: 'Location', value: '123 Health St., Cityville, Country' }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-110"
          >
            <i className={`text-4xl text-blue-600 bx ${item.icon}`}></i>
            <p className="mt-4 text-lg text-gray-700">{item.label}</p>
            <p className="text-gray-500">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col items-center justify-between gap-12 mt-10 sm:flex-row">
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <img src={Con} alt="Contact" className="object-cover w-full transition duration-300 ease-in-out transform rounded-lg shadow-lg h-96 hover:scale-105 hover:shadow-2xl" />
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full max-w-md p-6 transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg sm:w-1/2 hover:shadow-xl hover:scale-105">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Get in Touch</h3>
          <p className="mb-6 text-gray-600">
            We value your feedback. Please fill out the form below, and our team will get back to you as soon as possible.
          </p>

          <div className="flex flex-col mb-4">
            <label className="block mb-2 text-lg text-gray-600">Enter Your Name:</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block mb-2 text-lg text-gray-600">Enter Your Email:</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block mb-2 text-lg text-gray-600">Message:</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <button className="w-full py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
