import Vue from "vue";
import { useRouter } from "vue-router";


import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/users",
      name: "users",
      component: () => import("./views/UsersList.vue"),
    },
    {
      path: "/users/:id",
      name: "tutorial-details",
      component: () => import("./views/Users.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./views/AddUsers.vue"),
    },
  ],
})
