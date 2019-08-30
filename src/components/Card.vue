<template>
  <div>
    <div class="card h-100 border-0 mb-3">
      <div class="img-top"
      @click="itemPage(cardItem.id)"
      :style="{ backgroundImage: `url(${cardItem.imageUrl})` }"><div class="mask"></div></div>
      <div class="card-body">
        <span class="badge badge-pill badge-main float-right p-2">{{cardItem.category}}</span>
        <h5 class="card-title">{{cardItem.title}}</h5>
        <div class="d-flex justify-content-between align-items-baseline mt-3">
          <h6 class="">NT{{cardItem.price | currency}}</h6>
          <button class="btnCart" @click="addCart(cardItem.id,cardItem.qty)">
            <i class="fas fa-shopping-cart "></i>
          </button>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// card
  .img-top{
    height: 150px;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .img-top:hover .mask{
    top: 0;
    &:after{
      content: '查看商品細節';
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      border: solid 2px #fff;
      padding: 5px 10px;
    }
  }
  .mask{
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    height: 150px;
    background-color: rgba(0,0,0,.5);
    transition: .3s;
  }
  .card-body{
    border: solid 1px #EDEDED;
  }
  .card-footer{
    background-color: #fff;
    border-top: 0;
  }
  .btnCart{
    border: 0;
    color: #574f7d;
    background-color: transparent;
    font-size: 20px;
    transition: .3s;
    &:hover{
      color: lighten(#574f7d, 20%);
    }
  }
</style>

<script>
export default {
  props: ['cardItem'],
  methods: {
    addCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addCart', { id, qty })
    },
    itemPage (id) {
      const vm = this
      vm.$router.push(`item_page/${id}`)
    }
  }
}
</script>
