import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10 top-0 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Lohith Varma</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          <li><Link to="/resume" className="hover:text-blue-400">Resume</Link></li> {/* Add Resume Link */}
          <li>
            <a href="https://www.linkedin.com/in/lohithvarma" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a href="https://github.com/lohithvd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
