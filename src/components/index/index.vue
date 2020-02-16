<template>
  <div class="indexContainer">
    <el-carousel :interval="7000" height="400px" arrow="always">
      <el-carousel-item v-for="item in imgData" :key="item">
          <img :src='item' style="width:100%" mode="widthFix">
      </el-carousel-item>
    </el-carousel>
    <shop-nav></shop-nav>
  </div>
</template>

<script>
import shopNav from './shopNav'
import {ref} from '@vue/composition-api'
export default {
    data(){
        return {
            // imgUrl:require('../../../static/1.jpg')
        }
    },
    setup(){
        const imgData = ref([
                require("../../assets/1.jpg"),
                require("../../assets/2.jpg"),
                require("../../assets/3.jpg"),
                require("../../assets/4.jpg")]);
        return {
            imgData
        }
    },
    components:{
        'shop-nav':shopNav
    }
};
</script>

<style>
.indexContainer {
  min-width: 1000px;
  margin-top: 15px;
  padding: 0 280px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
</style>