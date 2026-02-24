class UserConnectedState {
  constructor() {
    this.user = new User();
    this.isConnected = true;
  }

  getUser() {
    return new User();
  }
}

class AnonymousUserState {
  constructor() {
    this.user = new User();
    this.isConnected = false;
  }

  getUser() {
    return new User();
  }
}
