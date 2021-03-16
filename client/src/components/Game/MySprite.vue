<template>
  <SpriteContainer :character="$store.state.player" />
</template>

<script>
import SpriteContainer from "@/components/Game/SpriteContainer";

export default {
  components: {
    SpriteContainer,
  },
};
</script>
