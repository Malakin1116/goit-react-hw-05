import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "8b10ee9ec2e80fb61717045f67c36d53";

export const fetchRequest = async (endpoint) => {
  try {
    const response = await axios.get(endpoint, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
