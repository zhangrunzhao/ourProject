<template>
  <div class="shopCardContainer">
      <div class="imgBox">
        <img src="../../assets/3.jpg" alt="">
      </div>
      <div class="shopDescribe">
        <div class="goodName">【现货】机甲少女-诺赛提亚</div>
        <span class="goodPrice">
            239元
        </span>
        <div class="goodStatus">
            <span>预售</span>
            <span>跨境购</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.shopCardContainer{
    width: 232px;
    height: 310px;
    background-color: #ffffff;
    padding: 7px;
    box-sizing: border-box;
    margin-bottom: 12px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
.imgBox{
    overflow: hidden;
}
.shopCardContainer img {
    max-height: 220px;
}
.shopDescribe{
    height: 75px;
    padding: 5px 0;
    padding-left: 3px;
    box-sizing: border-box;
}
.goodName{
    font-size: 14px;
    margin-bottom: 7px;
}
.goodPrice{
    font-size: 11px;
    margin-left: 8px;
    background-color: #FF732A;
    color: #ffffff;
    padding: 2px 3px;
    border-radius: 3px;
}
.goodStatus{
    font-size: 10px;
    margin-left: 8px;
    margin-top: 8px;
    color: #AEAEAE;
}
.goodStatus span {
    margin-right: 15px;
}
</style>