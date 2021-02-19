<template>
  <div>
    <div class="mt-1">
      <input
        v-focus
        type="text"
        @keydown.exact.enter="enterKey"
        ref="chatInput"
        name="chatInput"
        id="chatInput"
        class="border-2 border-black p-2 ring-0"
        placeholder="you@example.com"
      />
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },

  methods: {
    enterKey() {
      console.log(`submit the message: ${this.$refs.chatInput.value}`);
      setTimeout(() => {
        console.log(`processed the message: ${this.$refs.chatInput.value}`);
        this.$store.commit("notChatting");
      }, 100);
    },
  },
};
</script>
