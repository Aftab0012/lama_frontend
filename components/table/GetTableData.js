// axiosUtils.js
import axios from 'axios';

export const fetchData = async (storedToken) => {
  const backendURL = `https://lamarefbackend.onrender.com/media-uploads`;
  try {
    const response = await axios.get(backendURL, {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    });
    return response.data; // Return the data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};
