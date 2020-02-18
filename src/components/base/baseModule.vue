<template>
  <div class="baseModuleContainer">
      <div class="moduleTopic">
        热门板块
      </div>
      <div class="moduleContent">
          <span>COS</span>
          <span>游戏</span>
          <span>番剧</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.baseModuleContainer{
    margin-left: 16px;
    flex: 1;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    margin-top: 12px;
}
.moduleTopic{
    padding-left: 15px;
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    color: #333333;
    border-bottom: 1px solid rgb(223, 215, 215);
}
.moduleContent{
    display: flex;
    height: 48px;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
}
.moduleContent span {
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #999;
}
</style>