<template>
  <div class="listWrap">
    <loading :active.sync="isLoading" :is-full-page="true">
        <CandleLoading/>
    </loading>
    <div class="container py-md-5">
      <div class="row justify-content-center py-5">
        <div class="col-12 col-md-10 mt-5 mt-md-0 py-md-5">
          <ul class="d-flex justify-content-between">
            <li>
              <a href="#" class="list list-item"
              @click.prevent="listItem = ''"
              :class="{'active': listItem === ''}">全部商品</a>
            </li>
            <li v-for="item in categories" :key="item">
              <a href="#" class="list list-item"
              @click.prevent="listItem = item"
              :class="{'active': item === listItem}"
              >{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-10">
          <div class="form-row justify-content-center justify-content-md-start mt-4 mt-md-0 mb-4">
            <div class="col-10 col-md-4 mb-4 mb-md-0" v-for="item in filterData" :key="item.id">
              <Card :card-item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listWrap{
  min-height: calc(100vh - 280px);
}
@media (max-width: 768px){
  h2{
    margin-top: 100px;
  }
}
@media (max-width: 480px){
  .banner{
    height: 0px;
  }
}
//side Menu
  ul{
    top: 70px;
    list-style: none;
    padding: 0;
  }
  .list{
    display: block;
    padding: 10px 40px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    letter-spacing: 1.5px;
    border: solid 1px #EDEDED;
  }
  .list-item{
    color: #000;
    cursor: pointer;
    transition: .2s;
    &:hover,&:active{
      background-color: lighten(#95adbe, 10%);
      color: #574f7d;
    }
  }
  .active{
    background-color: lighten(#95adbe, 10%);
    color: #fff;
  }
@media (max-width: 480px){
  ul{
    top: 20px;
  }
  .list{
    padding: 10px 10px;
    writing-mode: vertical-lr;
  }
}
// pagination bs4
  .page-link{
    color: #574f7d;
    border: solid 2px #574f7d;
  }
  .page-item:last-child .page-link{
    border-radius: 0;
  }
  .page-item:first-child .page-link{
    border-radius: 0;
  }
  .activePage{
    //background-color: #574f7d;
    color: #fff;
  }
</style>

<script>
import Card from '../../components/Card'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Card
  },
  data () {
    return {
      listItem: ''
    }
  },
  methods: {
    getParams () {
      if (this.$route.query.category) {
        this.listItem = this.$route.query.category
      }
    },
    ...mapActions('productsModules', ['getProduct'])
  },
  computed: {
    filterData () {
      const vm = this
      if (vm.listItem) {
        return vm.products.filter((item) => {
          const data = item.category.toLowerCase().includes(vm.listItem.toLowerCase())
          return data
        })
      }
      return vm.products
    },
    ...mapGetters('productsModules', ['categories', 'products']),
    ...mapGetters(['isLoading'])
  },
  created () {
    this.getParams()
    this.getProduct()
  }
}
</script>
