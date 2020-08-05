import axios from 'axios';
const URL = process.env.REACT_APP_REST;

// Fetch Data
export const get = async (data) => {
  try {
    const response = await axios.get(`${URL + data.url}`, data.body, data.config);
    return response;
  } catch (error) {
    return error;
  }
};

// Post Data
export const post = async (data) => {
  try {
    const response = await axios.post(`${URL + data.url}`, data.body, data.config);
    return response;
  } catch (error) {
    return error;
  }
};

// Patch Data
export const patch = async (data) => {
  try {
    const response = await axios.patch(`${URL + data.url}`, data.body, data.config);
    return response;
  } catch (error) {
    return error;
  }
};

// Delete Data
export const remove = async (data) => {
  try {
    const response = await axios.delete(`${URL + data.url}`, data.body, data.config);
    return response;
  } catch (error) {
    return error;
  }
};
