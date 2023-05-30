import axios from "axios";
import Auth from "../api/auth/auth";
import LocalStorage from "./localStorage";

export const API_BASE_URL = "https://eternal-ai.onrender.com";

const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  if (config.headers)
    config.headers.Authorization = `${LocalStorage.getToken()}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (!originalRequest._retry && error.response.status === 401) {
      originalRequest._retry = true;
      const success = await Auth.refresh();
      if (success) {
        instance.defaults.headers.common[
          "Authorization"
        ] = `${LocalStorage.getToken()}`;
        return instance(originalRequest);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
