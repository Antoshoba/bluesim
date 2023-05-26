import axios, { AxiosRequestHeaders } from "axios";

const Api =
  (apiUrl: string, cookieName: string, getCsrfToken: () => Promise<string>) =>
  () => {
    const request = axios.create({
      baseURL: apiUrl,
      responseType: "json",
      withCredentials: true,
    });

    request.interceptors.request.use(async (config) => {
      config.headers = {
        ...config.headers,
        [cookieName]: await getCsrfToken(),
      } as AxiosRequestHeaders;
      return config;
    });

    return request;
  };

export default Api;
