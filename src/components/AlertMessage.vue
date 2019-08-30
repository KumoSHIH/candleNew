<template>
  <div class="message-alert">
      <div class="candle-alert alert-dismissible"
        :class="'alert-' + item.status"
        v-for="(item, i) in messages" :key="i">
          <i class="far fa-check-circle"></i>
          <span class="d-block mt-3">{{ item.message }}</span>
          <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .message-alert{
    position: fixed;
    max-width: 100vw;
    top: 40%;
    right: 50%;
    transform: translate(50%);
    z-index: 1100;
  }
  .candle-alert{
    width: 300px;
    height: 150px;
    border-radius: 10px;
    background-color: lighten(#95adbe,25%);
    text-align: center;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.4);
    .fa-check-circle{
      font-size: 50px;
      text-align: center;
      margin-top: 10%;
    }
  }
  //bs4
  .alert-dismissible {
    padding-right: 0;
  // Adjust close link position
  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    color: inherit;
  }
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('alertModules', ['messages'])
  },
  methods: {
    updateMessage (message, status) {
      this.$store.dispatch('alertModules/updateMessage', { message, status })
    },
    ...mapActions('alertModules', ['removeMessage', 'removeMessageWithTiming'])
  }
}
</script>
