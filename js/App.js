class App {
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.oldMoviesApi = new MovieApi("/data/old-movie-data.json");
    this.newMoviesApi = new MovieApi("/data/new-movie-data.json");
    this.externalMoviesData = new MovieApi("/data/external-movie-data.json");
  }

  async main() {
    const newMoviesData = await this.newMoviesApi.getMovies();
    const externalMoviesData = await this.externalMoviesData.getMovies();

    const newMovies = newMoviesData.map(
      (movie) => new MoviesFactory(movie, "newApi"),
    );
    const externalMovie = externalMoviesData.map(
      (movie) => new MoviesFactory(movie, "externalApi"),
    );

    const fullMovies = [...externalMovie, ...newMovies];

    fullMovies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
