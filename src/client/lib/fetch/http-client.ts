import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export type HttpClientResponseOptions<T extends any = {}> = {
  onFulfilled?: (value: AxiosResponse<T>) => AxiosResponse<T> | Promise<AxiosResponse<T>>;
  onRejected?: (error: any) => any;
};

export const HttpClient = <T extends any>(
  config: AxiosRequestConfig = {},
  onResponse: HttpClientResponseOptions<T> = {}
) => {
  const httpClient = axios.create(config);

  if (onResponse) {
    httpClient.interceptors.response.use(
      onResponse.onFulfilled,
      onResponse.onRejected,
    );
  }

  return httpClient;
};
