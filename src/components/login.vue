<template>
    <div id='login'>
        <div id='input_box'>
            <p id='error_message'>{{error_message}}</p>
            <p class='input'>用户名<input type="text" v-model="user_name" name="" id="input_user_name" value=""></p>
            <p class='input'>密码<input type="text" v-model="password" name="" id="input_user_name" value=""></p>
            <p class='input'>昵称（已注册用户不需要填写）<input type="text" v-model="nick_name" name="" id="input_nick_name" value=""></p>
        </div>
        <div id='buttons'>
            <div id='regist' v-on:click="regist()">注册</div>
            <div id='login' v-on:click="login()">登录</div>
        </div>
    </div>
</template>

<script>
    import api from '../api/api.js';
    export default{
        name: 'Login',
        data(){
            return{
                user_name: '',
                password: '',
                nick_name: '',
                error_message: ''
            }
        },
        methods:{
            login(){
                api.login(this.$root, (jsonObj)=>{
                    if ('IsError' in jsonObj) {
                        this.error_message = jsonObj.Message;
                    } else {
                        this.$store.commit("login");
                        this.$router.push("/");
                    }
                }, this.user_name, this.password);
            },
            regist(){
                api.regist(this.$root, (jsonObj)=>{
                    if ('IsError' in jsonObj) {
                        this.error_message = jsonObj.Message;
                    } else {
                        this.$store.commit("login");
                        this.$router.push("/");
                    }
                }, this.user_name, this.password, this.nick_name);
            }
        }
    }
</script>

<style scoped>
#login{
    float: left;
}
#buttons div {
    width: 200px;
    height:30px;
    background-color:#55B696;
    border: 2px solid #76BAAE;
    margin: 10px;
}
</style>
