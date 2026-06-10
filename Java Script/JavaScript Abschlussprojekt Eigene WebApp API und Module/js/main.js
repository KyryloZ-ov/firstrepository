import { searchMovies, getPopularMovies } from "./api.js";
import { renderMovies } from "./ui.js";

const searchInput = document.getElementById("searchInput");
const moviesContainer = document.getElementById("moviesContainer");

async function loadPopular() {
  const movies = await getPopularMovies();
  renderMovies(movies, moviesContainer);
}

searchInput.addEventListener("keyup", async () => {
  const query = searchInput.value.trim();

  if (query.length === 0) {
    loadPopular();
    return;
  }

  const movies = await searchMovies(query);
  renderMovies(movies, moviesContainer);
});

loadPopular();
