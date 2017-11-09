<template>
    <div class="index3">
        <p class="time">
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
            <div class="card">

            </div>
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

        .card{position: relative;left: 0;right: 0;top: calc(5% + (90% - 880px) / 4);margin: auto;height: 220px;width: 400px;background: #f30;

            span{position: relative;left: -4px;display: block;width: 10px;height: 10px;margin-left: -1px;border-radius: 50%;background: #ddd;transition: .4s;cursor: pointer;}
        }

        .card:nth-of-type(1){background: #fff;}
        .card:nth-of-type(2){background: #ccc;}
        .card:nth-of-type(3){background: #000;}
        .card:nth-of-type(4){}

        .time{position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;height: 90%;width: 1px;background: #ddd;
        }
    }

</style>