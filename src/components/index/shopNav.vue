<template>
  <div class="shopNavContainer">
    <div class="itemBox">
      <div class="shopNavItem onSelect" v-for="(item,index) in navItem" :key="index">
          <div>{{item}}</div>
      </div>
    </div>
    <div class="content">
      <span class="sort">分类：</span>
      <span class="contentItem">比例手办</span>
      <span class="contentItem">Q版手办</span>
      <span class="contentItem">可动手办</span>
      <span class="contentItem">手办配件</span>
      <span class="contentItem">玩偶</span>
    </div>
  </div>
</template>

<script>
import {ref} from '@vue/composition-api'
export default {
    setup(){
        const navItem = ref(["手办","扭蛋潮玩","模型","周边","演出","服饰背包"])
        return {
            navItem
        };
    }
};
</script>

<style>
.shopNavContainer {
  height: 100px;
  width: 100%;
  margin-top: 8px;
  background-color: #ffffff;
}
.itemBox {
  display: flex;
}
.shopNavItem {
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ffb432;
  font-size: 0.9em;
  font-weight: 550;
}
.content {
  height: 50px;
  display: flex;
  align-items: center;
  font-size:  0.9em;
  color: #999999;
}
.onSelect{
    background-color: #ffb432;
    color: #ffffff; 
}
.sort {
  letter-spacing: 1px;
  padding-left: 22px;
  padding-right: 15px;
}
.contentItem{
    margin-right: 40px;
}
</style>