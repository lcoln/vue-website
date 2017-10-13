<template>
    <div id="app">
        <div id="fullPage">
            <section class="page page1">
                <div class="content"></div>
            </section>
            <section class="page"></section>
            <section class="page"></section>
            <section class="page"></section>
            <section class="page"></section>
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
    var hover = (require('./components/pointer-hover-slider/main.js')).default
    console.log(hover);
  },
  components: {
    Hello
  },
}
</script>

<style lang="sass">
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
#fullPage .page{width: 100%;height: 100%;background: #bbb;
    &.page1 .content{width: 500px;height: 400px;border: 5px solid #ddd;}
}
#fullPage .page:nth-of-type(1){background: #182327}
#fullPage .page:nth-of-type(2){background: #132C33}
#fullPage .page:nth-of-type(3){background: #F9F9F9}
#fullPage .page:nth-of-type(4){background: #015E7F}
#fullPage .page:nth-of-type(5){background: #2D363F}

</style>
