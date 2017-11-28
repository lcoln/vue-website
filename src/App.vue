<template>
    <div class="website-index">
        <fullpage :amount="5" :bg-color="bgColor" :cur-page="curIndex" @on-curIndex-change="changeCurIndex">
            <page1 slot="page1" v-if="curArr.includes(0)"></page1>
            <page2 slot="page2" v-if="curArr.includes(1)"></page2>
            <page3 slot="page3" v-if="curArr.includes(2)"></page3>
            <page4 slot="page4" v-if="curArr.includes(3)"></page4>
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
import store from 'store'
import vue from 'vue'
import fullpage from './components/fullscreen-scroll/main.vue'
import page1 from './template/index/page1.vue'
import page2 from './template/index/page2.vue'
import page3 from './template/index/page3.vue'
import page4 from './template/index/page4.vue'

export default {
    name: 'app',
    data () {
        return {
            bgColor: ['#182327', '#202834', '#2b3958', '#1B1521', '#2D363F'],
            tabText: ['intruction', 'skill', 'experience', 'project', 'article'],
            curArr: [0],
            curIndex: 0
        }
    },
    methods: {
        go(page){
            this.curIndex = page
        },
        changeCurIndex(v){
            this.curIndex = v
            if(!this.curArr.includes(v))
                this.curArr.push(v)

        }
    },
    mounted: async function(){
        store.state.approved = false
        await store.dispatch('sleep', 8000)
        store.state.approved = true
    },
    components: {
        fullpage,
        page1,
        page2,
        page3,
        page4
    },
}
</script>

<style lang="scss" type="text/css" scoped>

    @import 'static/sass/mixin.scss';
    *{margin: 0;padding: 0}
    body,html{width: 100%;height: 100%;overflow: hidden;}
    a{text-decoration: none;}

    #app {width: 100%;height: 100%;font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;
    }
    .website-index{width: 100%;height: 100%;

        .website-index-tab-group{position: absolute;right: 2%;top: 50%;margin-top: -75px;width: 100px;height: 130px;color: #fff;text-align: center;z-index: 2000;
            @include min-screen(1400px){
                right: 5%;
            }
        }
        .website-index-tab{position: relative;display: block;width: 100%;height: 20px;margin: 5px 0;transition: .4s;animation: tab-hide-show 1s ease-in-out;animation-fill-mode: both;cursor: pointer;color: #666;font-weight: bold;}
        .website-index-tab:hover{color: #fff;}
        .website-index-tab:nth-of-type(1){animation-delay: 6s;}
        .website-index-tab:nth-of-type(2){animation-delay: 6.5s;}
        .website-index-tab:nth-of-type(3){animation-delay: 7s;}
        .website-index-tab:nth-of-type(4){animation-delay: 7.5s;}
        .website-index-tab:nth-of-type(5){animation-delay: 8s;}
        .tab-act{color: #fff;}
        .tab-line{position: absolute;left: 0;right: 0;top: 0;bottom: 0;display: block;width: 0;height: 0;margin: auto;transition: .4s;background: #fff;}
        .tab-line-act{width: 100%;height: 1px;}
    }



    @keyframes tab-hide-show{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }


</style>
