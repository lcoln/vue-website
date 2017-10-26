<template>
    <div class="website-index">
        <fullpage :amount="5" :bg-color="bgColor" :cur-page="curIndex" @on-curIndex-change="changeCurIndex">
            <template slot="page1">
                <div class="constructor" id="constructor">
                    <div class="box">
                        <h1>Hello</h1>
                        <span>I'm linteng</span>
                        <span>a front-end web developer</span>
                        <span class="line"></span>

                        <div class="contact">
                            <a href="" class="item">
                                <div class="half-circle">
                                    <div class="left"></div>
                                </div>
                                <div class="half-circle">
                                    <div class="right"></div>
                                </div>
                                <i class="iconfont">&#xe944;</i>
                            </a>
                            <a href="" class="item">
                                <div class="half-circle">
                                    <div class="left"></div>
                                </div>
                                <div class="half-circle">
                                    <div class="right"></div>
                                </div>
                                <i class="iconfont">&#xe61c;</i>
                            </a>
                            <a href="" class="item">
                                <div class="half-circle">
                                    <div class="left"></div>
                                </div>
                                <div class="half-circle">
                                    <div class="right"></div>
                                </div>
                                <i class="iconfont">&#xe6b6;</i>
                            </a>
                        </div>
                    </div>
                </div>
                <img class="coding" src="/static/images/hello.gif">
                <div class="page1-bg"></div>
            </template>
            <template slot="page2">
                <waterfall :amount="5" :waterfall-style="{width: '80%', margin: '0 auto'}" :page-style="{width: '25%', border: '1px solid #ddd'}"></waterfall>
            </template>
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
import waterfall from './components/waterfall/main.vue'
import {hoverSlider} from './components/pointer-hover-slider/main.js'

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

        hoverSlider.in('constructor')
    },
    ready: function(){
        this.tabText.forEach((v, i) => {
            setTimeout()
        })
    },
    components: {
        fullpage,
        waterfall
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
        .constructor{position: absolute;width: 500px;height: 300px;left: 0;right: 0;top: 0;bottom: 0;margin: auto;text-align: center;animation: hide-show 4s ease-in-out 4s;animation-fill-mode: forwards;opacity: 0;z-index: 2000;
            .box{position: absolute;left: 0;top: 0;right: 0;bottom: 0;width: 50%;height: 90%;margin: auto;
                h1{margin: 20px 0 10px;color: #ddd;font-size: 60px;}
                span{display: block;margin: 10px;color: #bbb;font-size: 20px;}
                .line{position: relative;width: 100%;height: 1px;margin: 0;background: #bbb;}
                .line:after{content: '';position: absolute;top: 10px;left: 0;right: 0;margin: auto;width: 50%;height: 1px;background: #bbb;}
                .contact{color: #ddd;margin-top: 30px;
                    .item{position: relative;display: inline-block;width: 50px;height: 50px;border-radius: 50%;line-height: 50px;margin: 0 10px;transition: .1s;color: #ddd;cursor: pointer;
                        i{display: block;position: relative;border-radius: 50%;font-size: 35px;transform: rotate(10deg) scale(0.8);transition: .4s;}
                        i:nth-of-type(3){position: relative;bottom: 1px;}
                        .half-circle{position: absolute;height: 100%;width: 50%;overflow: hidden;
                            div{width: 200%;height: 100%;border: 2px solid #ddd;border-radius: 50%;transform: rotate(90deg);transition: .4s;}
                            .left{border-right: 1px solid transparent;border-top: 1px solid transparent;}
                            .right{position: absolute;left: -100%;border-left: 1px solid transparent;border-bottom: 1px solid transparent;}
                        }
                        .half-circle:nth-of-type(1){left: 0}
                        .half-circle:nth-of-type(2){right: 0}
                    }
                    .item:hover{
                        .half-circle{
                            div{transform: rotate(45deg);}
                        }
                        i{background: #ddd;color: #1d2d30;transform: rotate(0) scale(0.8);}
                    }
                }

            }
        }
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

        .coding{width: 100%;height: 100%;animation: show-hide 5s linear 4s;animation-fill-mode: forwards;opacity: 1;z-index: 1;}
        .page1-bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: rgba(24, 35, 39, .8);animation: hide-show 5s linear 4s;animation-fill-mode: forwards;opacity: 0;z-index: 1;}
    }




    @keyframes hide-show{
        0%{opacity: 0;-webkit-filter: blur(26px);}
        100%{opacity: 1;-webkit-filter: blur(0px);}
    }

    @keyframes show-hide{
        0%{opacity: 1;-webkit-filter: blur(0);}
        100%{-webkit-filter: blur(5px);}
    }

    @keyframes tab-hide-show{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }


</style>
