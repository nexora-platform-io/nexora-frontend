import { api, refreshApi } from "./api-client";
import { getAccessToken, setAccessToken } from "./auth-token";

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const { data } = await refreshApi.post("/auth/refresh");

      setAccessToken(data.data.accessToken);

      return api(originalRequest);
    }

    return Promise.reject(error);
  },
);
