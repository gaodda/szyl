<style lang="scss" scoped>
  // 公共变量
  @import '~common/scss/public/base-url';

  /* 头部 */

.admin-head {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #2B3245;
    .admin-logo-head {
        width: 12%;
        height: 60px;
        padding: 5px 0px;
        float: left;
    }
    .admin-head-right {
        width: 30%;
        float: right;
        height: 60px;
        .user-wrap {
            margin-right: 20px;
            float: right;
            height: 60px;
            line-height: 60px;
            .user-name {
              color: #fff;
              font-size: 12px;
            }
            .ivu-avatar {
                vertical-align: middle;
            }
            .admin-exit {
                  width: 18px;
                  height: 18px;
                  color: #fff;
                  float: right;
                  font-size: 18px;
                  margin-left: 20px;
            }
        }
    }
}
</style>
<template>
<div class="admin-head clear">
    <div class="admin-logo-head">
        <router-link to="/home"><img src="./logo2.png"></router-link>
    </div>
    <div class="admin-head-right">
        <div class="user-wrap">
            <Avatar icon="person" style="margin-right:10px;"/>
            <Dropdown>
                <a href="javascript:void(0)" class="user-name" @click="userInfo">{{cemail}}</a>
            </Dropdown>
            <div class="admin-exit" @click="exit">
                <Icon type="log-out"></Icon>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {getCookie,delCookie} from '@/common/js/cookie.js'
export default {
    name: 'admin-head',
    props:["cemail"],
    data() {
        return {
            email:""
        }
    },
    methods: {
        exit(){
            delCookie("userid");
            delCookie("email");
            delCookie("password");
            delCookie("rememberPassword");
            this.$router.push("/")
        },
        userInfo(){
            this.$router.push("/admin/userinfo")
        }
    },
    components: {
      
    },
    mounted(){
        // this.email=getCookie('email');
    }
};
</script>
