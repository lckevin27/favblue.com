import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'

import HomeCN from '../views/cn/HomeCN.vue'
import AboutCN from '../views/cn/AboutCN.vue'
import InsightfulFrontEndCN from '../views/cn/InsightfulFrontEndCN'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/ife',
    name: 'InsightfulFrontEndCN',
    component: InsightfulFrontEndCN,
    meta: {
      title: '洞察前端'
    }
  },
  {
    path: '/cn',
    name: 'HomeCN',
    component: HomeCN
  },
  {
    path: '/cn/about',
    name: 'AboutCN',
    component: AboutCN,
    meta: {
      title: '关于'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
