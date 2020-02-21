<template>
  <div id="app">
    <nav-bar @getNavIndex="getNavIndex"></nav-bar>
    <div v-if="navIndex==1" style="min-height: 700px"><index></index></div>
    <div v-if="navIndex==2" style="min-height: 700px"><base-view></base-view></div>
    <div v-if="navIndex==5" style="min-height: 700px"><shoppingCart></shoppingCart></div>
    <bottom></bottom>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import navBar from "./components/navBar/navBar";
import index from "./components/index/index";
import bottom from "./components/bottom/bottom";
import shoppingCart from './components/shoppingCart/shoppingCart'
import baseView from './components/base/base'
export default {
  setup() {
    const navIndex = ref(1);
    const getNavIndex = value => {
      navIndex.value = value;
    };
    return {
      navIndex,
      getNavIndex
    };
  },
  methods: {
    
  },
  name: "app",
  components: {
    navBar,
    index,
    bottom,
    shoppingCart,
    baseView
  }
};
</script>

<style>
body,
div,
ol,
ul,
li,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
p,
form,
fieldset,
legend,
input {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}
input {
  outline-color: invert;
  outline-style: none;
  outline-width: 0px;
  border: none;
  border-style: none;
  text-shadow: none;
  -webkit-appearance: none;
  -webkit-user-select: text;
  outline-color: transparent;
  box-shadow: none;
}
img {
  -webkit-user-drag: none;
}
body {
  background-color: #fafafa;
  color: #101010;
}
</style>
