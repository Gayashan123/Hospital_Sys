import React from 'react';



function Footer() {
  return (
    <footer className="py-10 text-gray-300 bg-gradient-to-r from-teal-800 via-blue-700 to-teal-600">
      <div className="container px-4 mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Company Info */}
          <div className="sm:text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">About Us</h2>
            <p className="text-sm leading-relaxed">
              We are dedicated to providing exceptional healthcare services with a focus on quality and patient care. Contact us for any inquiries or support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2">


            <li>
                <a href="#header" className="transition-colors hover:text-teal-300">
                  Home
                </a>
              </li>

            <li>
                <a href="#about" className="transition-colors hover:text-teal-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-teal-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-teal-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-teal-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-center space-x-2">
                <i className="text-teal-300 bx bx-phone-call"></i>
                <span>+94 752069762</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <i className="text-teal-300 bx bx-envelope"></i>
                <span>gayak3088@example.com</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <i className="text-teal-300 bx bx-location-plus"></i>
                <span>No223 Bosevana, Hingurakgoda, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-teal-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between mt-8 text-sm md:flex-row">
          <p className="text-white">© 2025 G Y A . All rights reserved.</p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <a
              href="#"
              className="transition-all transform hover:scale-110 hover:text-teal-300"
            >
              <i className="text-2xl bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              className="transition-all transform hover:scale-110 hover:text-teal-300"
            >
              <i className="text-2xl bx bxl-twitter"></i>
            </a>
            <a
              href="#"
              className="transition-all transform hover:scale-110 hover:text-teal-300"
            >
              <i className="text-2xl bx bxl-instagram"></i>
            </a>
            <a
              href="#"
              className="transition-all transform hover:scale-110 hover:text-teal-300"
            >
              <i className="text-2xl bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
