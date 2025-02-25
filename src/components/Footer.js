import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/lohithvarma" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/lohithvd" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="mailto:lohithvdcb@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>
      <p className="text-center mt-2">© 2025 Lohith Varma Dommaraju</p>
    </footer>
  );
};

export default Footer;
