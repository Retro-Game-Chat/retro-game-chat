<template>
  <div
    class="level border-2 border-black relative"
    :style="{
      width: `${$store.state.level.w}rem`,
      height: `${$store.state.level.h}rem`,
    }"
  >
    <template v-for="(object, index) in $store.state.level.objects">
      <LevelObject :key="`obj${index}`" :x="object.x" :y="object.y" />
    </template>
    <template v-for="(player, index) in $store.state.level.players">
      <SpriteContainer :key="`char${index}`" :character="player" />
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
};
</script>
