import { apiUrl } from './../config.json';
import http from './httpService';

const apiEndpoint = apiUrl + '/auth';

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
