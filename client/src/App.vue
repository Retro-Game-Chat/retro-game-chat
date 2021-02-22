<template>
  <div id="app">
    <nav-bar />
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>
