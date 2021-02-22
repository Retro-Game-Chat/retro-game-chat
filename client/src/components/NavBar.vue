<template>
  <div class="bg-blue-300">
    <nav class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul class="py-2">
        <li v-if="!$auth.isAuthenticated && !$auth.loading">
          <button
            type="button"
            class="nes-btn is-success"
            id="qsLoginBtn"
            @click.prevent="login"
          >
            Log in
          </button>
        </li>

        <li v-if="$auth.isAuthenticated" class="flex justify-end">
          <ul class="flex flex-row-reverse items-center space-x-4">
            <li class="flex flex-row-reverse items-center pl-4">
              <img
                :src="$auth.user.picture"
                alt="User's profile picture"
                class="image-pixelated nes-avatar is-rounded is-large"
                width="50"
              />

              <!--
              {{ $auth.user.name }}
              -->
            </li>
            <li>
              <router-link class="nes-btn is-primary" to="/game">
                Game
              </router-link>
            </li>
            <li>
              <button
                type="button"
                class="nes-btn is-error"
                id="qsLoginBtn"
                @click.prevent="logout"
              >
                Log out
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
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
    },
  },
};
</script>

<style scoped>
.image-pixelated {
  image-rendering: pixelated;
}
</style>
