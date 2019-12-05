import { AxiosRequestConfig } from 'axios';
import path from 'path';

import { HttpClient } from '~lib/fetch';

export const apiConfig = Object.freeze<AxiosRequestConfig>({
  baseURL: '/',
});

export const Api = (baseURL: string = '') => HttpClient({
  ...apiConfig,
  baseURL: path.join(apiConfig.baseURL || '', baseURL),
});
