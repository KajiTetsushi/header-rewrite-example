import { AxiosRequestConfig } from 'axios';

import { HttpClient } from '~lib/fetch';

export const toApiBaseUrl = (baseURL: string = '', path: string = '') => path.startsWith('/') && baseURL === '/'
  ? path
  : `${apiConfig.baseURL}${baseURL}`;

export const apiConfig = Object.freeze<AxiosRequestConfig>({
  baseURL: '/',
});

export const Api = (baseURL: string = '') => HttpClient({
  ...apiConfig,
  baseURL: toApiBaseUrl(apiConfig.baseURL, baseURL),
});
