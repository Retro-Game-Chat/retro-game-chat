<template>
  <div class="gameInterface">
    hello {{ $auth.user.name }}. Your position is
    {{ $store.state.character.x }},{{ $store.state.character.y }}.
    <GameLevel />
  </div>
</template>

<script>
import GameLevel from '@/components/Game/GameLevel';

const keys = {
  w: {
    name: 'up',
    do: 'moveUp',
  },
  ArrowUp: {
    name: 'up',
    do: 'moveUp',
  },
  s: {
    name: 'down',
    do: 'moveDown',
  },
  ArrowDown: {
    name: 'down',
    do: 'moveDown',
  },
  a: {
    name: 'left',
    do: 'moveLeft',
  },
  ArrowLeft: {
    name: 'left',
    do: 'moveLeft',
  },
  d: {
    name: 'right',
    do: 'moveRight',
  },
  ArrowRight: {
    name: 'right',
    do: 'moveRight',
  },
};

export default {
  components: {
    GameLevel,
  },

  data() {
    return {
      chatting: false,
    };
  },

  mounted() {
    window.addEventListener('keydown', this.listenKeyDown);
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.listenKeyDown);
  },

  methods: {
    listenKeyDown(e) {
      if (this.$store.state.chatting) {
        return;
      }

      const action = keys[e.key];

      if (action) {
        this[action.do]();
      }
    },

    moveUp() {
      const { character } = this.$store.state;
      let { x: newX, y: newY } = character;

      newY++;
      this.tryAndMove([newX, newY]);
    },

    moveDown() {
      const { character } = this.$store.state;
      let { x: newX, y: newY } = character;

      newY--;
      this.tryAndMove([newX, newY]);
    },

    moveLeft() {
      const { character } = this.$store.state;
      let { x: newX, y: newY } = character;

      newX--;
      this.tryAndMove([newX, newY]);
    },

    moveRight() {
      const { character } = this.$store.state;
      let { x: newX, y: newY } = character;

      newX++;
      this.tryAndMove([newX, newY]);
    },

    tryAndMove([newX, newY]) {
      if (this.chatting) {
        return;
      }

      const { state } = this.$store;

      if (
        newX === state.level.w ||
        newY === state.level.h ||
        newX < 0 ||
        newY < 0
      ) {
        return;
      }

      const clash = state.level.objects.find((object) => {
        return newX === object.x && newY === object.y;
      });

      if (!clash) {
        this.$store.commit('updatePos', [newX, newY]);
      }
    },
  },
};
</script>
