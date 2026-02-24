function movieCardWithPlayer(movieCard) {
  if (movieCard.movie.trailer != undefined) {
    movieCard.$wrapper.addEventListener("click", function () {
      const player = new PlayerModal(movieCard.movie);
      player.render();
    });
  }
  return movieCard;
}
