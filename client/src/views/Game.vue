<template>
  <div class="game">
    hello {{ $auth.user.name }}. Your position is {{$store.state.character.x}},{{$store.state.character.y}}.
    <template v-for="(object, index) in $store.state.level.objects">
      <div :key="index" class="w-4 h-4 bg-green-900 absolute" :style="{ left: `${object.x}rem`, top: `${object.y}rem` }"></div>
    </template>
    <div class="w-4 h-4 bg-black absolute" :style="{ left: `${$store.state.character.x}rem`, top: `${$store.state.character.y}rem` }"></div>
  </div>
</template>

<script>
const keys = {
  38: {
    name: 'up',
    do: 'moveUp'
  },
  87: {
    name: 'up',
    do: 'moveUp'
  },
  40: {
    name: 'down',
    do: 'moveDown'
  },
  83: {
    name: 'down',
    do: 'moveDown'
  },
  37: {
    name: 'left',
    do: 'moveLeft'
  },
  65: {
    name: 'left',
    do: 'moveLeft'
  },
  39: {
    name: 'right',
    do: 'moveRight'
  },
  68: {
    name: 'right',
    do: 'moveRight'
  }
}

export default {
  name: "Game",

  mounted() {
    window.addEventListener('keydown', this.listenMove)
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.listenMove)
  },

  methods: {
    listenMove(e) {
      const action = keys[e.which]

      if (action) {
        this[action.do]()
      }
    },

    moveUp() {
      this.$store.dispatch('up')
    },
    
    moveDown() {
      this.$store.dispatch('down')
    },
    
    moveLeft() {
      this.$store.dispatch('left')
    },
    
    moveRight() {
      this.$store.dispatch('right')
    },
  }
};
</script>
