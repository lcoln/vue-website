<template>
    <!-- <div id="app">
        <div id="fullPage">
            <section class="page page1">
                <div class="content"></div>
            </section>
            <section class="page"></section>
            <section class="page"></section>
            <section class="page"></section>
            <section class="page"></section>
        </div>
    </div> -->
    <div>
        <fullpage :amount="5">
            <template slot="page4">
                22222
            </template>
        </fullpage>
    </div>
</template>

<script>
import Hello from './components/Hello'
import vue from 'vue'
// import {fullpage} from './components/fullscreen-scroll/main.js'
import fullpage from './components/fullscreen-scroll/main.vue'
import {hoverSlider} from './components/pointer-hover-slider/main.js'

export default {
  name: 'app',
  data () {
    return {
      // bgColor: ['#182327', '#132C33', '#F9F9F9', '#015E7F'],

    }
  },
  mounted: function(){
    // fullpage.init('fullPage', 'page', '.4')
    // var hover = (require('./components/pointer-hover-slider/main.js'))
    // console.log(fullpage);
  },
  components: {
    fullpage
  },
}
</script>

<style lang="scss" scoped="" type="text/css" scoped>

*{margin: 0;padding: 0}
body,html{width: 100%;height: 100%}
a{text-decoration: none;}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#fullPage{width: 100%;height: 100%;background: #ddd;}
#fullPage .page{width: 100%;height: 100%;background: #bbb;
    &.page1 .content{position: absolute;width: 500px;height: 400px;border: 5px solid #ddd;}
}
#fullPage .page:nth-of-type(1){background: #182327}
#fullPage .page:nth-of-type(2){background: #132C33}
#fullPage .page:nth-of-type(3){background: #F9F9F9}
#fullPage .page:nth-of-type(4){background: #015E7F}
#fullPage .page:nth-of-type(5){background: #2D363F}

</style>
