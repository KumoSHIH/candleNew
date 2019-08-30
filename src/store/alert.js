
export default ({
  namespaced: true,
  state: {
    messages: []
  },
  actions: {
    updateMessage (context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000)
      context.commit('PUSH_MSG', {
        message,
        status,
        timestamp
      })
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessage (context) {
      context.commit('REMOVE_MSG')
    },
    removeMessageWithTiming (context, timestamp) {
      const msg = [...context.state.messages]
      setTimeout(() => {
        msg.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.commit('REMOVE_MSG', i)
          }
        })
      }, 2000)
    }
  },
  mutations: {
    PUSH_MSG (state, msg) {
      state.messages.push(msg)
    },
    REMOVE_MSG (state, num) {
      state.messages.splice(num, 1)
    }
  },
  getters: {
    messages: state => state.messages
  }
})
