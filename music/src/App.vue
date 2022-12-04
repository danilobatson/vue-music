<template>
  <AppHeader />
  <router-view></router-view>
  <!-- Player -->
  <Player />

  <AppAuth />
</template>

<script>
import { AppHeader, AppAuth, Player } from '@/components'; 
import { mapState } from 'vuex';
import { auth } from './includes/firebase';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    Player,
  },
  computed: {
    ...mapState({
      userLoggedIn: (state) => state.userLoggedIn,
    }),
  },
  created() {
    if (auth.currentUser) {
      this.$store.state.userLoggedIn = true;
    }
  },
};
</script>

<style scoped></style>
