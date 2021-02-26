import Vue from "vue";
import Vuex from "vuex";
import * as axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chatting: false,
    level: {
      name: "Forest",
      w: 40,
      h: 40,
      defaultEntrance: [20, 20],
      exits: [
        {
          level: "Mountain",
          exit: { x: 0, y: 20 },
          entrance: { x: 40, y: 20 },
        },
        {
          level: "Mountain",
          exit: { x: 0, y: 21 },
          entrance: { x: 40, y: 21 },
        },
      ],
      objects: [
        {
          x: 25,
          y: 25,
        },
        {
          x: 15,
          y: 30,
        },
        {
          x: 15,
          y: 15,
        },
      ],
      players: [
        {
          x: 20,
          y: 21,
        },
        {
          x: 28,
          y: 18,
        },
        {
          x: 30,
          y: 11,
        },
      ],
    },
    character: {
      x: 0,
      y: 0,
    },
  },
  mutations: {
    updatePos(state, [x, y]) {
      state.character = {
        x,
        y,
      };

      // const accessToken = await this.$auth.getTokenSilently();
      // axios
      //   .post("/api/user/position", state.character)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
    chatting(state) {
      state.chatting = true;
    },
    notChatting(state) {
      state.chatting = false;
    },
  },
  actions: {},
});
