import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "./index.css";

const app = createApp(App);
app.use(PrimeVue, {
  theme: "none",
});
app.mount("#app");
