<template>
  <div class="nes-container with-title is-centered is-dark">
    <p class="title">{{ $store.state.level.name }}</p>
    <div
      id="gameInterface"
      class="p-24 overflow-hidden max-h-80 bg-nes-dark"
      ref="gameInterface"
    >
      <!-- hello {{ $auth.user.name }}. Your position is
    {{ $store.state.character.x }},{{ $store.state.character.y }}. -->
      <GameLevel class="mx-auto bg-white" />
    </div>
  </div>
</template>

<script>
import GameLevel from "@/components/Game/GameLevel";

const keys = {
  w: {
    name: "up",
    do: "moveUp",
  },
  ArrowUp: {
    name: "up",
    do: "moveUp",
  },
  s: {
    name: "down",
    do: "moveDown",
  },
  ArrowDown: {
    name: "down",
    do: "moveDown",
  },
  a: {
    name: "left",
    do: "moveLeft",
  },
  ArrowLeft: {
    name: "left",
    do: "moveLeft",
  },
  d: {
    name: "right",
    do: "moveRight",
  },
  ArrowRight: {
    name: "right",
    do: "moveRight",
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
    this.tryAndMove(this.$store.state.level.defaultEntrance);
    window.addEventListener("keydown", this.listenKeyDown);
  },

  beforeDestroy() {
    window.removeEventListener("keydown", this.listenKeyDown);
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
      const { player } = this.$store.state;
      let { x: newX, y: newY } = player;

      newY++;
      this.tryAndMove([newX, newY]);
    },

    moveDown() {
      const { player } = this.$store.state;
      let { x: newX, y: newY } = player;

      newY--;
      this.tryAndMove([newX, newY]);
    },

    moveLeft() {
      const { player } = this.$store.state;
      let { x: newX, y: newY } = player;

      newX--;
      this.tryAndMove([newX, newY]);
    },

    moveRight() {
      const { player } = this.$store.state;
      let { x: newX, y: newY } = player;

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

      // const exits = state.level.exits.find((exit) => {
      //   return newX === object.x && newY === object.y;
      // });

      const clash = state.level.objects.find((object) => {
        return newX === object.x && newY === object.y;
      });

      // newX + playerSize = right shoulder of player
      // newX = left shoulder of player
      // newY + playerSize = top of player
      // newY = bottom of player

      if (!clash) {
        const rem = 16;
        const gameWidth = this.$refs.gameInterface.offsetWidth;
        const gameHeight = this.$refs.gameInterface.offsetHeight;
        const gameWidthRem = Math.floor(gameWidth / rem);
        const playerSize = 1;
        const margin = 10;

        this.$store.dispatch("updatePlayerPos", [newX, newY]);

        if (newX + playerSize > gameWidthRem - margin) {
          this.$refs.gameInterface.scrollLeft =
            (newX + playerSize - (gameWidthRem - margin)) * rem;
        } else if (newX < margin) {
          this.$refs.gameInterface.scrollLeft =
            (newX + playerSize - margin) * rem;
        }

        const distanceFromBottom = newY * rem - (gameHeight - margin * rem);
        const defaultTop = state.level.h * rem - gameHeight;
        if (distanceFromBottom > 0) {
          this.$refs.gameInterface.scrollTop = defaultTop - distanceFromBottom;
        } else {
          this.$refs.gameInterface.scrollTop = defaultTop;
        }
      }
    },
  },
};
</script>
