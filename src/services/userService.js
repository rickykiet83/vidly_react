import { apiUrl } from './../config.json';
import http from './httpService';

const apiEndpoint = apiUrl + '/users';

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    name: user.name,
    password: user.password,
  });
}
