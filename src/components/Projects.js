import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fetchGitHubProjects } from '../services/githubService';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const repos = await fetchGitHubProjects();
      const filteredRepos = repos.filter(repo => !repo.fork); // Exclude forked repositories
      setProjects(filteredRepos);
    };
    getProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description || 'No description provided.'}</p>
              <div className="flex space-x-4">
                {project.html_url && (
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
