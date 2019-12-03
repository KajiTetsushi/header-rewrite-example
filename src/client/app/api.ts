import { HttpClient } from '~lib/fetch';
import { APP_BASE_URL } from '~lib/env';

export const api = HttpClient({
  baseURL: APP_BASE_URL,
});
