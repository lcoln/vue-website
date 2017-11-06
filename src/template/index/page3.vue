<template>
    <div class="index3">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <p class="time">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </p>
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    },
    mounted () {

    },
    methods: {

    },
    components: {

    }
}
</script>

<style lang="scss" type="text/css" scoped>

    .index3{position: relative;width: 100%;height: 100%;
        .card{position: absolute;height: 220px;width: 400px;background: #f30;
        }

        @for $i from 1 through 4{
            @if (#{$i} % 2) != 0 {
                .card:nth-of-type(#{$i}){
                    left: 55%
                }
            } @else{
                .card:nth-of-type(#{$i}){
                    left: 0
                }
            }
        }
        .time{position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;height: 90%;width: 1px;background: #ddd;
            @for $i from 1 through 4{
                span:nth-of-type(#{$i}){
                    top: $i * 20%
                }
                span:nth-of-type(#{$i}):hover{
                    background: #000;
                }
            }
            span{position: relative;left: -4px;display: block;width: 10px;height: 10px;margin-left: -1px;border-radius: 50%;background: #ddd;transition: .4s;cursor: pointer;}
        }
    }

</style>