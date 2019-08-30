<template>
  <div>
    <ul class="nav proNav d-md-flex justify-content-end align-items-center d-none d-md-block">
      <li class="nav-item ">
        <router-link class="nav-link" to="/list">全部商品</router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="goItem('大豆蠟燭')">大豆蠟燭</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="goItem('果凍蠟燭')">果凍蠟燭</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="goItem('創意蠟燭')">創意蠟燭</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="goItem('香氛蠟燭')">香氛蠟燭</a>
      </li>
      <li class="nav-item mr-4">
        <a href="#" class="nav-link" @click.prevent="goItem('新品上市')">新品上市</a>
      </li>
    </ul>
    <div class="humbuger row d-md-none no-gutters">
      <nav class="col-12 navbar navbar-dark bg-dark" data-toggle="collapse" data-target="#navbarToggle">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div class="col-12 collapse" id="navbarToggle">
        <li class="nav-item bg-second ">
          <router-link class="nav-link" to="/list">全部商品</router-link>
        </li>
        <li class="nav-item bg-second">
          <a href="#" class="nav-link" @click.prevent="goItem('大豆蠟燭')">大豆蠟燭</a>
        </li>
        <li class="nav-item bg-second">
          <a href="#" class="nav-link" @click.prevent="goItem('果凍蠟燭')">果凍蠟燭</a>
        </li>
        <li class="nav-item bg-second">
          <a href="#" class="nav-link" @click.prevent="goItem('創意蠟燭')">創意蠟燭</a>
        </li>
        <li class="nav-item bg-second">
          <a href="#" class="nav-link" @click.prevent="goItem('香氛蠟燭')">香氛蠟燭</a>
        </li>
        <li class="nav-item bg-second">
          <a href="#" class="nav-link" @click.prevent="goItem('新品上市')">新品上市</a>
        </li>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .proNav{
    position: fixed;
    top: 53px;
    width: 100%;
    height: 55px;
    background-color: #000;
    z-index: 99;
    opacity: .7;
    transition: .2s;
    &:hover{
      opacity: 1;
    }
    .nav-link{
      float: left;
      width: 120px;
      height: 30px;
      text-align: center;
      color: #fff;
      transition: .2s;
    }
    .nav-link::after{
      content:'';
      display: block;
      clear: both;
      width: 0%;
      border-bottom: solid 2px #fdef96;
      margin: auto;
      position: relative;
      top: 5px;
      transition: .3s;
    }
    .nav-link:hover::after{
      width: 100%;
    }
  }
  .navHide{
    opacity: .5;
  }
  @media(max-width: 768px){
    .humbuger{
      position: fixed;
      top: 99px;
      width: 100%;
      z-index: 99;
      li{
        list-style: none;
        border-bottom: solid 1px rgba(255,255,255,.6);
      }
      a{
        text-decoration: none;
        text-align: center;
        letter-spacing: 1.5px;
        font-weight: bold;
        color: #574f7d;
        &:hover,&:active,&:focus{
          color: #fff;
        }
      }
    }
  }
</style>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goItem (title) {
      const vm = this
      vm.$router.push({ path: '/list', query: { category: title } })
    }
  }
}
</script>
