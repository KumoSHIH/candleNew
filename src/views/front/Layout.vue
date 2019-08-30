<template>
  <div>
    <loading :active.sync="isLoading" :is-full-page="true">
        <CandleLoading/>
    </loading>
    <Alert/>
    <Nav/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import { mapGetters } from 'vuex'
export default {
  components: {
    Nav,
    Footer
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('alertModules', ['messages'])
  }
}
</script>
