<template>
    <SpriteContainer :x="$store.state.character.x" :y="$store.state.character.y" />
</template>

<script>
import SpriteContainer from '../components/SpriteContainer'

export default {
  components: {
    SpriteContainer,
  },
}
</script>