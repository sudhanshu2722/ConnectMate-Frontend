// src/utils/api.js
const baseUrl = 'http://localhost:4000'
// src/utils/api.js

const fetchData = async (endpoint, options) => {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}`, options);
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to fetch data.');
      }
  
      return await response.json();
    } catch (error) {
      throw new Error(error.message || 'An unexpected error occurred. Please try again later.');
    }
  };
  
  const get = async (endpoint) => {
    return await fetchData(endpoint);
  };
  
  const post = async (endpoint, body) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  
    return await fetchData(endpoint, options);
  };
  
  export { get, post };
  