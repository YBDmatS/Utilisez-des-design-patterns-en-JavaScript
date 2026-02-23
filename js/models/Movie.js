class Movie {
  constructor(data) {
    this._title = data.title;
    this._synopsis = data.synopsis;
    this._picture = data.picture;
    this._duration = data.duration;
    this._released_in = data.released_in;
  }

  get title() {
    if (typeof this._title.fr != "undefined") {
      return this._title.fr;
    } else if (typeof this._title.en != "undefined") {
      return this._title.en;
    } else {
      return "";
    }
  }

  get synopsis() {
    return this._synopsis;
  }

  get picture() {
    return this._picture;
  }

  get duration() {
    const formatDuration = `${Math.floor(this._duration / 60)}h${this._duration % 60}`;
    return formatDuration;
  }

  get released_in() {
    return this._released_in;
  }
}
