import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat'
import VueSocketIO from 'vue-socket.io'

Vue.use(VueSocketIO, 'http://localhost:3000')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    }
  ]
})
