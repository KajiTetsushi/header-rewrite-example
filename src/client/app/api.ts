import { HttpClient } from '~lib/fetch';
import { prefixed } from '~lib/env';

export const api = HttpClient({
  baseURL: prefixed(),
});
