<template>
  <div class="box">
    <!-- <div class="p404">
        404
    </div> -->
    <div class="img">
        <img src="@/assets/img/404.png" alt="">
    </div>
    <div class="text">
        此页面未找到......
    </div>
    
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.box {
  color: $DIANQING;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .p404{
    font-size: 80px;
  }
  .img{
    width: 500px;
    height: 500px;
    overflow: hidden;

    img{
        width: 100%;
    }
  }
  .text{
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 40px;
  }
}
</style>