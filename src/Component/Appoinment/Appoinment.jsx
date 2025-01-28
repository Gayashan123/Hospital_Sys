import React from 'react';

function Appoinment({closeAppoinmen}) { // Destructure here

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
     
      <div className="relative flex flex-col w-full p-6 bg-white rounded-lg shadow-lg md:flex-row md:w-auto">
        {/* Title Section */}
        <div className="w-full mb-6 md:w-1/3 md:mb-0">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">Appointment</h1>
          <p className="text-gray-600">Schedule your appointment easily by filling out the form below.</p>
        </div>

        {/* Form Section */}
        <div className="w-full mr-5 md:w-2/3 sm:ml-5">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Enter Your Mobile No"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-800">Address Details</h2>
              <input
                type="text"
                placeholder="Enter Area"
                className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Enter State"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Submit Appointment
            </button>
          </form>
        </div>
        <button
          className="absolute top-0 right-0 text-gray-500 hover:text-gray-800"
          onClick={closeAppoinmen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>


      </div>
    </div>
  );
}

export default Appoinment;
