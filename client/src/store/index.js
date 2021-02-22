import Vue from "vue";
import Vuex from "vuex";
import * as axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chatting: false,
    level: {
      name: "Forest",
      w: 120,
      h: 12,
      objects: [
        {
          x: 12,
          y: 4,
        },
        {
          x: 22,
          y: 5,
        },
        {
          x: 10,
          y: 2,
        },
      ],
      players: [
        {
          x: 0,
          y: 4,
        },
        {
          x: 28,
          y: 11,
        },
        {
          x: 15,
          y: 2,
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
