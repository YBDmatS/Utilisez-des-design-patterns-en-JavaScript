class Search {
  constructor(movies) {
    this.movies = movies;
    this.searchResults = [];
    this.searchQuery = "";
  }
  search(query) {
    // Cette méthode doit être implémentée dans les classes filles
    throw new Error(
      "La méthode search doit être implémentée dans les classes filles",
    );
  }
}

class MovieNameSearch extends Search {
  constructor(movies) {
    super(movies);
  }

  search(query) {
    this.searchQuery = query.toLowerCase();
    this.searchResults = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.searchQuery),
    );
    return this.searchResults;
  }
}

class ActorNameSearch extends Search {
  constructor(movies) {
    super(movies);
  }

  search(query) {
    this.searchQuery = query.toLowerCase();
    this.searchResults = this.movies.filter((movie) =>
      movie.actors.some((actor) =>
        actor.toLowerCase().includes(this.searchQuery),
      ),
    );
    return this.searchResults;
  }
}
