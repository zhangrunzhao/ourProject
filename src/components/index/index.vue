<template>
  <div class="indexContainer">
    <div v-if="status=='index'">
      <el-carousel class="el_carousel" :interval="7000" height="400px" arrow="always">
        <el-carousel-item v-for="item in imgData" :key="item">
          <img :src="item" style="width:100%" mode="widthFix" />
        </el-carousel-item>
      </el-carousel>
      <shop-nav></shop-nav>
      <search-card></search-card>
      <shop-content @gotoDetail="gotoDetail"></shop-content>
    </div>
    <div v-if="status=='details'">
        <detail-view></detail-view>
    </div>
    
  </div>
</template>

<script>
import shopContent from "./shopContent";
import searchCard from "./searchCard";
import shopNav from "./shopNav";
import detailView from './detailView/detail'
import { ref } from "@vue/composition-api";
export default {
  setup() {
    var status = ref("index");
    const imgData = ref([
      require("../../assets/1.jpg"),
      require("../../assets/2.jpg"),
      require("../../assets/3.jpg"),
      require("../../assets/4.jpg")
    ]);
    const gotoDetail = item => {
      status.value = "details";
    };
    return {
      imgData,
      gotoDetail,
      status
    };
  },
  components: {
    shopNav,
    searchCard,
    shopContent,
    detailView
  }
};
</script>

<style>
.indexContainer {
  min-width: 900px;
  margin-top: 15px;
  padding: 0 280px;
}
.el_carousel {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>