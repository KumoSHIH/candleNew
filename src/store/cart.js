import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cart: [],
    cartLength: 0
  },
  actions: {
    getCart (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data)
        context.commit('CART_LENGTH', response.data.data.carts.length)
        context.commit('LOADING', false, { root: true })
      })
    },
    addCart (context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      context.commit('LOADING', true, { root: true })
      axios.post(api, { data: cart }).then((response) => {
        context.dispatch('getCart')
        context.dispatch('alertModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true })
        context.commit('LOADING', false, { root: true })
      })
    },
    delCart (context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('LOADING', true, { root: true })
      axios.delete(api).then((response) => {
        context.dispatch('alertModules/updateMessage', { message: '已刪除商品', status: 'danger' }, { root: true })
        context.dispatch('getCart')
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    CART (state, payload) {
      state.cart = payload
    },
    CART_LENGTH (state, payload) {
      state.cartLength = payload
    }
  },
  getters: {
    cart: state => state.cart,
    cartLength: state => state.cartLength
  }
}
