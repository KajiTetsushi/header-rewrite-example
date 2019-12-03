import { AxiosResponse } from 'axios';

export const selectData = <Data = {}>(response: AxiosResponse<Data>) => response.data;
