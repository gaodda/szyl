<style lang="scss">
@import '~common/scss/public/base-variable';
@import '~common/scss/public/base-mixin';
@import '~common/scss/base-style';
.home-header {
    position:fixed;
    top:0;
    left:50%;
    transform:translateX(-50%);
    z-index:9999;
    width:100%;
    background:#fff;
    .clear {
        @include clear;
    }
    .top-bar {
        background: #fff;
        height: 80px;
    }
    .logo{
        width:254px;
        height:66px;
        float:left;
        margin-top:7px;
        img{
            width:100%;
            height:100%;
        }
    }
    .top-content {
        float: right;
        height: 80px;
        line-height: 80px;
        a {
            color: #666;
            margin: 0 15px;
            &:hover{
                color:#00a0e9;
            }
        }
    }
    .top-own{
        float:right;
        margin-left:30px;
        a{
            height:28px;
            width:80px;
            border:1px solid #00a0e9;
            border-radius:3px;
            box-sizing:border-box;
            display:inline-block;
            line-height:28px;
            text-align:center;
            margin-top:25px;
            margin-left:20px;
        }
        .active{
            background:#00a0e9;
            color:#fff;
        }
    }
    .content {
        border: 1px solid #EEEFF1;
        padding: 25px 5px;
    }
    .login-cont {
        .ivu-form {
            background: red;
            .ivu-form-item {
                .ivu-input {
                    border-radius: 0px !important;
                }
            }
        }
    }
    
    .ivu-modal-content{

        .ivu-modal-footer{

            .ivu-btn {
                width:0 !important;
            }
        }
    }

}
</style>
<template>
    <header id="header" class="home-header">
    <div style="box-shadow:0px 3px 3px #cdcdcd;position:relative;
        z-index:999;">
        <div class="top-bar container">
            <a href="http://47.94.7.125/" class="logo"><img src='./logo.png'/></a>
            <div class="top-own">
                    <!--<router-link to="/admin" v-if="currentUserName">{{currentUserName}}</router-link>-->
                    <router-link to="/login"  @click="loginModal = true" class="active">登录</router-link>
                    <router-link to="/register" v-if="!currentUserEmail">
                        注册
                    </router-link>
            </div>
            <div class="top-content">
                    <a href="">首页</a>
                    <a href="">关于我们</a>
                    <a href="">联系我们</a>
            </div>
        </div>
        </div>
       
    </header>
    <!-- /header -->
</template>
<script>
import {getCookie} from '@/common/js/cookie.js'
export default {
    name: "header",
    data() {
        return {
            currentUserName: '',
            // 绑定用户名和密码
            formLogin: {},
            ruleValidate: {
                userName: [{
                    required: true,
                    message: '用户名不能为空',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '密码不能为空',
                    trigger: 'blur'
                }],

            },
        }
    },
    methods: {
        
    },
    created() {
        this.currentUserName=getCookie('username');
    },

    computed: {

    }
}
</script>
