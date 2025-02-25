import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
          aria-label="Download Resume"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
