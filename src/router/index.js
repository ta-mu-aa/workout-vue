import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Login from '../views/Login.vue'
import signIn from '../views/signIn.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/:training_id?/edit',
    name:'Form',
    component: Form,
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/signIn',
    name:'signIn',
    component:signIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
