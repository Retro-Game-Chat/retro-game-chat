<template>
  <nav class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 border-black border">
    <ul>
      <li v-if="!$auth.isAuthenticated && !$auth.loading">
        <button
          id="qsLoginBtn"
          @click.prevent="login"
        >Log in</button>
      </li>

      <li v-if="$auth.isAuthenticated">
        <img
          :src="$auth.user.picture"
          alt="User's profile picture"
          width="50"
        />
        {{ $auth.user.name }}
        <router-link to="/game">Game</router-link>
        <button
          id="qsLoginBtn"
          @click.prevent="logout"
        >Log out</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
};
</script>