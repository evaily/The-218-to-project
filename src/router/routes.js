import Msite from '../pages/Msite/Msite'
import Systematic from '../pages/Systematic/Systematic'
import GoodShopping from '../pages/GoodShopping/GoodShopping'
import ShoppingCar from '../pages/ShoppingCar/ShoppingCar'
import Personal from '../pages/Personal/Personal'
import tuijian from '../pages/MsiteContent/tuijian'


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
    },
    children: [
      {
        path: 'tuijian',
        component: tuijian,
        meta: {
          isShowFooter: true
        }
      },
     /*  {
        path: '/msite',
        redirect: '/msite/tuijian'
      } */
    ]
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
