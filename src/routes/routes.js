import { createRouter, createWebHashHistory } from "vue-router";
import DjiT from "../components/DjiTelemetry.vue";

const routes = [
  { path: "/djit", component: DjiT } // Se corrigió el path (debe empezar con "/")
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
