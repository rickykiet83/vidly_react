import { apiUrl } from './../config.json';
import http from './httpService';

const apiEndpoint = apiUrl + '/movies';

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(id) {
  return http.delete(apiEndpoint + '/' + id);
}

export function getMovie(id) {
  return http.get(apiEndpoint + '/' + id);
}

export function saveMovie(movie) {
  if (movie._id) return http.put(apiEndpoint + '/' + movie._id, movie);
  else return http.post(apiEndpoint, movie);
}
