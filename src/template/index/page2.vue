<template>
    <section class="index2">
        <waterfall :amount="8" :waterfall-style="{width: '85%', 'margin-left': '1%', overflow: 'hidden'}" :page-style="{width: '250px', margin: '10px', border: '1px solid rgb(209, 108, 131)'}" :height="[250, 350]">
            <template v-for="(item, i) in content" :slot="`waterfallPage${i + 1}`">
                <div class="title">
                    <img :src="item.logo">
                    <div class="percent"></div>
                </div>
                <div class="content">
                    <p class="detail" v-for="(it, i) in item.include" :style="{height: `${100 / item.include.length}%`, transform: `${i < (item.include.length - 1) ? `translate(0, calc(${(item.include.length - i - 1) * 100}% - ${30 * (item.include.length - i - 1)}px))` : 'none'}`}">
                        <span class="detail-title">{{it}}</span>
                    </p>
                </div>
            </template>
        </waterfall>
    </section>
</template>

<script>
import waterfall from '../../components/waterfall/main.vue'

export default {
    data(){
        return {
            content: [{
                title: '前端语言',
                include: ['Html5', 'Css3', 'JS', 'es5, es6, es7'],
                per: '70%',
                logo: '/static/images/js.jpg'
            },{
                title: '架构',
                include: ['mvvm架构', 'mvc架构'],
                per: '76%',
                logo: '/static/images/mvvm.png'
            },{
                title: '框架使用',
                include: ['avalon.js', 'vue.js'],
                per: '80%',
                logo: '/static/images/vue.jpg'
            },{
                title: '开发工具',
                include: ['sublime-text3', 'git', 'linux'],
                per: '80%',
                logo: '/static/images/sublime.jpg'
            },{
                title: '后端语言',
                include: ['node.js', 'pm2'],
                per: '64%',
                logo: '/static/images/nodejs.jpg'
            },{
                title: '数据库',
                include: ['mysql', 'mongo', 'redis', 'cdn'],
                per: '44%',
                logo: '/static/images/mysql.png'
            },{
                title: '服务端',
                include: ['mysql', 'nginx', 'http2'],
                per: '44%',
                logo: '/static/images/http2.png'
            },{
                title: 'ui',
                include: ['photoshop', 'MockingBot'],
                per: '56%',
                logo: '/static/images/ps.png'
            }]
        }
    },
    components: {
        waterfall
    }
}
</script>

<style lang="scss" type="text/css" scoped>

    .index2{width: 100%;height: 100%;
        .title{position: relative;height: 40%;background: rgba(65, 78, 96, 0.78);color: #fff;font-size: 14px;text-align: center;
            img{width: 100%;height: 100%;object-fit: cover;}
            .percent{position: absolute;bottom: -25%;left: 5%;width: 80px;height: 80px;border-radius: 50%;background: #fff;}
        }
        .content{height: 60%;overflow: hidden;
            .detail{position: relative;height: 25px;width: 100%;padding-left: 10px;box-shadow: 0 0px 5px #202834;color: #ddd;line-height: 25px;font-size: 12px;background: #d16c83;transition: .4s;
                .detail-title{display: block;height: 30px;}
            }
            .detail:hover{transform: translate(0, 0);}
        }
    }

</style>