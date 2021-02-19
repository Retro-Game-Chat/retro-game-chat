<template>
  <div
    class="w-4 h-4 absolute"
    :class="appearance"
    :style="{ left: `${x}rem`, bottom: `${y}rem` }"
  ></div>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    appearance: {
      type: String,
      default: 'bg-green-800',
    },
  },
};
</script>
