class UserContext {
  constructor() {
    this.states = [new AnonymousUserState(), new UserConnectedState()];
    this.currentState = this.getInitialState();
  }

  getInitialState() {
    const user = new User();
    const [AnonymousUserState, UserConnectedState] = this.states;
    if (user.user) {
      return UserConnectedState;
    } else {
      return AnonymousUserState;
    }
  }

  change(firstName, lastName) {
    const user = new User({ firstName, lastName });
    const [AnonymousUserState, UserConnectedState] = this.states;

    if (user.user) {
      this.currentState = UserConnectedState;
    } else {
      this.currentState = AnonymousUserState;
    }
  }
}
