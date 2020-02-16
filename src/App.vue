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
body,div,ol,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,form,fieldset,legend,input{ margin:0; padding:0;}

	h1,h2,h3,h4,h5,h6{ font-size:100%; font-weight:normal;}

	ol,ul{ list-style:none;}
	
	a{
		text-decoration: none;
		color: #000;
  }
  input{
    outline-color: invert ;
    outline-style: none ;
    outline-width: 0px ;
    border: none ;
    border-style: none ;
    text-shadow: none ;
    -webkit-appearance: none ;
    -webkit-user-select: text ;
    outline-color: transparent ;
    box-shadow: none;
  }
</style>
