<template>
    <div class="index4">
        <div class="cover-bg">
            <img class="cover-bg-item" :class="{'show': curPage == 1}" src="/static/images/blog-detail.png">
            <img class="cover-bg-item" :class="{'show': curPage == 2}" src="/static/images/vue.jpg">
            <img class="cover-bg-item" :class="{'show': curPage == 3}" src="/static/images/bg.jpg">
            <div class="bg"></div>
        </div>
        <div class="box">
            <section draggable="true" class="project" :class="{'cur': curPage == 1}" @click="choose(1)">
                <img class="cover" src="/static/images/blog.png" />
                <div class="bg"></div>
            </section>
            <section draggable="true" class="project" :class="{'cur': curPage == 2}" @click="choose(2)">
                <div class="cover" style="background: #607D8B;"></div>
                <div class="bg"></div>
            </section>
            <section draggable="true" class="project" :class="{'cur': curPage == 3}" @click="choose(3)">
                <div class="cover" style="background: #ccc;"></div>
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
        .box{position: absolute;left: 0;top: 0;bottom: 0;right: 130px;margin: auto;width: 100%;height: 600px;text-align: center;letter-spacing: -4px;box-shadow: 0 0 15px #333;

            @for $i from 1 through 3 {
                .project:nth-of-type(#{$i}){left: ($i - 1) * 33.33%;animation-delay: #{$i / 3}s;z-index: 4 - $i}
            }

            .project{position: absolute;width: 33.3999%;height: 600px;transition: .4s;
                .cover{height: 100%;width: 100%;object-fit: cover;}
                &.cur{transform: scale(1.1);box-shadow: 0 0 5px #333;z-index: 4;transition: .4s;}
                &.cur .bg{background: rgba(0, 0, 0, 0.2);}
            }
            .bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);transition: .4s;}


            @include min-screen(1300px){
                width: 1185px;
            }

            @include max-screen(1300px){
                width: 850px;
            }

            @include max-screen(1080px){
                width: 590px;
            }

            @include max-screen(850px){
                width: 350px;
            }
        }
        .cover-bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;
            .cover-bg-item{position: absolute;height: 100%;width: 100%;object-fit: cover;-webkit-filter:blur(5px);opacity: 0;transition: .8s;}
            .show{opacity: 1;}
            .bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);transition: .4s;}
        }
    }

    @keyframes scale0-1{
        0%{transform: scale(0)}
        80%{transform: scale(1.2)}
        100%{transform: scale(1)}
    }

</style>