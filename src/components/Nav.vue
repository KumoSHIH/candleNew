<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-main">
      <router-link to="/home">
        <img src="../assets/images/logo_light.png" class="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-light"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/list">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bulletin">The News</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              Shopping Cart
              <div class="badge badge-light">{{ cartLength }}</div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/controller">Controller</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar{
  position: absolute;
  width: 100%;
  z-index: 99;
  margin-top: 0px;
}
.nav{
  position: absolute;
  width: 100%;
  z-index: 99;
}
.nav-item a{
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 1.5px;
  color: #000;
  &:hover{
    color: lighten(#000, 30%);
  }
}
@media(max-width:480px){
  .navbar{
    position: fixed;
  }
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      message: {}
    }
  },
  methods: {
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('cartModules', ['cart', 'cartLength'])
  },
  created () {
    this.$store.dispatch('cartModules/getCart')
  }
}
</script>
