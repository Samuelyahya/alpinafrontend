import axios from 'axios';

// todo set env
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need here
  },
  // You can add other default settings here, like timeout, etc.
});

export default axiosInstance;
