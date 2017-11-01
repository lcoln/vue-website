<template>
    <div class="website-index">
        <fullpage :amount="5" :bg-color="bgColor" :cur-page="curIndex" @on-curIndex-change="changeCurIndex">
            <page1 slot="page1"></page1>
            <page2 slot="page2"></page2>
            <page3 slot="page3"></page3>
            <template slot="ui-fullpage-tab">
                <div class="website-index-tab-group">
                    <span v-for="(page, index) in tabText" :class="{'tab-act': curIndex == index}" class="website-index-tab" @click="go(index >> 0)">
                        {{page}}
                        <i class="tab-line" :class="{'tab-line-act': curIndex == index}"></i>
                    </span>
                </div>
            </template>
        </fullpage>
    </div>
</template>

<script>
import Hello from './components/Hello'
import vue from 'vue'
import fullpage from './components/fullscreen-scroll/main.vue'
import page1 from './template/index/page1.vue'
import page2 from './template/index/page2.vue'
import page3 from './template/index/page3.vue'

export default {
    name: 'app',
    data () {
        return {
            bgColor: ['#182327', '#202834', '#b2ced7', '#556270', '#2D363F'],
            tabText: ['intruction', 'skill', 'experience', 'project', 'article'],

            curIndex: 0
        }
    },
    methods: {
        go(page){
            this.curIndex = page
        },
        changeCurIndex(v){
            this.curIndex = v

        }
    },
    mounted: function(){

    },
    components: {
        fullpage,
        page1,
        page2,
        page3
    },
}
</script>

<style lang="scss" type="text/css" scoped>

    *{margin: 0;padding: 0}
    body,html{width: 100%;height: 100%;overflow: hidden;}
    a{text-decoration: none;}

    #app {width: 100%;height: 100%;font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;
    }
    .website-index{width: 100%;height: 100%;

        .website-index-tab-group{position: absolute;right: 10px;top: 50%;margin-top: -75px;width: 100px;height: 130px;color: #fff;text-align: center;z-index: 2000;}
        .website-index-tab{position: relative;display: block;width: 100%;height: 20px;margin: 5px 0;transition: .4s;animation: tab-hide-show 1s ease-in-out;animation-fill-mode: both;cursor: pointer;color: #666;font-weight: bold;}
        .website-index-tab:hover{color: #fff;}
        .website-index-tab:nth-of-type(1){animation-delay: 8s;}
        .website-index-tab:nth-of-type(2){animation-delay: 8.5s;}
        .website-index-tab:nth-of-type(3){animation-delay: 9s;}
        .website-index-tab:nth-of-type(4){animation-delay: 9.5s;}
        .website-index-tab:nth-of-type(5){animation-delay: 10s;}
        .tab-act{color: #fff;}
        .tab-line{position: absolute;left: 0;right: 0;top: 0;bottom: 0;display: block;width: 0;height: 0;margin: auto;transition: .4s;background: #fff;}
        .tab-line-act{width: 100%;height: 1px;}
    }



    @keyframes tab-hide-show{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }


</style>
