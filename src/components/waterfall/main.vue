<template>
    <div class="ui-waterfall" :style="waterfallStyle">
        <div class="ui-waterfall-container ui-fn-cl">
            <section class="ui-waterfall-box ui-fn-fl" v-for="(page, index) in pages" :style="pagestyle[index]">
                <slot :name="`page${index + 1}`"></slot>
            </section>
        </div>

    </div>
</template>

<script>

    export default {
        props: {
            amount: {
                type: Number,
                require: true
            },
            waterfallStyle: {
                type: Object,
                default(){
                    return {
                        width: '100%'
                    }
                }
            },
            pageStyle: {
                type: Object,
                default(){
                    return {
                        width: '25%'
                    }
                }
            },
            height: {
                type: Array,
                default(){
                    return [300, 400]
                },
                validator: function (val) {
                    return val[1] > val[0]
                }
            }
        },
        data() {
            return {
                pages: new Array(this.amount),
                curIndex: 0
            }
        },
        computed:{
            pagestyle: function(){
                let result = []
                let _this = this

                /*let result = this.pages.reduce((item, next, i) => {
                    _this.pageStyle.height = Math.random() * (_this.height[1] - _this.height[0]) + _this.height[0] + 'px'
                    item.push(_this.pageStyle)
                    console.log(item);
                    return item
                }, [])*/

                for(let i = 0;i < this.amount;i++){
                    let tmp = JSON.parse(JSON.stringify(_this.pageStyle))
                    tmp.height = Math.random() * (_this.height[1] - _this.height[0]) + _this.height[0] + 'px'
                    result[i] = tmp
                    console.log(result[i]);
                }
                console.log(result);
                return result
            }
        },
        methods: {

        },
        watch: {

        }
    }
</script>

<style lang="scss" type="text/css" scoped>

    .ui-waterfall{width: 100%;height: 100%;margin: 0 auto;
        .ui-waterfall-container{width: 100%;height: 100%;
            .ui-waterfall-box{}
        }
    }

</style>