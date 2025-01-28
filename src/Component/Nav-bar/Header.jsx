import React from 'react';
import Navigation from './Navigation';  // Import Navigation here
import Appoinment from '../Appoinment/Appoinment';
import { useState } from 'react';
import Services from '../Services/Services';

function Header() {

  const [appoin , setappoin] = useState(false)
  const [ser , setser] = useState(false);


  const openappoin = () =>{
    setappoin(true);
    }


  const closeAppoinmen = () => {
    setappoin(false)
  }


  const services = () => {
    setser(true);
  }
  






  return (
    <div
      className="relative flex items-center justify-center w-full min-h-screen mb-4 overflow-hidden bg-center bg-cover 100vh"
      style={{ backgroundImage: "url('/x.jpg')" } }
      id="header"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-800 via-blue-900 to-teal-700 opacity-70"></div>

      {/* Navigation */}
      <Navigation /> {/* This is where you render the Navigation component */}

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center text-white animate-fadeIn">
        {/* Headline */}
        <p className="text-4xl font-bold tracking-wide md:text-6xl drop-shadow-lg">
          Your Health, Our Priority
        </p>

        {/* Subheadline */}
        <p className="mt-4 text-lg italic text-teal-200 md:text-2xl">
          "Providing compassionate care and advanced medical services for your well-being"
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          {/* Appointment Button */}
         <button className="px-6 py-3 font-semibold text-white transition-all transform bg-teal-500 rounded-full shadow-lg hover:bg-teal-400 hover:shadow-xl hover:scale-105" onClick={openappoin}>
            <div className="flex items-center gap-3">
              <i className="text-xl bx bx-phone-call"></i>
              Appointment
            </div>
          </button>

          {/* Services Button */}
          <a href='#services'>
          <button className="px-6 py-3 font-semibold text-white transition-all transform bg-orange-500 rounded-full shadow-lg hover:bg-orange-400 hover:shadow-xl hover:scale-105">
            <div className="flex items-center gap-3">
              <i className="text-xl bx bxs-briefcase"></i>
              Our Services
            </div>
          </button></a>
        </div>
        
      </div>

     {appoin && <Appoinment closeAppoinmen = {closeAppoinmen} />} 
     



    </div>
  );
}

export default Header;
