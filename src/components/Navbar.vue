<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-main mt-0">
      <h6 class="navbar-brand" href="#">後台管理</h6>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"><i class="fas fa-th mr-1"></i>產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders"><i class="fas fa-file-alt mr-2"></i>訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon"><i class="fas fa-ticket-alt mr-1"></i>優惠券</router-link>
          </li>
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#" @click.prevent="signOut">登出</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signOut () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      this.$http.post(api).then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          vm.$router.push('/login') // 成功登出回到登入
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar h6{
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  .navbar-brand{
    background-color: transparent;
    box-shadow: initial;
  }
</style>
