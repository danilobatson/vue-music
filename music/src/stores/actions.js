import { auth, usersCollections } from '@/includes/firebase';

export default {
  setFalseAction({ commit }) {
    commit('setFalseMutation');
  },
  logOutAction({ commit }) {
    commit('userLogOut');
  },
  logInAction({ commit }) {
    commit('userLogIn');
  },
  async register({ commit }, values) {
    const userCred = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );

    await usersCollections.doc(userCred.user.uid).set({
      name: values.name,
      email: values.email,
      age: values.age,
      country: values.country,
    });

    userCred.user.updateProfile({
      displayName: values.name,
    });

    commit('userLogIn');
  },
  async authenticate({ commit }, values) {
    await auth.signInWithEmailAndPassword(values.email, values.password);
    commit('userLogIn');
  },
};
