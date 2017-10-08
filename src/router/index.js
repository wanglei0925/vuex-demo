import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import two from '@/components/two'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/two',
      component: two
    },
    {
      path: '/one',
      component: Hello
    }
  ]
})
