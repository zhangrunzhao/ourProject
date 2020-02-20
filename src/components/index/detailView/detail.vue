<template>
  <div class="detailViewContainer">
      <flow-path></flow-path>
      <shop-detail></shop-detail>
      <div class="recommendBox">
          <shop-recommend></shop-recommend>
          <goods-content></goods-content>
      </div>
      
  </div>
</template>

<script>
import shopRecommend from './shopRecommend'
import flowPath from './flowPath'
import shopDetail from './shopDetailView'
import goodsContent from './goodsContent'
export default {
  components:{
    flowPath,
    shopDetail,
    shopRecommend,
    goodsContent
  }
}
</script>

<style>
.detailViewContainer{
    width: 100%;
    -webkit-user-select: none;
}
.recommendBox{
  margin-top: 29px;
  display: flex;
  
}
</style>