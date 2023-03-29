const toggleMovies = () => {
  const shows = document.querySelectorAll('.show');
  shows.forEach((show) => (show.style.display = 'none'));
  const movies = document.querySelectorAll('.movie');
  movies.forEach((movie) => (movie.style.display = 'block'));
};

const toggleShows = () => {
  const movies = document.querySelectorAll('.movie');
  movies.forEach((movie) => (movie.style.display = 'none'));
  const shows = document.querySelectorAll('.show');
  shows.forEach((show) => (show.style.display = 'block'));
};

const showBtn = document.getElementById('show-btn');
const movieBtn = document.getElementById('movie-btn');

showBtn.addEventListener('click', () => {
  showBtn.classList.add('active');
  movieBtn.classList.remove('active');
  toggleShows();
});

movieBtn.addEventListener('click', () => {
  movieBtn.classList.add('active');
  showBtn.classList.remove('active');
  toggleMovies();
});