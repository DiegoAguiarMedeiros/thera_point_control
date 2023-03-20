import axios from "axios";
import User from "../utils/user";

console.log('process.env.API_URL',process.env.API_URL)

const HttpClient = axios.create({ baseURL: process.env.API_URL });

HttpClient.interceptors.request.use(async (config) => {
  const token = await User.getUserToken();
  console.log('token',token)
  const newConfig = { ...config };
  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
});

export default HttpClient;