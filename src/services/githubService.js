import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/lohithvd/repos';

export const fetchGitHubProjects = async () => {
  try {
    const response = await axios.get(GITHUB_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
};
