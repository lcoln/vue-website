<template>
    <div class="index4">
        <div class="box">
            <section class="project" :class="{'show': currPageShow}"></section>
            <section class="project" :class="{'show': currPageShow}"></section>
            <section class="project" :class="{'show': currPageShow}"></section>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            currPageShow: false
        }
    },
    mounted () {
        this.currPageShow = !this.currPageShow
    },
    methods: {

    },
    components: {

    }
}
</script>

<style lang="scss" type="text/css" scoped>

    @import 'static/sass/mixin.scss';
    .index4{position: relative;width: 100%;height: 100%;
        .box{position: absolute;left: 0;top: 0;bottom: 0;right: 0;margin: auto;width: 100%;height: 600px;text-align: center;
            .project{display: inline-block;width: 30%;height: 600px;margin: 0 10px;background: #ccc;}
            .show{animation: scale0-1 1s ease-in-out;animation-fill-mode: both;}
        }
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

    @keyframes scale0-1{
        0%{transform: scale(0)}
        100%{transform: scale(1)}
    }

</style>