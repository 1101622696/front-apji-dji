import { createRouter, createWebHashHistory } from "vue-router";
import DjiTelemetry from "../components/DjiTelemetry.vue";

const routes = [
  { path: "/", component: DjiTelemetry } // Asegúrate de que el path es "/" si es la página principal
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
