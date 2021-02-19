<template>
  <div class="gameView">
    <GameInterface />
    <ChatInterface />
  </div>
</template>

<script>
import ChatInterface from "@/components/Chat/ChatInterface";
import GameInterface from "@/components/Game/GameInterface";

export default {
  components: {
    ChatInterface,
    GameInterface,
  },
};
</script>
