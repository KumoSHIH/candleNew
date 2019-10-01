<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mt-md-4">
      <thead>
        <tr>
          <th class="d-none d-lg-block">訂單編號</th>
          <th width="50%">購買項目</th>
          <th class="d-none d-md-block">購買時間</th>
          <th>姓名</th>
          <th width="120" class="title" @click="isReverse = !isReverse, value = 'total'">應付金額
            <span class="icon isReverse" :class="{'rotate': isReverse}" v-if="value === 'total'">
              <i class=" fas fa-angle-up text-info ml-1"></i>
            </span>
          </th>
          <th width="120" class="title" @click="isReverse = !isReverse, value = 'is_paid'">是否付款
            <span class="icon isReverse" :class="{'rotate': isReverse}" v-if="value === 'is_paid'">
              <i class=" fas fa-angle-up text-info ml-1"></i>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filterArray" :key="item.id">
          <td class="d-none d-lg-block">{{ item.id }}</td>
          <td>
            <li v-for="item in item.products" :key="item.id" class="list-unstyled">
              {{ item.product.title }} {{ item.qty }} {{ item.product.unit }}
            </li>
          </td>
          <td class="d-none d-md-block">{{ item.create_at | date}}</td>
          <td>
            <span v-text="item.user.name" v-if="item.user"></span>
          </td>
          <td class="text-right">{{ item.total |currency}}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已經付款</span>
            <span v-else class="text-danger">尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pageNum="pagination" @getPage="getOrders" ></Pagination>
  </div>
</template>

<style lang="scss" scoped>
  .title{
    cursor: pointer;
    &:hover{
      color: #17a2b8;
    }
  }
  .icon{
    display: inline-block;
    transition: .3s;
  }
  .icon.rotate{
    transform: rotate(180deg);
  }
  .counter{
    width: 25px;
    height: 25px;
    background-color: #fff;
    border: solid 1px gray;
    &:hover,:focus{
      background-color: rgb(221, 221, 221);
    }
  }
  .counterInput{
    width: 30px;
    height: 25px;
  }
</style>

<script>
import $ from 'jquery'
import Pagination from '../../components/Pagination'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      isLoading: false,
      pagination: {},
      orders: [],
      tempOrder: {},
      tempProduct: {
        product: {}
      },
      value: '',
      isReverse: false
    }
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        // console.log(response.data);
        vm.isLoading = false
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
        console.log(vm.orders)
      })
    },
    editOrder (item) {
      const vm = this
      $('#editOrderModal').modal('show')
      vm.tempOrder = Object.assign({}, item)
      vm.tempProduct = Object.assign({}, item.products)
      console.log(vm.tempOrder)
      console.log(vm.tempProduct)
    },
    updateOrder (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${id}`
      this.$http.put(api, { data: vm.tempOrder }).then(response => {
        // console.log(response.data);
        vm.isLoading = false
        if (response.data.success) {
          $('#editOrderModal').modal('hide')
        }
      })
    }
  },
  computed: {
    filterArray () {
      const vm = this
      let newArray = vm.orders.sort((a, b) => {
        a = a[vm.value]
        b = b[vm.value]
        if (vm.isReverse === true) {
          return a - b
        } else {
          return b - a
        }
      })
      return newArray
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
