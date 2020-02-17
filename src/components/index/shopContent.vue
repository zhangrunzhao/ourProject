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
import {ref,provide} from '@vue/composition-api'
export default {
    setup(){
        const listData = ref([2,3,4,5,6]);
        provide("listData",listData);
        return {
            listData
        }
    },
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