<template>
    <div class="index4">
        <div class="cover-bg">
            <img class="cover-bg-item" :class="{'show': curPage == 1}" src="/static/images/blog-detail.png">
            <img class="cover-bg-item" :class="{'show': curPage == 2}" src="/static/images/components.png">
            <img class="cover-bg-item" :class="{'show': curPage == 3}" src="/static/images/resume.png">
            <div class="bg"></div>
        </div>
        <div class="box">
            <section draggable="true" class="project" :class="{'cur': curPage == 1}" @click="choose(1)">
                <img class="cover" src="/static/images/blog.png" />
                <div class="content">
                    <span>BLOG</span>
                    <a class="iconfont" target="_blank" href="https://blog.cncoders.me">&#xe61d;: https://blog.cncoders.me</a>
                    <a class="iconfont" target="_blank" href="https://github.com/lcoln/blog-vue">&#xe6b6;: https://github.com/lcoln/blog-vue</a>
                </div>
                <div class="bg"></div>
            </section>
            <section draggable="true" class="project" :class="{'cur': curPage == 2}" @click="choose(2)">
                <div class="cover" style="background: #607D8B;">
                    <h1 class="components">COMPONENTS</h1>
                </div>
                <div class="content">
                    <span>COMPONENTS</span>
                    <a class="iconfont" target="_blank" href="https://components.cncoders.me">&#xe61d;: https://components.cncoders.me</a>
                    <a class="iconfont" target="_blank" href="https://github.com/lcoln/vue-components">&#xe6b6;: https://github.com/lcoln/vue-components</a>
                </div>
                <div class="bg"></div>
            </section>
            <section draggable="true" class="project" :class="{'cur': curPage == 3}" @click="choose(3)">
                <div class="cover" style="background: #666">
                    <h1 class="components">RESUME</h1>
                </div>
                <div class="content">
                    <span>RESUME</span>
                    <a class="iconfont" target="_blank" href="https://resume.cncoders.me">&#xe61d;: https://resume.cncoders.me</a>
                    <!-- <a class="iconfont" target="_blank" href="https://github.com/lcoln/vue-components">&#xe6b6;: https://github.com/lcoln/vue-components</a> -->
                </div>
                <div class="bg"></div>
            </section>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            currPageShow: false,
            background: ['/static/images/blog-detail.png'],
            curPage: 1
        }
    },
    mounted () {
        this.currPageShow = !this.currPageShow
    },
    methods: {
        choose(i) {
            this.curPage = i
        }
    },
    components: {

    }
}
</script>

<style lang="scss" type="text/css" scoped>

    @import 'static/sass/mixin.scss';
    .index4{position: relative;width: 100%;height: 100%;
        .box{position: absolute;left: 0;top: 0;bottom: 0;right: 130px;margin: auto;width: 100%;height: 600px;text-align: center;box-shadow: 0 0 15px #333;

            @for $i from 1 through 3 {
                .project:nth-of-type(#{$i}){left: ($i - 1) * 33.33%;animation-delay: #{$i / 3}s;z-index: 4 - $i}
            }

            .project{position: absolute;width: 33.3999%;height: 600px;transition: .4s;
                .cover{height: 100%;width: 100%;object-fit: cover;
                    .components{position: absolute;top: 0;bottom: 0;right: 0;left: 0;margin: auto;width: 205px;height: 30px;font-size: 30px;color: #fff;}
                }
                .content{position: absolute;bottom: 10px;width: 100%;padding: 5px 0 10px 15px;border-left: 10px solid #294f42;box-shadow: 4px 4px 5px #1c1c1c;z-index: 2;text-align: left;background: rgba(0, 0, 0, 0.6);color: #999;transition: .4s;opacity: 0;
                    span{display: block;margin-left: -5px;margin-bottom: 10px;font-size: 20px;}
                    a{display: block;margin-top: 5px;color: #999;text-decoration: none;}
                }
                &.cur{transform: scale(1.1);box-shadow: 0 0 5px #333;z-index: 4;transition: .4s;}
                &.cur .bg{background: rgba(0, 0, 0, 0.3);}
                &.cur .content{margin-left: 20px;opacity: 1;}
            }
            .bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);transition: .4s;}


            @include min-screen(1300px){
                width: 1185px;
            }

            @include max-screen(1300px){
                width: 850px;
            }
        }
        .cover-bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;
            .cover-bg-item{position: absolute;height: 100%;width: 100%;object-fit: cover;-webkit-filter:blur(5px);opacity: 0;transition: .8s;}
            .show{opacity: 1;}
            .bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.7);transition: .4s;}
        }
    }

    @keyframes scale0-1{
        0%{transform: scale(0)}
        80%{transform: scale(1.2)}
        100%{transform: scale(1)}
    }

</style>