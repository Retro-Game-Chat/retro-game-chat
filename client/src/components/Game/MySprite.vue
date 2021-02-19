<template>
  <SpriteContainer :character="$store.state.character" />
</template>

<script>
import SpriteContainer from '@/components/Game/SpriteContainer';

export default {
  components: {
    SpriteContainer,
  },
};
</script>
