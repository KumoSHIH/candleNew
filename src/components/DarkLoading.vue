<template>
  <div>
    <div class="wrap">
      <div class="box2 blockRight"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.wrap{
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.box2{
  width: 100%;
  height: 100vh;
  background-color: #574f7d;
}
.blockRight{
  position: absolute;
  right: 100%;
  z-index: 100;
  animation: right .8s ease-in-out;
}
@keyframes right{
  0%{
    right: 0;
  }
  50%{
    right: 50%;
  }
  100%{
    right: 100%;
  }
}
</style>