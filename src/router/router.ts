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
      component: () => import("./components/UsersList")
    },
    {
      path: "/users/:id",
      name: "tutorial-details",
      component: () => import("./components/Users")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddUsers")
    }
  ],
})
