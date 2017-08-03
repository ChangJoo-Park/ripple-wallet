import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'no-wallet-page',
      component: require('@/components/pages/NoWallet')
    }
  ]
})
