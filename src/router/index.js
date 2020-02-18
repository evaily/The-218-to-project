import vue from 'vue'
import VueRouter from 'vue-router'

import routers from './router'

vue.use(VueRouter)

const router = new VueRouter({
    routes
  })
  
export default router