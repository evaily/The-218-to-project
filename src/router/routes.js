import Msite from '../pages/Msite/Msite'
import Systematic from '../pages/Systematic/Systematic.vue'
import GoodShopping from '../pages/GoodShopping/GoodShopping.vue'
import ShoppingCar from '../pages/ShoppingCar/ShoppingCar.vue'
import Personal from '../pages/Personal/Personal.vue'


export default [
  // {
  //   path: '路由路径',
  //   component: 路由组件
  // }
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/systematic',
    component: Systematic,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/goodshopping',
    component: GoodShopping,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shoppingcar',
    component: ShoppingCar,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
