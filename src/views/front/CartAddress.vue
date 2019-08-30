<template>
  <div>
    <div class="container pt-md-5">
      <div class="row justify-content-center no-gutters py-md-4">
        <div class="col-md-7 mt-5">
          <h2 class="text-center text-main mt-5 mt-md-0"><strong>運送</strong></h2>
          <div class="step-wrap d-flex justify-content-between mt-4">
            <div class="step1"></div>
            <div class="point"></div>
            <div class="point"></div>
          </div>
        </div>
          <form class="mt-5">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="username">收件人姓名</label>
                  <input type="text" class="form-control" name="name" id="username" placeholder="輸入姓名"
                  v-model="form.user.name"
                  v-validate="'required'"
                  :class="{'is-invalid': errors.has('name')}">
                  <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
                </div>

                <div class="form-group">
                  <label for="useremail">Email</label>
                  <input type="email" class="form-control" name="email" id="useremail" placeholder="請輸入 Email"
                  v-model="form.user.email"
                  v-validate="'required'"
                  :class="{'is-invalid': errors.has('email')}">
                  <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="usertel">收件人電話</label>
                  <input type="tel" class="form-control" id="usertel" name="tel" placeholder="請輸入電話"
                  v-model="form.user.tel"
                  v-validate="'required'"
                  :class="{'is-invalid': errors.has('tel')}">
                  <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
                </div>
                <div class="form-group">
                  <label for="useraddress">收件人地址</label>
                  <input type="text" class="form-control" name="address" id="useraddress" placeholder="請輸入地址"
                  v-model="form.user.address"
                  v-validate="'required'"
                  :class="{'is-invalid': errors.has('address')}">
                  <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="comment">留言</label>
                  <textarea name="" id="comment" class="form-control" cols="20" rows="5"
                  v-model="form.message"></textarea>
                  <button class="col btn btn-main my-5" @click.prevent="createOrder">送出訂單</button>
                </div>
              </div>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  label{
    color: #574f7d;
    font-weight: bold;
    font-size: 16px;
  }
</style>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    createOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.$store.dispatch('updateLoading', true, { root: true })
      vm.$validator.validate().then((valid) => {
        if (valid) {
          vm.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/cart_pay/${response.data.orderId}`)
              vm.$store.dispatch('updateLoading', false, { root: true })
            }
          })
        } else {
          vm.$store.dispatch('updateLoading', false, { root: true })
          alert('欄位不完整')
        }
      })
    }
  }
}
</script>
