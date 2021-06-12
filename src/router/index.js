import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Resume from '@/views/Resume'
import Admin from "@/views/Admin";
import Console from "@/views/Console";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/Console',
    name: 'Consol',
    component: Console
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
