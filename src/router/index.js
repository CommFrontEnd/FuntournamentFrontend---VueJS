import Vue from 'vue'
import Router from 'vue-router'
import Counter from 'components/Counter'
import Register from 'components/Register'
import Login from 'components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
