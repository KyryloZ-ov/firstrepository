const API_KEY = "d261817ca91e4a13995c29b31cac8128";
const BASE_URL = "https://api.themoviedb.org/3";

export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export async function getPopularMovies() {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
