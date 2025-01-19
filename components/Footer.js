// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PiTalk. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Contact Us
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;