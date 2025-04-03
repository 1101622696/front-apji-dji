import { createRouter, createWebHashHistory } from "vue-router";

import DjiT from "../components/DjiTelemetry.vue";
import axios from "axios";



const routes = [
  { path: "DjiT", component: DjiT, meta }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const useUsuario = useStoreUsuarios();
  const userRole = useUsuario.role;

  if (to.meta.roles && !to.meta.roles.includes(userRole)) {
    next('/');
  } else {
    next();
  }
});

export default router;
