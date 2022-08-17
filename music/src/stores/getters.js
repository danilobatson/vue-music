export default {
  hiddenClass(state) {
    return !state.isOpen ? 'hidden' : '';
  },
};
