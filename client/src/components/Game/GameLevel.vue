<template>
  <div
    class="relative border-2 border-black level"
    :style="{
      width: `${$store.state.level.w}rem`,
      height: `${$store.state.level.h}rem`,
    }"
  >
    <template v-for="(object, index) in $store.state.level.objects">
      <LevelObject :key="`obj${index}`" :x="object.x" :y="object.y" />
    </template>
    <template v-for="(character, index) in characters">
      <SpriteContainer :key="`char${index}`" :character="character" />
    </template>
    <MySprite />
  </div>
</template>

<script>
import SpriteContainer from "@/components/Game/SpriteContainer";
import MySprite from "@/components/Game/MySprite";
import LevelObject from "@/components/Game/LevelObject";

export default {
  components: {
    SpriteContainer,
    MySprite,
    LevelObject,
  },

  destroy() {
    this.$store.dispatch("unbindCharacters");
    this.$store.dispatch("unbindPlayer");
  },

  mounted() {
    this.$store.dispatch("bindCharacters");
    this.$store.dispatch("bindPlayer");
  },

  computed: {
    characters() {
      return this.$store.state.characters.filter(
        (char) => char.id !== "aXysdfp2OLjGwTBfgBrS"
      );
    },
  },
};
</script>
