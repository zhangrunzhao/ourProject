<template>
  <div class="shopContentContainer">
      <shop-card></shop-card>
      <shop-card></shop-card>
      <shop-card></shop-card>
      <shop-card></shop-card>
      <shop-card></shop-card>
      <shop-card></shop-card>
      <shop-card></shop-card>
      <shop-card style="visibility: hidden"></shop-card>
      <pagination></pagination>
  </div>
</template>

<script>
import shopCard from './shopCard'
import pagination from './pagination'
export default {
    components:{
        shopCard,
        pagination
    }
}
</script>

<style>
    .shopContentContainer{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        
    }
</style>