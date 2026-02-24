class WishlistSubject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(movieCard, addedWishList = true) {
    this.observers.forEach((observer) =>
      observer.update(movieCard, addedWishList),
    );
  }
}
