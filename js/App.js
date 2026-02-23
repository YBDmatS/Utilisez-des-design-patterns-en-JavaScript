class App {
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.moviesApi = new MovieApi("/data/new-movie-data.json");
  }

  async main() {
    const moviesData = await this.moviesApi.getMovies();
    const movies = moviesData.map((movie) => new Movie(movie));
    console.log(movies);
    movies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
