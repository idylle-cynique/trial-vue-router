import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Private from '../views/Private.vue'
import User from '../views/User.vue'
import FirstChild from '../views/user/FirstChild.vue'
import SecondChild from '../views/user/SecondChild.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => About
    },
    {
      path: '/private',
      name: 'private',
      component: Private,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: [
        { path: 'first', name: 'first', component: FirstChild},
        { path: 'second', name: 'second', component: SecondChild},
      ]
    },
    {
      path: '/error404',
      name: 'notfound',
      component: NotFound
    },
    {
      path:'/:catchAll(.*)',
      redirect: 'error404',
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router