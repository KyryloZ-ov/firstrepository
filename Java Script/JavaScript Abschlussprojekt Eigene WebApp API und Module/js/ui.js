export function renderMovies(movies, container) {
  container.innerHTML = "";

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.vote_average}</p>
    `;

    container.appendChild(card);
  });
}
