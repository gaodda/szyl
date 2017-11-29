<style lang="scss" scoped>
@import '~common/scss/public/base-variable';
@import '~common/scss/public/base-mixin';
@import '~common/scss/base-style';
.clear {
    @include clear;
}

.top-bar {
    border: 1px solid #d7dde4;
    background: $home-blue;
    height: 32px;
}

.top-content {
    float: right;
    margin-right: 25px;
    height: 32px;
    line-height: 32px;
    a {
        color: #fff;
        margin: 0 10px;
    }
}

.banner {
    overflow:hidden;
    margin:0 auto;
    // height:300px;
    .carousel {
         width: 100%;
            height: 100%;
        img {
            width: 100%;
            display:block;
        }
    }
}
.inner{
        text-align:center;
        color:#333;
        .inner-title{
            font-size:24px; 
            
            font-weight:bold;
        }
        .inner-stitle{
            padding:10px 0;
        }
        hr{
            width:300px;
            margin:0 auto;
            border-top:1px dashed #333;
        }
    }
    /*平台优势 */
.advantage{
    padding:50px 0;
    background:#f6f6f6;
    .advantage-txt{
        width:585px;
        padding-top:20px;
        text-align:center;
        color:#666;
        padding-bottom:30px;
    }
    .goodness{
        padding:0px 40px;
        text-align:center;
        color:#fff;
        overflow:hidden;
        img{
            width:100%;
            height:100%;
            display:block;
        }
        .goodness-title{
            position:absolute;
            width:100%;
            height:50px;
            line-height:50px;
            font-weight:bold;
            background:rgba(0,0,0,.5);
            top:264px;
            font-size:18px;
        }
        .goodness-hidden{
            background:rgba(0,0,0,.5);
            position:absolute;
            top:319px;
            height:262px;
            display:table;
            padding:0 35px;
            box-sizing:border-box;
            line-height:30px;
            span{
                display:inline-block;
                display:table-cell;
                vertical-align:middle;  
            }
        }
        .ivu-col-span-6:hover{
            .goodness-title{
                transform:translate(0,-264px);
                 transition:all 1s ease;
            }
            .goodness-hidden{
                transform:translate(0,-268px);
                 transition:all 1s ease;
            }
        }
    }  
}
    /*快速导航*/
    .fastnav{
        padding:50px 0;
        background:#fff;
        height:350px;
        .fastnav-icon{
            padding:40px 30px 0;
            height:80px;
            .icon{
                width:80px;
                height:80px;
                background-image:url("./icon.png");
                float:left;
                margin-left:25px;
            }
            .icon1{
                background-position:-42px -180px ;
                &:hover{
                    background-position:-132px -180px ;
                }
            }
            .icon2{
                background-position:-42px -270px ;
                &:hover{
                    background-position:-132px -270px ;
                }
            }
            .icon3{
                background-position:-42px 0px ;
                &:hover{
                    background-position:-132px 0px ;
                }
            }
            .icon4{
                background-position:-42px -90px ;
                &:hover{
                    background-position:-132px -90px ;
                }
            }
            .fastnav-txt{
                float:left;
                margin-left:20px;
                width:120px;
                height:80px;
                color:#666;
                font-family:'AdobeHeitiStd-Regular';
                p{
                    font-size:18px;
                    color:#333;
                }
            }
        }
    } 
    /*关于我们 */
    .about{
       height:373px;
       padding:50px 0;
       background-image:url('./about.png');
       background-size:100% 100%;
       width:100%; 
       .inner{
           color:#fff;
       }
       .about-txt{
           color:#fff;
           text-indent:2em;
           padding:30px 70px 0;
           line-height:25px;
       }
    }
    /*联系我们 */
    .contact{
        padding:50px 0;
        background:#f6f6f6;
        height:560px;
        .information{
            padding-top:80px;
            padding-left:5%;
            float:left;
            .info-icon{
                width:32px;
                margin-right:25px;
                float:left;
                div{
                    width:32px;
                    height:32px;
                    background-image:url("./icon.png");
                    margin-bottom:15px;
                    &:nth-of-type(1){
                        background-position:0 0;
                    }
                    &:nth-of-type(2){
                        background-position:0 -42px;
                    }
                    &:nth-of-type(3){
                        background-position:0 -84px;
                    }
                    &:nth-of-type(4){
                        background-position:0 -126px;
                    }
                }
            }
            .info-inner{
                float:left;
                color:#333;
                font-size:18px;
                @media screen and(max-width:1100px){
                     font-size:12px;
                }
                p{
                    margin-bottom:15px;
                    line-height:32px;
                    span{
                        color:#3353a7;
                    }
                }
            }
        }
        .map{
            float:right;
            width:50%;
            height:384px;
            margin-top:25px;
            overflow:hidden;
            display:inline-block;
        }
    }
