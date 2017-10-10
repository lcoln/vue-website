<template>
  <div id="app">
    <div id="fullPage">
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import vue from 'vue'

export default {
  name: 'app',
  mounted: function(){
    var fullpage = (require('./components/fullscreen-scroll/main.js')).default
    fullpage.init('fullPage', 'page', '.4')
    console.log(fullpage);
  },
  components: {
    Hello
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{margin: 0;padding: 0}
body,html{width: 100%;height: 100%}
a{text-decoration: none;}
#fullPage{width: 100%;height: 100%;background: #ddd;}
#fullPage .page{width: 100%;height: 100%;background: #bbb;}
#fullPage .page:nth-of-type(1){background: #182327}
#fullPage .page:nth-of-type(2){background: #132C33}
#fullPage .page:nth-of-type(3){background: #F9F9F9}
#fullPage .page:nth-of-type(4){background: #015E7F}
#fullPage .page:nth-of-type(5){background: #2D363F}
</style>
