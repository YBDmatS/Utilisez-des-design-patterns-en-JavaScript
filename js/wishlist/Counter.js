class WhishListCounter {
  constructor() {
    WhishListCounter.count = 0;
  }

  AddWishListCount() {
    WhishListCounter.count++;
  }

  RemoveWishListCount() {
    if (WhishListCounter.count > 0) {
      WhishListCounter.count--;
    }
  }

  update($wishBtn, addedWishList = true) {
    if (addedWishList) {
      this.AddWishListCount();
    } else {
      this.RemoveWishListCount();
    }

    document.getElementsByClassName("wish-count")[0].innerHTML =
      WhishListCounter.count.toString();
  }
}
