import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { Quasar, Notify } from "quasar";
import router from "./routes/routes.js";
import axios from "axios";

axios.defaults.baseURL = "https://backend-dji.onrender.com";

const pinia = createPinia();
const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: { Notify }
});

myApp.use(router);
myApp.use(pinia);
myApp.mount("#app");
