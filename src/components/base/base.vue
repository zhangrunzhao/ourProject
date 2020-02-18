<template>
  <div class="baseContainer">
    <el-carousel class="el_carousel" :interval="7000" height="400px" arrow="always">
      <el-carousel-item v-for="item in imgData" :key="item">
        <img :src="item" style="width:100%" mode="widthFix" />
      </el-carousel-item>
    </el-carousel>
    <base-nav></base-nav>
  </div>
</template>

<script>
import baseNav from './baseNav'
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const imgData = ref([
      require("../../assets/1.jpg"),
      require("../../assets/2.jpg"),
      require("../../assets/3.jpg"),
      require("../../assets/4.jpg")
    ]);
    return {
      imgData
    };
  },
  components: {
    baseNav
  }
};
</script>
    
<style>
.baseContainer {
  min-width: 900px;
  margin-top: 15px;
  padding: 0 280px;
}
.el_carousel {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>