</style>
<template>
    <div class="index">
        <div style="height:80px;background:#fff;"></div>
        <div class="banner">
        <el-carousel :interval="5000" arrow="never" :height="height" >
                <el-carousel-item v-for="(item,index) in banners" :key="index">
                    <div class="carousel">
                        <img :src="item.img" alt="" :height="height">
                    </div>
                </el-carousel-item>
            </el-carousel>  
        </div>

        <div class="advantage">
            <div class="inner container">
                <div class="inner-title">平台优势</div>
                <div class="inner-stitle">ADVANTAGE</div>
                <hr/>
            </div>
            <div class="advantage-txt container">平台开发了标准数据分析流程，对数据分析进行了严格的质控，力求更准确的发现基因变异位点，为临床基因检测提供支持。</div>
            <div class="goodness container">
             <Row :gutter="36">
                 <Col span="6">
                     <div style="position:relative;">
                        <img src="./control.jpg"/>
                        <div class="goodness-title">严格质控</div>
                        <div class="goodness-hidden">
                            <span>Mapping、Calling、Annotation，步步质控，提高变异检测的准确度。</span>
                        </div>
                     </div>
                 </Col>
                 <Col span="6">
                     <div style="position:relative;">
                        <img src="./analysis.jpg"/>
                        <div class="goodness-title">快速分析</div>
                        <div class="goodness-hidden">
                            <span>标准分析流程，操作简单，点击鼠标，即可完成基本分析。</span>
                        </div>
                    </div>
                 </Col>
                 <Col span="6">
                     <div style="position:relative;">
                        <img src="./project.jpg"/>
                        <div class="goodness-title">项目协作</div>
                        <div class="goodness-hidden">
                            <span>项目协作使数据共享变简单。实现多用户对同一项目数据的处理</span>
                        </div>
                    </div>
                 </Col>
                 <Col span="6">
                     <div style="position:relative;">
                        <img src="./custom.jpg"/>
                        <div class="goodness-title">自定义分析</div>
                        <div class="goodness-hidden">
                            <span>不用写脚本，通过简单的拖拽就可以搭建生信分析流程。</span>
                        </div>
                    </div>
                 </Col>
             </Row>
            </div>
        </div>

        <div class="fastnav">
            <div class="inner container">
                <div class="inner-title">快速导航</div>
                <div class="inner-stitle">FAST NAVIGATION</div>
                <hr/>
            </div>
            <div class="fastnav-icon container">
                <Row :gutter="48">
                    <Col span="6">    
                        <div class="icon icon1"></div>
                        <div class="fastnav-txt">
                        <p>医学科技服务</p>
                        <div>两种分析方式，标准分析和自定义分析标准。</div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="icon icon2"></div>
                        <div class="fastnav-txt">
                        <p>医学科技服务</p>
                        <div>两种分析方式，标准分析和自定义分析标准。</div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="icon icon3"></div>
                        <div class="fastnav-txt">
                        <p>医学科技服务</p>
                        <div>两种分析方式，标准分析和自定义分析标准。</div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="icon icon4"></div>
                        <div class="fastnav-txt">
                        <p>医学科技服务</p>
                        <div>两种分析方式，标准分析和自定义分析标准。</div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

        <div class="about" id="#about">
            <div class="inner container">
                <div class="inner-title">关于我们</div>
                <div class="inner-stitle">ABOUT US</div>
                <hr/>
            </div>
            <div class="about-txt container">
            神州医疗集合神州数码大数据领域、医疗健康领域等专业团队，向政府、医疗机构、企业、居民提供医疗信息化、健康管理、医疗大数据分析、建模，软件平台开发和系统集成等全方位解决方案。神州医疗专注于大数据分析、精准医疗、基因大数据分析、决策支持等医疗信息化解决方案，承担多项国家863计划课题研究，涵盖肿瘤大数据、罕见病、PADIS多个领域，是智慧医疗、卫生信息化领域的领先者，立志成为中国精准医疗信息化第一品牌。神州医疗基因分析云平台为医学科学研究和临床基因检测提供服务。平台开发了标准数据分析流程，对数据分析进行了严格的质控，力求更准确的发现基因变异位点，为临床基因检测提供支持。平台开发的项目协作模块，能满足多用户的合作需求，使数据的分享和利用更加便捷。
            </div>
        </div>

        <div class="contact" id="#contant">
            <div class="inner container">
                <div class="inner-title">联系我们</div>
                <div class="inner-stitle">CONTACT US</div>
                <hr/>
            </div>
            <div class="container">
                <div class="information">
                    <div class="info-icon">
                    <div></div> <div></div> <div></div> <div></div>
                    </div>
                    <div class="info-inner">
                    <p>地址：北京市海淀区苏州街16号神州数码大厦</p>
                    <p>电话：<span>010-61852722</span></p>
                    <p>邮箱：<span>12345678901@xxx.com</span></p>
                    <p>网址：<span>www.shenzhoushumayiliao.com</span></p>
                    </div>
                </div>
                <div class="map">
                    <vMap></vMap>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    feature,
    database
} from 'api/index.js';

import vMap from './map.vue';


export default {
    name: "index",
    data() {
        return {
            height:"408px",
            banners:[{img:require('./bn1.jpg')},{img:require('./bn2.jpg')},{img:require('./bn3.jpg')},{img:require('./bn4.jpg')}]
        }
    },
    methods: {},
    mounted () { 
               const that = this;
               window.onresize = function() { //动态改变banner图的高度
                return function(){ 
                    window.screenWidth = document.body.clientWidth;
                     that.screenWidth = window.screenWidth;
                     that.height=that.screenWidth*0.2125+"px";
                      }()
                  } 
             },
    components: {
        vMap
    }
}
</script>
