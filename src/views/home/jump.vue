<template>
    <div>
        正在跳转...
    </div>
</template>
<script>
    export default{
        name:'jump',
        data(){
            url:M.url()
        },
        created(){
            let code=this.url.code;
            if(code){
                // this.load=this.$store.state.load;
                login.tgexLogin(code).then((data)=>{
                    // this.load=false;
                    // this.$store.state.load=this.load;
                    if(data.data==null || data.data=="null"){
                        this.$Message.error(data.msg)
                        this.$router.push("/login")
                    }else{
                        setCookie('email',data.data.email,null,null,"365");
                        setCookie('userid',data.data.userid,null,null,"365");
                        // this.cemail=data.data.email;
                        this.$router.push("/admin")
                    }
                })
            }
        }
    }
</script>