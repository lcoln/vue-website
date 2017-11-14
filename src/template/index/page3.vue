<template>
    <div class="index3">
        <div class="time">
            <div class="card">
                <span class="title">2012.9 ~ 2016.7</span>
                <div class="experience">
                    <!-- <img src="/static/images/school.gif"> -->
                    <p class="name">广东财经大学华商学院</p>
                    <!-- <p class="content">2012至2013学年 优秀共青团员
                    2013至2014学年 优秀团干部
                    2013至2014学年 校优秀学生干部
                    2015年网页设计大赛 团队一等奖
                    2013.9～2014.9 广东财经大学华商学院信息工程系宣传部 部长
                    2013.9~2014.9 广东财经大学华商学院信息工程系 助理班主任</p> -->
                    <span class="item">助理班主任</span>
                    <span class="item">部长</span>
                    <span class="item">网页设计大赛</span>
                    <span class="item">图书馆管理系统</span>
                </div>
            </div>
            <div class="card">
                <span class="title">2015.9 ~ 2015.12</span>
                <div class="experience">
                    <!-- <img src="/static/images/queshi.jpg"> -->
                    <p class="name">雀氏(福建)实业发展有限公司</p>
                    <span class="item">内部系统前端界面</span>
                </div>
            </div>
            <div class="card">
                <span class="title">2016.1 ~ now</span>
                <div class="experience">
                    <!-- <img src="/static/images/mengxiang.jpg"> -->
                    <p class="name">广州市梦享网络技术有限公司</p>
                    <span class="item">boss后台管理系统</span>
                    <span class="item">官方网站</span>
                    <span class="item">开发平台</span>
                    <span class="item">对外项目h5页面</span>
                </div>
            </div>
            <div class="card">
                <span class="title">...</span>
                <div class="experience"></div>
            </div>
        </div>
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

        .time{position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;height: 90%;

            .card{position: relative;margin: auto;height: 25%;padding: 10px;width: 400px;
                .experience{width: 100%;height: 100%;padding-top: 10px;border-radius: 5px;box-shadow: 2px 2px 10px rgb(32, 40, 52);
                    img{width: 100%;height: 100%;object-fit: cover;}
                    .name{position: relative;display: inline-block;margin-top: -10px;bottom: 10px;right: 10px;padding: 10px;height: 40px;border-right: 5px solid #2b3958;border-bottom: 4px solid #2b3958;color: #fff;box-shadow: 0 0 10px #2b3958;}
                    .content{position: absolute;padding-left: 1em;width: 257px;color: #2b3958;white-space: pre-line;font-size: 14px;}
                    .item{float: right;position: relative;left: 10px;padding: 0 5px;display: block;height: 20px;margin-bottom: 10px;line-height: 20px;text-align: center;background: #333;font-size: 12px;color: #ddd;box-shadow: 0px 1px 2px #333;clear: both;}
                    .item:after{content: '';position: absolute;right: 0;border-right: 5px solid transparent;border-bottom: 5px solid transparent;border-left: 5px solid rgba(0, 0, 0, 0.5);border-top: 5px solid rgba(0, 0, 0, 0.5);bottom: -10px;}
                }
                .title{position: absolute;width: 150px;height: 30px;padding: 0 10px;top: 50%;margin-top: -15px;line-height: 30px;color: #fff;box-shadow: inset 0px 0 0 3px #fff;transition: .4s;}
            }
            .card:after{content: '';width: 40px;height: 40px;position: absolute;top: 50%;margin-top: -20px;border-radius: 50%;background: #fff;z-index: 3;}
            .card:before{content: '';width: 30px;height: 30px;position: absolute;top: 50%;margin-top: -15px;line-height: 30px;text-align: center;border-radius: 50%;font-size: 20px;color: #fff;z-index: 4;font-family:"iconfont" !important;font-size:16px;font-style:normal;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}

            .card:nth-of-type(1):before{content: '\e66a';background: #E36E40;}
            .card:nth-of-type(2):before{content: '\e69a';background: #24B694;}
            .card:nth-of-type(3):before{content: '\e64d';background: #3C6C84;}
            .card:nth-of-type(4):before{content: '\e689';background: #574C41;}

            .card:nth-of-type(1) .experience{background: #fd9167;}
            .card:nth-of-type(2) .experience{background: #3FCFAF;}
            .card:nth-of-type(3) .experience{background: #51829a;}
            .card:nth-of-type(4) .experience{background: gray;}

            .card:nth-of-type(1) .name{background: #fd9167;}
            .card:nth-of-type(2) .name{background: #3FCFAF;}
            .card:nth-of-type(3) .name{background: #51829a;}
            .card:nth-of-type(4) .name{background: gray;}

            .card:nth-of-type(1) .title{background: #E36E40;}
            .card:nth-of-type(2) .title{background: #24B694;}
            .card:nth-of-type(3) .title{background: #3C6C84;}
            .card:nth-of-type(4) .title{background: #574C41;}


            .card:nth-of-type(1) .title, .card:nth-of-type(3) .title{left: -200px;}
            .card:nth-of-type(2) .title, .card:nth-of-type(4) .title{right: -200px;text-align: right;}

            .card:nth-of-type(1), .card:nth-of-type(3){left: 50%;margin-left: 50px;}
            .card:nth-of-type(2), .card:nth-of-type(4){left: -250px;}

            .card:nth-of-type(1):after, .card:nth-of-type(3):after{left: -70px;}
            .card:nth-of-type(2):after, .card:nth-of-type(4):after{right: -70px;}
            .card:nth-of-type(1):before, .card:nth-of-type(3):before{left: -65px}
            .card:nth-of-type(2):before, .card:nth-of-type(4):before{right: -65px;}

        }
        .time:after{content: '';position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;width: 5px;background: #BBCCDC;}
    }

</style>