import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.path === '/bulletin' && to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/front/Home.vue')
    },
    {
      path: '/',
      name: 'Layout',
      component: () => import('./views/front/Layout.vue'),
      children:
      [
        {
          path: 'list',
          name: 'List',
          component: () => import('./views/front/List.vue')
        },
        {
          path: 'item_page/:itemID',
          name: 'ItemPage',
          component: () => import('./views/front/ItemPage.vue')
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('./views/front/Cart.vue')
        },
        {
          path: 'cart_address',
          name: 'CartAddress',
          component: () => import('./views/front/CartAddress.vue')
        },
        {
          path: 'cart_pay/:orderID',
          name: 'CartPay',
          component: () => import('./views/front/CartPay.vue')
        },
        {
          path: 'cart_fin',
          name: 'CartFin',
          component: () => import('./views/front/CartFin.vue')
        },
        {
          path: 'bulletin',
          name: 'Bulletin',
          component: () => import('./views/front/Bulletin.vue')
        }
      ]
    },
    {
      path: '/controller',
      name: 'Controller',
      component: () => import('./views/front/Controller.vue')
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./components/Dashboard.vue'),
      children:
      [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/back/Products.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('./views/back/Orders.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('./views/back/Coupon.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./components/Dashboard.vue'),
      children:
      [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: () => import('./views/back/CustomerOrders.vue')
        },
        {
          path: 'customer_checkout/:orderID',
          name: 'CustomerCheckout',
          component: () => import('./views/back/CustomerCheckout.vue')
        }
      ]
    }
  ]
})
