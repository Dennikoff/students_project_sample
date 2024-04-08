import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/info",
      name: "info",
      component: () => import("@/views/info.vue"),
    },
  ],
});
  
export default router;