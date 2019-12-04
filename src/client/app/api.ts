import { AxiosRequestConfig } from 'axios';

import { HttpClient } from '~lib/fetch';

export const apiConfig = Object.freeze<AxiosRequestConfig>({
  baseURL: '/',
});

export const api = HttpClient(apiConfig);
