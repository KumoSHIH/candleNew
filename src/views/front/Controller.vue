<template>
  <div>
    <Nav/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-md-5 shadow formTop">
          <h3 class="text-center text-main pt-5">管理員登入</h3>
          <div class="form-group px-4">
            <label for="user">帳號</label>
            <input type="text" class="form-control" id="user" placeholder="abc@email.com"
            v-model="user.username">
          </div>
          <div class="form-group px-4">
            <label for="password">密碼</label>
            <input type="password" class="form-control" id="password"
            v-model="user.password">
          </div>
          <div class="form-group px-4">
            <button class="btn btn-outline-second bg-white form-control my-4"
            @click.prevent="signIn" @keyup.enter="signIn">登入</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgImg{
  background-color: lighten(#95adbe, 25%);
}
.shadow{
  box-shadow: 4px 5px 5px 4px rgba( 0, 0, 0, .8);
  border-radius: 5px;
  opacity: .9;
}
.formTop{
  margin-top: 250px;
  background-color: lighten(#95adbe, 25%);
}
@media(max-width: 480px){
  .formTop{
    margin-top: 200px;
  }
}
@media(max-width: 321px){
  .formTop{
    margin-top: 100px;
  }
}
</style>

<script>
import Nav from '@/components/Nav'
export default {
  components: {
    Nav
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      const vm = this
      this.$http.post(api, vm.user).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/admin/products')
        }
      })
    }
  }
}
</script>
