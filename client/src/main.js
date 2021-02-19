import Vue from "vue";
import App from "./App.vue";
import { Auth0Plugin } from "./auth";
import router from "./router";
import store from "./store";
import { domain, clientId } from "../auth_config.json";

import VueSocketIO from "vue-socket.io";

import "./assets/styles/index.css";

Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "/",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
    // options: { path: "/my-app/" } //Optional options
  })
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
