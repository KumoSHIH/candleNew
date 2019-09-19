<template>
  <div>
    <Navbar/>
    <Alert/>
    <div class="container">
      <div class="row justify-content-center">
        <main role="main" class="col-12 col-md-9 col-lg-12 px-1 mt-2 mt-md-5">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Alert from './AlertMessage'
export default {
  components: {
    Navbar,
    Sidebar,
    Alert
  }
}
</script>
