<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from './components/navBar/navBar'
export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>

<style>
*{
    margin:0;
    padding:0
}
li{
    list-style:none
}
img{
    vertical-align:top;
    border:none
}
</style>
