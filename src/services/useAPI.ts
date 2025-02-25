import axios, { AxiosResponse } from 'axios';
import https from 'https';

// import { putRefreshToken } from '@/queries/Auth';
import localStorageUtil from '@/utils/localStorageHelpers';
// import { handleLogoutSession } from "@/utils/authHelpers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // "x-api-key": API_KEY,
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

// Request Interceptor
AxiosInstance.interceptors.request.use(
  (config: any) => {
    const authSession = localStorageUtil.getItem<{ accessToken: string }>(
      'auth'
    );

    if (authSession?.accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${authSession.accessToken}`,
      };
    }

    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onTokenRefreshed = (newToken: string) => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};
console.log(onTokenRefreshed);

const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

// Response Interceptor
AxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;
    const authSession = localStorageUtil.getItem<{
      accessToken: string;
      refreshToken: string;
    }>('auth');

    if (
      error?.response?.status === 401 &&
      authSession &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(AxiosInstance(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        // const response = await putRefreshToken({
        //   token: authSession.refreshToken,
        // });
        // if (response?.data?.tokens) {
        //   const newAccessToken = response.data.tokens.accessToken;
        //   localStorageUtil.setItem('auth', response.data.tokens);
        //   isRefreshing = false;
        //   onTokenRefreshed(newAccessToken);
        //   originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        //   return AxiosInstance(originalRequest);
        // }
      } catch (err) {
        console.error('Token refresh failed:', err);
        isRefreshing = false;
        // handleLogoutSession();
      }
    } else if (error?.response?.status === 401) {
      //   handleLogoutSession();
    }

    return Promise.reject(error);
  }
);

interface APIRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: object;
  headers?: Record<string, string>;
  params?: Record<string, any>;
}

const callAPI = async ({ url, method, headers, ...rest }: APIRequestProps) => {
  try {
    const response = await AxiosInstance({ url, method, headers, ...rest });
    return response.data;
  } catch (error: any) {
    console.log('API Request Error:', error);
    throw error;
  }
};

export default callAPI;
