import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    level: {
      name: 'Forest',
      objects: [
        {
          x: 12,
          y: 4
        },
        {
          x: 22,
          y: 5
        },
        {
          x: 10,
          y: 2
        }
      ],
    },
    character: {
      x: 0,
      y: 0
    }
  },
  mutations: {
    updatePos(state, [x, y]) {
      state.character = {
        x,
        y
      }
    },
  },
  actions: {
    up({ commit, state }) {
      const { character } = state
      let { x: newX, y: newY } = character

      newY--

      const clash = state.level.objects.find(object => {
        return newX === object.x && newY === object.y
      })

      if (!clash) {
        commit('updatePos', [newX, newY])
      }
    },
    down({ commit, state }) {
      const { character } = state
      let { x: newX, y: newY } = character

      newY++

      const clash = state.level.objects.find(object => {
        return newX === object.x && newY === object.y
      })

      if (!clash) {
        commit('updatePos', [newX, newY])
      }
    },
    left({ commit, state }) {
      const { character } = state
      let { x: newX, y: newY } = character

      newX--

      const clash = state.level.objects.find(object => {
        return newX === object.x && newY === object.y
      })

      if (!clash) {
        commit('updatePos', [newX, newY])
      }
    },
    right({ commit, state }) {
      const { character } = state
      let { x: newX, y: newY } = character

      newX++

      const clash = state.level.objects.find(object => {
        return newX === object.x && newY === object.y
      })

      if (!clash) {
        commit('updatePos', [newX, newY])
      }
    },
  },
});
