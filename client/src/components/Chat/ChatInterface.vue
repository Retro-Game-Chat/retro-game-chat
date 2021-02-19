<template>
  <div class="chatInterface">
    <ChatInput v-if="$store.state.chatting" />
  </div>
</template>

<script>
import ChatInput from '@/components/Chat/ChatInput';

const keys = {
  Enter: {
    name: 'enter',
    do: 'enterKey',
  },
};

export default {
  components: {
    ChatInput,
  },

  mounted() {
    window.addEventListener('keydown', this.listenKeydown);
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.listenKeydown);
  },

  methods: {
    listenKeydown(e) {
      this.listenEnter(e);
      this.listenEsc(e);
    },

    listenEnter(e) {
      if (e.key === 'Enter' && !this.$store.state.chatting) {
        this.$store.commit('chatting');
      }
    },

    listenEsc(e) {
      if (e.key === 'Escape' && this.$store.state.chatting) {
        this.$store.commit('notChatting');
      }
    },
  },
};
</script>
