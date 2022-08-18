export default {
  setFalseMutation(state) {
    state.isOpen = false;
  },
  userLogOut(state) {
    if (state.userLoggedIn) {
      state.userLoggedIn = false;
    } else return;
  },
  userLogIn(state) {
    if (!state.userLoggedIn) {
      state.userLoggedIn = true;
    } else return;
  },
};
