<template>
    <section class="index1">
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
                    <a href="mailto:875482941@qq.com" target="_blank" class="item">
                        <div class="half-circle">
                            <div class="left"></div>
                        </div>
                        <div class="half-circle">
                            <div class="right"></div>
                        </div>
                        <i class="iconfont">&#xe61c;</i>
                    </a>
                    <a href="https://github.com/lcoln" target="_blank" class="item">
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
    </section>
</template>

<script>
import {hoverSlider} from '../../components/pointer-hover-slider/main.js'

export default {
    mounted: function(){

        hoverSlider.in('constructor')
    }
}
</script>

<style lang="scss" type="text/css" scoped>

    .index1{width: 100%;height: 100%;
        .constructor{position: absolute;width: 500px;height: 300px;left: 0;right: 0;top: 0;bottom: 0;margin: auto;text-align: center;animation: hide-show 3s ease-in-out 3s;animation-fill-mode: forwards;opacity: 0;z-index: 2000;
            .box{position: absolute;left: 0;top: 0;right: 0;bottom: 0;width: 50%;height: 90%;margin: auto;padding: 6% 0;
                h1{margin-bottom: 2%;color: #ddd;font-size: 60px;}
                span{display: block;margin-bottom: 4%;color: #bbb;font-size: 20px;}
                .line{position: relative;width: 100%;height: 1px;margin: 0;background: #bbb;}
                .line:after{content: '';position: absolute;top: 10px;left: 0;right: 0;margin: auto;width: 50%;height: 1px;background: #bbb;}
                .contact{color: #ddd;margin-top: 12%;
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
        .coding{width: 100%;height: 100%;animation: show-hide 3s linear 2s;animation-fill-mode: forwards;opacity: 1;z-index: 1;}
        .page1-bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: rgba(24, 35, 39, .8);animation: hide-show 4s linear 3s;animation-fill-mode: forwards;opacity: 0;z-index: 1;}

    }


    @keyframes hide-show{
        0%{opacity: 0;-webkit-filter: blur(26px);}
        100%{opacity: 1;-webkit-filter: blur(0px);}
    }

    @keyframes show-hide{
        0%{opacity: 1;-webkit-filter: blur(0);}
        100%{-webkit-filter: blur(5px);}
    }
</style>