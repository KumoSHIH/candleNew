import axios from 'axios'

export default ({
  namespaced: true,
  state: {
    products: [],
    categories: []
  },
  actions: {
    getProduct (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then((response) => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('CATEGORIES', response.data.products)
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    },
    CATEGORIES (state, payload) {
      const list = new Set()
      payload.forEach((item) => {
        list.add(item.category)
      })
      state.categories = Array.from(list)
    }
  },
  getters: {
    categories: state => state.categories,
    products: state => state.products
  }
})
