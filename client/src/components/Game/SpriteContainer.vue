<template>
  <div
    v-if="character"
    class="w-4 h-4 absolute bg-black text-white"
    :style="{ left: `${character.x}rem`, bottom: `${character.y}rem` }"
  >
    <span v-if="character.direction">{{ character.direction[0] }}</span>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  watch: {
    character: {
      immediate: true,
      deep: true,
      handler(newCharacter, oldCharacter) {
        const { x: oldX, y: oldY } = oldCharacter || { x: 0, y: 0 };
        const { x: newX, y: newY } = newCharacter;

        if (oldX !== newX || oldY !== newY) {
          newCharacter.moving = true;
          newCharacter.direction = 'left';

          if (newY !== oldY) {
            newCharacter.direction = newY < oldY ? 'down' : 'up';
          } else if (newX !== oldX) {
            newCharacter.direction = newX < oldX ? 'left' : 'right';
          }

          setTimeout(() => {
            newCharacter.moving = false;
          }, 100);
        }
      },
    },
  },
};
</script>
