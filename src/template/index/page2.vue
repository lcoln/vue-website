<template>
    <section class="index2">
        <waterfall :amount="8" :waterfall-style="{width: '85%', 'margin-left': '1%'}" :page-style="{width: '250px', margin: '10px', border: '1px solid rgb(209, 108, 131)', background: '#202834'}" :height="[250, 350]">
            <template v-for="(item, i) in content" :slot="`waterfallPage${i + 1}`">
                <div class="card">
                    <div class="title">
                        <img :src="item.logo">
                        <div class="percent">
                            <percent :percent="item.per" color="#F44336" bg-color=""></percent>
                        </div>
                    </div>
                    <div class="content">
                        <p class="detail" v-for="(it, i) in item.include" :style="{height: `${100 / item.include.length}%`, transform: `${i < (item.include.length - 1) ? `translate(0, calc(${(item.include.length - i - 1) * 100}% - ${30 * (item.include.length - i - 1)}px))` : 'none'}`}" @mouseenter="showDetail(item, i, $event)" @mouseleave="hideDetail(item, i, $event)">
                            <span class="detail-title">{{it}}</span>
                        </p>
                    </div>

                </div>
            </template>
        </waterfall>
    </section>
</template>

<script>
import waterfall from '../../components/waterfall/main.vue'
import percent from '../../components/circle-percent/main.vue'

let tmpStyle = ''
export default {
    data(){
        return {
            content: [{
                title: '前端语言',
                include: ['Html5', 'Css3', 'JS', 'es5, es6, es7'],
                per: 0.9,
                logo: '/static/images/js.jpg'
            },{
                title: '架构',
                include: ['mvvm架构', 'mvc架构'],
                per: 0.76,
                logo: '/static/images/mvvm.png'
            },{
                title: '框架使用',
                include: ['avalon.js', 'vue.js'],
                per: 0.8,
                logo: '/static/images/vue.jpg'
            },{
                title: '开发工具',
                include: ['sublime-text3', 'git', 'linux'],
                per: 0.8,
                logo: '/static/images/sublime.jpg'
            },{
                title: '后端语言',
                include: ['node.js', 'pm2'],
                per: 0.64,
                logo: '/static/images/nodejs.jpg'
            },{
                title: '数据库',
                include: ['mysql', 'mongo', 'redis', 'cdn'],
                per: 0.44,
                logo: '/static/images/mysql.png'
            },{
                title: '服务端',
                include: ['nginx', 'http2'],
                per: 0.4,
                logo: '/static/images/http2.png'
            },{
                title: 'ui',
                include: ['photoshop', 'MockingBot'],
                per: 0.56,
                logo: '/static/images/ps.png'
            }]
        }
    },
    mounted () {

    },
    methods: {
        showDetail: function(item, i, ev){
            ev.target.style.fontSize = '20px'
            let len = item.include.length
            if(i == len - 1)
                return

            tmpStyle = ev.target.style.transform
            ev.target.style.transform = `translate(0, calc(${(len - 2 - i) * 100}% - ${(len - 2 - i) * 30}px)`
        },
        hideDetail: function(item, i, ev){
            ev.target.style.fontSize = ''
            if(i == item.include.length - 1)
                return
            ev.target.style.transform = tmpStyle
        }
    },
    components: {
        waterfall,
        percent
    }
}
</script>

<style lang="scss" type="text/css" scoped>

    .index2{width: 100%;height: 100%;overflow: auto;
        .card{width: 100%;height: 100%;transition: .4s;
            .title{position: relative;height: 40%;background: rgba(65, 78, 96, 0.78);color: #fff;font-size: 14px;text-align: center;
                img{width: 100%;height: 100%;object-fit: cover;}
                .percent{position: absolute;bottom: -25%;left: 5%;width: 80px;height: 80px;border-radius: 50%;box-shadow: 0 3px 1px #000;z-index: 5;}
            }
            .content{height: 60%;overflow: hidden;
                .detail{position: relative;height: 25px;width: 100%;padding-left: 10px;box-shadow: 0 0px 5px #202834;color: #ddd;line-height: 25px;font-size: 12px;background: #d16c83;transition: .4s;
                    .detail-title{display: block;height: 30px;
                        .a{display: block;}
                    }
                }
                .detail:hover{transform: translate(0, 0);}
            }

        }
        .card:hover{border: 2px solid #d16c83;padding: 5px;}
    }

</style>