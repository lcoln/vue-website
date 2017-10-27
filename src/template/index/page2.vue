<template>
    <section class="index2">
        <waterfall :amount="8" :waterfall-style="{width: '85%', overflow: 'hidden'}" :page-style="{width: '250px', margin: '10px', border: '1px solid rgb(209, 108, 131)'}" :height="[250, 350]">
            <template v-for="(item, i) in content" :slot="`waterfallPage${i + 1}`">
                <div class="title">{{item.title}}</div>
                <div class="content">
                    <span class="detail" v-for="it in item.include" :style="{width: Math.random() * 100 + 100 + 'px' }">{{it}}</span>
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
                per: '70%'
            },{
                title: '架构',
                include: ['mvvm架构', 'mvc架构'],
                per: '76%'
            },{
                title: '框架使用',
                include: ['avalon.js', 'vue.js'],
                per: '80%'
            },{
                title: '开发工具',
                include: ['sublime-text3', 'git', 'linux'],
                per: '80%'
            },{
                title: '后端语言',
                include: ['node.js', 'pm2'],
                per: '64%'
            },{
                title: '数据库',
                include: ['mysql', 'mongo', 'redis', 'cdn'],
                per: '44%'
            },{
                title: '服务端',
                include: ['mysql', 'nginx', 'http2'],
                per: '44%'
            },{
                title: 'ui',
                include: ['photoshop', 'MockingBot'],
                per: '56%'
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
        .title{height: 30px;line-height: 30px;background: rgba(65, 78, 96, 0.78);color: #fff;font-size: 14px;text-align: center;}
        .content{height: calc(100% - 30px);padding-left: 10px;
            .detail{display: block;height: 25px;margin: 10px 0;padding-left: 10px;border-radius: 2px;color: #ddd;line-height: 25px;font-size: 12px;background: rgb(209, 108, 131);}
        }
    }

</style>